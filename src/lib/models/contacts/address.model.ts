import { IDbFields } from "../data/dbfields.model";

export interface IAddress extends IDbFields {
    companyId?: string | null | undefined; 
    personId?: string | null | undefined; 
    addressName?: string | null | undefined;
    addressLine1: string;  
    addressLine2?: string | null | undefined; 
    areaName?: string | null | undefined; 
    city?: string | null | undefined; 
    state?: string | null | undefined;  
    country?: string | null | undefined; 
    zipCode?: string | null | undefined; 
    lat?: number | null | undefined; 
    long?: number | null | undefined; 
}