import { IDbFields } from "../data/dbfields.model";

export interface ICurrency extends IDbFields {
    countryCode: string;
    currencyCode: string;
    currencySymbol: string;
    currencyName: string;
    isDigital: boolean
}

export interface ITradeCurrency extends IDbFields {
    companyId: string;
    currencyCode: string;
    currencySymbol: string;
    isDefault: boolean;
    isDigital: boolean;
}