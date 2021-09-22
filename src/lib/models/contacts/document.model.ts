import { IDbFields } from "../data/dbfields.model";

export interface IDocumentType extends IDbFields {
    documentType: string;
};

export interface IDocument extends IDbFields {
    personId?: string | null | undefined;
    companyId: string | null | undefined;
    documentName: string;
    documentType: string;
    documentURL: string;
    storagePath: string;
};