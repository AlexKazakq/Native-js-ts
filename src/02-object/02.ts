export type StudentType = {
    name: string;
    age: number;
    isActive: boolean;
    address: AddressType;
    technologies: TechnologiesType[];
}
type AddressType = {
    streetTitle: string;
    city: LocalCityType;
}
type LocalCityType = {
    title: string;
    countryTitle: string;
}
type TechnologiesType = {
    id: number;
    title: string;
}

export const students: StudentType = {
    "name": "Alex",
    age: 26,
    isActive: false,
    address: {
        streetTitle: "Burdenko 8",
        city: {
            title: "Mpgilev",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        },
    ]
}

console.log(students.age);
console.log(students.name);
console.log(students.address.city.title);
console.log(students.technologies[2].title);
