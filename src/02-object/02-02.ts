export type GovernmentBuildingType = {
    type: "HOSPITAL" | "FIRE-STATION"
    budget: number
    staffCount: number
    address: AddressType
}

export type StreetType = {
    title: string;
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type CityType = {
    title: string,
    houses: HouseType[],
    governmentBuildings: GovernmentBuildingType[],
    citizensNumber: number
}
export type HouseType = {
    id?: number
    buildedAt: number
    repaired: boolean
    address: AddressType
}