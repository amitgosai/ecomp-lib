export interface IEmail {
    email: string; 
    emailType?: string | null | undefined;
    isPrimary?: boolean | null | undefined; 
    isVerified?: boolean | null | undefined; 
}