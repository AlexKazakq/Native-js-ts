function increaseAge(u: UserType) {
    u.age++
}

type UserType = {
    name: string
    age: number
    address: {title: string}
}

test("reference type test", () => {
    let user: UserType = {
        name: "Alex",
        age: 32,
        address: {
            title: 'Mogilev'
        }
    }

    increaseAge(user)

    expect(user.age).toBe(33)

    const superMan = user

    superMan.age = 1000;

    expect(user.age).toBe(1000)
})

test("array reference test", () => {
    let users = [
        {
            name: "Alex",
            age: 32
        },
        {
            name: "Alex",
            age: 32
        },
    ]
    let admins = users

    admins.push({name: 'Bandugan', age: 10})


    expect(users[2]).toEqual({name: 'Bandugan', age: 10})

})

test("value reference test", () => {
    let usersCount = 100;

    let adminsCount = usersCount

    adminsCount++
})

test("reference type test", () => {
    let user: UserType = {
        name: "Alex",
        age: 32,
        address: {
            title: 'Mogilev'
        }
    }

    // let addr = user.address

    let user2: UserType = {
        name: 'Dimych',
        age: 30,
        address: user.address
    }

    user2.address.title = "Kanary";


    expect(user.address).toBe(user2.address)
})

test("reference type array test", () => {
    let address = {title: 'Minsk'}

    let user: UserType = {
        name: "Alex",
        age: 32,
        address: address
    }

    let user2: UserType = {
        name: 'Dimych',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}]

    const admins = [user, user2]

    admins[0].name='Alexandr'



    expect(users[0].name).toBe('Alexandr')
    expect(user.name).toBe('Alexandr')

})