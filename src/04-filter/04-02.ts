import {CityType, GovernmentBuildingType, HouseType} from "../02-object/02-02";

export function demolishHousesOnTheStreet(city: CityType, street: string) {
    city.houses = city.houses.filter(st => st.address.street.title !== street)
}
export function getBuildingsWithStaffCountGraterThen(buildings:GovernmentBuildingType[], count: number) {
    return buildings.filter((c => c.staffCount > count))
}