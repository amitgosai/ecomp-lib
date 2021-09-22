export const SocialMediaTypes = {
    LinkedIn: "LinkedIn", 
    Google: "Google", 
    Twitter: "Twitter", 
    Insta: "Instagram", 
    WhatsApp: "WhatsApp", 
    Signal: "Signal", 
    Telegram: "Telegram", 
    YouTube: "YouTube", 
    Facebook: "Facebook", 
    Other: "Other"
}

export type tSocialMediaTypes = "LinkedIn" | "Google" | "Twitter" | "Instagram" | "WhatsApp" | "Signal" | "Telegram" | "YouTube" | "Facebook" | "Other"; 

export const lkpSocialMediaTypes = [
    {value: "LinkedIn", text: "LinkedIn" },
    {value: "Google", text: "Google" },
    {value: "Twitter", text: "Twitter" },
    {value: "Instagram", text: "Instagram" },
    {value: "WhatsApp", text: "WhatsApp" },
    {value: "Telegram", text: "Telegram" },
    {value: "YouTube", text: "YouTube" },
    {value: "Facebook", text: "Facebook" },
    {value: "Other", text: "Other" },
];

export interface ISocialMediaID {
    socialMedia: string; 
    socialMediaId: string; 
    profileURL?: string | null | undefined; 
}