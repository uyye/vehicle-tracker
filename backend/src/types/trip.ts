export type TripAttributes = {
    id?:number;
    vehicle_id:number;
    start_time: Date;
    end_time: Date;
    status: string;
    createdAt?: Date;
    updatedAt?: Date;
}