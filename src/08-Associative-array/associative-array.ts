let userObj = {
    "0": "Dimych",
    "1": "Alex",
    "2": "Andrey",
}
userObj["0"];
console.log(Object.keys(userObj))

export type UsersType = {
    [key: string]: {id: number, name: string};
}

export const users: UsersType = {
    "101": {id: 101, name: "Dymich"},
    "3232312": {id: 3232312, name: "Alex"},
    "1212": {id: 1212, name: "Valera"},
    "1": {id: 1, name: "Katya"},
}

// users['1']

let user = {id: 100500, name: "Igor"}
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Vitya'

export const usersArray = [
    {id: 101, name: "Dymich"},
    {id: 3232312, name: "Alex"},
    {id: 1212, name: "Valera"},
    {id: 1, name: "Katya"},
]

// usersArray.find(u => u.id === 1)
// usersArray.push(user)
// let usersCopy = [...usersArray.filter(), user]
// let usersArray = usersArray.filter(u => u.id !== user.id)
