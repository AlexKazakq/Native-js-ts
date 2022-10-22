import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser, removeBook, updateBook, updateCompanyTitle, updateCompanyTitle2,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLapTopType, WithCompaniesType
} from "./10_01";


test("reference type test", () => {
    let user: UserType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev"
        }
    }

    const awesomeUser = makeHairStyle(user, 2)

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
})

test("move user", () => {
    let user: UserWithLapTopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const movedUser = moveUser(user, "Minsk")

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe("Minsk")

})
test("upgrade laptop to macbook", () => {
    let user: UserWithLapTopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        }
    }

    const userCopy = upgradeUserLaptop(user, "Macbook")

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).not.toBe(userCopy.laptop)
    expect(userCopy.laptop.title).toBe("Macbook")
    expect(user.laptop.title).toBe("ZenBook")

})

test("add new books to user", () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = addNewBooksToUser(user, ["ts", "rest api"])

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[4]).toBe("ts")
    expect(userCopy.books[5]).toBe("rest api")
})

test("update js to ts", () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("ts")
})

test("remove js book", () => {
    let user: UserWithLapTopType & UserWithBooksType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        books: ["css", "html", "js", "react"]
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe("react")
})

test("remove js book", () => {
    let user: UserWithLapTopType & WithCompaniesType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [
            {id: 1, title: 'Epam'},
            {id: 2, title: 'IT-INCUBATOR'},
        ]
    }

    const userCopy = addCompany(user, 'Google')

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.laptop).toBe(userCopy.laptop)
})

test("update user company", () => {
    let user: UserWithLapTopType & WithCompaniesType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
        companies: [
            {id: 1, title: 'Епам'},
            {id: 2, title: 'IT-INCUBATOR'},
        ]
    }

    const userCopy = updateCompanyTitle(user, 1, 'EPAM') as UserWithLapTopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test("update company ", () => {
    let user: UserWithLapTopType = {
        name: "Alex",
        hair: 32,
        address: {
            city: "Mogilev",
            house: 12
        },
        laptop: {
            title: "ZenBook"
        },
    }

    let companies = {
        'Alex': [{id: 1, title: 'Епам'}, {id: 2, title: 'IT-INCUBATOR'}],
        'Dimych': [{id: 1, title: 'IT-INCUBATOR'}]
    }

    const copy = updateCompanyTitle2(companies, 'Alex', 1, 'EPAM')

    expect(copy['Alex']).not.toBe(companies['Alex'])
    expect(copy['Dimych']).toBe(companies['Dimych'])
})

