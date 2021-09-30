import { IDbFields } from "../data/dbfields.model";

export const taxIdType = {
    GST: "GST", 
    SGST: "SGST", 
    CGST: "CGST",
    PAN: "PAN",
    Other: "Other"
}
export type tTaxIdType = "GST" | "SGST" | "CGST" | "PAN" | "Other"; 

export interface ITaxID extends IDbFields {
    taxIdType: tTaxIdType;
    taxId: string; 
}

export interface ILkpCountryTaxTypes extends IDbFields {
    countryId: string;
    taxType: string;
    isIdType: boolean;
}