//import { ObjectId } from 'bson';

export type User = {
    id: string ;
    firstName?: string;
    lastName?: string;
    email?: string;
    birthday?: string;
};

export type Vehicle = {
    id: string ;
    licensePlate?: string;
    vin?: string;
    model?: string;
    active?: boolean;
    color?: string;
    validTill?: Date;
};
