import { IDbFields } from "../data/dbfields.model";

export interface IJobTitle extends IDbFields {
    companyId: string;
    jobTitle: string;
    jobBandId: string;
    jobBand: string;
}