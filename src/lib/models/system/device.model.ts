import { IDbFields } from "../data/dbfields.model";

export interface IDevice extends IDbFields {
    deviceId: string | null | undefined; 
    deviceName: string | null | undefined;
    deviceOS: string | null | undefined;
    deviceIP: string | null | undefined;
    screenSize: string | null | undefined;
}