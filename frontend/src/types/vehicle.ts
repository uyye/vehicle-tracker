import type { TripAttribute } from "./trip";

export type VehicleAttributes = {
    id?: number;
    plat_number: string;
    model:string;
    status:string;
    createdAt?:Date;
    updatedAt?:Date;
    Trips?: TripAttribute[]
}

export type vehicleState = {
    vehicles: VehicleAttributes[],
    totalPages: number,
    vehicle: VehicleAttributes | null,
    page: number,
    search: string,
    loading: boolean,
    error: string | null,
}

export type VehicleQuery = {
    page?:number | undefined,
    search?: string | undefined
}