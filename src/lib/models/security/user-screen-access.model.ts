import { IDbFields } from "../data/dbfields.model";

export interface IUserScreenAccess extends IDbFields {
    appId: string;
    userId: string;
    screenId: string;
    view: boolean;
}