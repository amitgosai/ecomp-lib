import { IDbFields } from "../data/dbfields.model";

export interface IContactGroup extends IDbFields {
    companyId: string;
    contactGroupName: string;
    contactGroupColor: string;
}