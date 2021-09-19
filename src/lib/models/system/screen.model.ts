import { IDbFields } from "../data/dbfields.model";

export interface IScreen extends IDbFields {
    appId: string;
    screenId: string;
    screenName: string;
}