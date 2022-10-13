import {createGreatingMessage, getStreetsTitleOfGovernmentBuildings, ManType} from "./05-01";
import {CityType} from "../02-object/02-02";

// let people: ManType[] = [
//     {name: "Andrey Ivanov", age: 33},
//     {name: "Alexandr Petrov", age: 24},
//     {name: "Dmitry Sidorov", age: 18},
// ]
//
// beforeEach(() => {
//     people = [
//         {name: "Andrey Ivanov", age: 33},
//         {name: "Alexandr Petrov", age: 24},
//         {name: "Dmitry Sidorov", age: 18},
//     ]
// })
//
// test("should get array of greeting messages", () => {
//
//     const messages = createGreatingMessage(people);
//
//     expect(messages.length).toBe(3);
//     expect(messages[0]).toBe('Hello Andrey. Welcome to IT-Incubator');
//     expect(messages[1]).toBe('Hello Alexandr. Welcome to IT-Incubator');
//     expect(messages[2]).toBe('Hello Dmitry. Welcome to IT-Incubator');
// })

let city: CityType;

beforeEach(() => {
    city = {
        title: "New York",
        houses: [{
            id:1, buildedAt: 2012, repaired: false,
            address: {number: 100, street: {title: "White street"}}
        }, {
            id:2, buildedAt: 2008, repaired: false,
            address: {number: 100, street: {title: "Happy street"}}
        }, {
            id:3, buildedAt: 2020, repaired: false,
            address: {number: 101, street: {title: "Happy street"}}
        }],
        governmentBuildings: [
            {
                type: "HOSPITAL", budget: 200000, staffCount: 200,
                address: {
                    street: {title: 'Central Str'}
                }
            },
            {
                type: "FIRE-STATION", budget: 500000, staffCount: 1000,
                address: {
                    street: {title: 'South Str'}
                }
            }
        ],
        citizensNumber: 1000000
    }
});

test('list of streets titles of government buildings', () => {
    let streets = getStreetsTitleOfGovernmentBuildings(city.governmentBuildings);

    expect(streets.length).toBe(2);
    expect(streets[0]).toBe('Central Str');
    expect(streets[1]).toBe('South Str');
})