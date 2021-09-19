import { IDbFields } from "../data/dbfields.model";

export interface IGroupScreenElementAccess extends IDbFields {
    groupId: string; 
    screenId: string;
    elementId: string;
    view: boolean;
    enabled: boolean;
}