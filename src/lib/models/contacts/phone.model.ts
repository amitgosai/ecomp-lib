export interface IPhone {
    phoneType?: string | null | undefined;
    countryCode?: string | null | undefined;
    phoneNumber: string;
    isPrimary?: boolean | null | undefined;
    isVerified?: boolean | null | undefined;
}