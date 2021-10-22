import { IDbFields } from "../data/dbfields.model";

export interface IBankAccountType extends IDbFields {
    bankAccountType: string;
}

export interface IBankAccount {
    accountCountry: string;
    bankName: string;
    accountType: string;
    accountNumber: string;
    accountIFSC: string;
    accountSwift: string | null | undefined;
}