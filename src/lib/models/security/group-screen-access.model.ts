import { IDbFields } from "../data/dbfields.model";

export interface IGroupScreenAccess extends IDbFields {
    appId: string;
    groupId: string;
    screenId: string;
    view: boolean;
}