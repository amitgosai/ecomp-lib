export interface IFbStsTokenManager {
    accessToken: string | null | undefined; 
    expirationTime: Date | null | undefined; 
    refreshToken: string | null | undefined; 
}
export interface IFbUserProvider {
    uid: string | undefined | null;
    providerId: string | undefined | null; 
    photoURL: string | undefined | null; 
    displayName: string | undefined | null; 
    email: string | null | undefined; 
    phoneNumber: string | null | undefined; 
}
export interface IFbUser {
    uid?: string | undefined | null;
    apiKey?: string | undefined | null; 
    appName?: string | undefined | null;
    createdAt?: Date | undefined | null;
    displayName?: string | undefined | null;
    photoURL?: string | undefined | null; 
    email?: string | undefined | null; 
    emailVerified: boolean; 
    isAnonymous: boolean; 
    phoneNumber?: string | undefined | null; 
    lastLoginAt?: Date | undefined | null;
    providerData: IFbUserProvider[] | null | undefined;
    stsTokenManager: IFbStsTokenManager
}