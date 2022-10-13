export type UsersType = {
    [key: string]: {id: number, name: string};
}

export let users: UsersType

beforeEach(() => {
     users = {
        "101": {id: 101, name: "Dymich"},
        "3232312": {id: 3232312, name: "Alex"},
        "1212": {id: 1212, name: "Valera"},
        "1": {id: 1, name: "Katya"},
    }
})
test('should update corresponding user', () => {
    users['1'].name = 'Ekaterina'

    expect(users['1']).toEqual({id: 1, name: 'Ekaterina'})
})