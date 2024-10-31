

interface ILandings {
    kingsWorld: string
    casinoGuru: string
}

interface IDropdownCountries {
    kingsWorld: string[]
    casinoGuru: string[]
}

interface IDropdownCurrencies {
    kingsWorld: string[],
    casinoGuru: string[]
}

interface IRedirectLinks {
    TermsAndConditions: string
    PrivacyPolicy: string
    CGTermsAndConditions: string
    CGPrivacyPolicy: string
}

export const REDIRECT_LINKS: IRedirectLinks = {
    TermsAndConditions: 'https://www.kingbillycasino.com/terms-and-conditions',
    PrivacyPolicy: 'https://www.kingbillycasino.com/privacy-policy',
    CGTermsAndConditions: 'https://www.kingbillycasino1.com/terms-and-conditions',
    CGPrivacyPolicy: 'https://www.kingbillycasino1.com/privacy-policy'
}

export const KINGBILLYSITE = {
    registration: 'https://www.kingbillycasino.com/?success-after-registration=modal',
    logo: 'https://www.kingbillycasino.com',
    CGregistration: 'https://www.kingbillycasino1.com/?success-after-registration=modal',
    CGlogo: 'https://www.kingbillycasino1.com'}
    

export const LANDINGS: ILandings = {
    kingsWorld: 'https://www.kingbillycasino.com/land/en/kings_world_welcome_pack_1?nofingerprint=1',
    casinoGuru: 'https://www.kingbillycasino1.com/land/ie/casinoguru?nofingerprint=1'
}

export const DROPDOWN_COUNTRIES: IDropdownCountries = {
    kingsWorld: ['Argentina', 'Australia', 'Austria', 'Bahrain', 'Brazil', 'Canada', 'Chile', 'Denmark', 'Ecuador', 'Germany',
         'Iceland', 'India', 'Ireland', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', "Korea, Republic of", 'Kuwait', 'Lesotho', 
         'Luxembourg', 'Malta', 'Mexico', 'New Zealand', 'Norway', 'Oman', 'Philippines', 'Puerto Rico', 'Qatar', 'Saint Vincent and the Grenadines', 
         'Saudi Arabia', 'Slovenia', 'South Africa', 'Switzerland', 'United Arab Emirates', 'Uruguay'],
    casinoGuru: ['Argentina', 'Australia', 'Austria', 'Bahrain', 'Brazil', 'Canada', 'Chile', 'Denmark', 'Ecuador', 'Germany',
        'Iceland', 'India', 'Ireland', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', "Korea, Republic of", 'Kuwait', 'Lesotho', 
        'Luxembourg', 'Malta', 'Mexico', 'New Zealand', 'Norway', 'Oman', 'Philippines', 'Puerto Rico', 'Qatar', 'Saint Vincent and the Grenadines', 
        'Saudi Arabia', 'Slovenia', 'South Africa', 'Switzerland', 'United Arab Emirates', 'Uruguay']
}


export const DROPDOWN_CURRENCIES: IDropdownCurrencies = {
    kingsWorld: ['EUR', 'USD', 'NOK', 'AUD', 'NZD', 'CAD', 'ZAR', 'JPY', 'INR', 'PHP', 'BTC', 'ETH', 'LTC', 'USDT'],
    casinoGuru: ['EUR', 'USD', 'NOK', 'AUD', 'NZD', 'CAD', 'ZAR', 'JPY', 'INR', 'PHP', 'BTC', 'ETH', 'LTC', 'USDT']
}


export const EMAIL_DOMAINS: string[] = ["jens.reusch@gmx.de", "hanz@Web.de", "hanz@T-Online.de", "kirt_boynton@hotmail.com", "ivan@gmail.com", "anthony_faison@yahoo.ca",
     "dyspraxia.centre@xtra.co.nz", "info@academyonline.no", "info@icloud.com", "john@hotmail.com", "mike@proton.me", "ben@outlook.com"];





