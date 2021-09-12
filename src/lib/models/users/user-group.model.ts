import { IDbFields } from "../data/dbfields.model";

export interface IUserGroup extends IDbFields {
    appId: string; 
    companyId: string; 
    groupName: string; 
}