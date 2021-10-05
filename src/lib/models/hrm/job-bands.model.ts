import { IDbFields } from "../data/dbfields.model";

export interface IJobBands extends IDbFields {
    companyId: string;
    jobBand: string;
    salCurrencyCode: string;
    salCurrencySymbol: string;
    minSalary: number;
    maxSalary: number;
}