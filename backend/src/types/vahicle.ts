export type VehicleAttributes = {
    id?: number;
    plat_number: string;
    model:string;
    status:string;
    createdAt?:Date;
    updatedAt?:Date;
}

export type VehicleQuery = {
    page?:number | undefined,
    search?: string | undefined
}