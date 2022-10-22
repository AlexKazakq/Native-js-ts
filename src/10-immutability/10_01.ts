export type UserType = {
    name: string,
    hair: number,
    address: {city: string, house?: number},
}

export type LaptopType = {
    title: string
}

export type UserWithLapTopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type WithCompaniesType = {
    companies: Array<{id: number, title: string}>
}


export function makeHairStyle(u: UserType, power: number) {
    const copy = {...u, hair: u.hair / power}

    return copy
}
export function moveUser(u: UserWithLapTopType, city: string) {
    return  {...u, address: {...u.address, city: city}}
}

export function upgradeUserLaptop(u: UserWithLapTopType, title: string) {
    return {...u, laptop: {...u.laptop, title: title}}
}

export function addNewBooksToUser (u: UserWithLapTopType & UserWithBooksType, newBooks: string[]) {
    return {...u, books: [...u.books, ...newBooks]}
}

export function updateBook (u: UserWithLapTopType & UserWithBooksType, oldBook: string, newBook: string) {
    return {...u, books: u.books.map(el => el === oldBook ? newBook : el)}
}

export const removeBook = (u: UserWithLapTopType & UserWithBooksType, bookToRemove: string) => {
    return {...u, books: u.books.filter(el => el !== bookToRemove)}
}

export const addCompany = (u: UserWithLapTopType & WithCompaniesType, title: string) => {
    const newCompany = {
        id: 3,
        title
    }

    return {...u, companies: [...u.companies, newCompany]}
}

export const updateCompanyTitle = (u: WithCompaniesType, id: number, newTitle: string) => {
    return {...u, companies: u.companies.map(el => el.id === id ? {...el, title: newTitle} : el)}
}

export const updateCompanyTitle2 = (companies: { [key: string]:Array< {id: number, title: string}>}, userName: string, companyId: number, newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    return companyCopy
}