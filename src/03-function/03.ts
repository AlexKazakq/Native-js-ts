// const sum = (a: number, b: number) => {
//     return a + b;
// }
//
// const res = sum(sum(1,2), sum(1,3));

import {students, StudentType} from "../02-object/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02-object/02-02";

export const addSkill =
(students: StudentType, skill: string) =>
{
    students.technologies.push({
        id: new Date().getTime(),
        title: skill
    });
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true;
}

export const doesStudentLiveIn = (s: StudentType, cityName: string) => {
    return s.address.city.title === cityName;
}

export const addMonetToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (houses: HouseType) => {
    houses.repaired = true;
}

export const toFireStaff = (staff: GovernmentBuildingType, amount: number) => {
    staff.staffCount -= amount;
}

export function createMessage(city: CityType) {
    return 'Hello ' + city.title + " citizens. I want you be happy. All " + city.citizensNumber + ' people'
}