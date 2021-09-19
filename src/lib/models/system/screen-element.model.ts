import { IDbFields } from "../data/dbfields.model";

export interface IScreenElement extends IDbFields {
    appId: string; 
    screenId: string;
    elementId: string;
    label?: string | null | undefined;
}