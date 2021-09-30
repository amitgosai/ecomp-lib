import { IDbFields } from "../data/dbfields.model";

export interface IDept extends IDbFields {
    companyId: string;
    deptName: string;
    deptNameLower: string;
}