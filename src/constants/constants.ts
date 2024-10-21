

interface ILandings {
    kingsWorld: string
}

interface IDropdownCountries {
    kingsWorld: string[]
}

interface IDropdownCurrencies {
    kingsWorld: string[]
}

interface IRedirectLinks {
    TermsAndConditions: string
    PrivacyPolicy: string
}

export const REDIRECT_LINKS: IRedirectLinks = {
    TermsAndConditions: 'https://www.kingbillycasino.com/terms-and-conditions',
    PrivacyPolicy: 'https://www.kingbillycasino.com/privacy-policy'
}

export const KINGBILLYSITE = {
    registration: 'https://www.kingbillycasino.com/?success-after-registration=modal',
    logo: 'https://www.kingbillycasino.com' }
    

export const LANDINGS: ILandings = {
    kingsWorld: 'https://www.kingbillycasino.com/land/en/kings_world_welcome_pack_1?nofingerprint=1'
}

export const DROPDOWN_COUNTRIES: IDropdownCountries = {
    kingsWorld: ['Argentina', 'Australia', 'Austria', 'Bahrain', 'Brazil', 'Canada', 'Chile', 'Denmark', 'Ecuador', 'Germany',
         'Iceland', 'India', 'Ireland', 'Italy', 'Japan', 'Jordan', 'Kazakhstan', "Korea, Republic of", 'Kuwait', 'Lesotho', 
         'Luxembourg', 'Malta', 'Mexico', 'New Zealand', 'Norway', 'Oman', 'Philippines', 'Puerto Rico', 'Qatar', 'Saint Vincent and the Grenadines', 
         'Saudi Arabia', 'Slovenia', 'South Africa', 'Switzerland', 'United Arab Emirates', 'Uruguay']
}


export const DROPDOWN_CURRENCIES: IDropdownCurrencies = {
    kingsWorld: ['EUR', 'USD', 'NOK', 'AUD', 'NZD', 'CAD', 'ZAR', 'JPY', 'INR', 'PHP', 'BTC', 'ETH', 'LTC', 'USDT']
}


export const EMAIL_DOMAINS: string[] = ['GMX.de', 'Web.de', 'T-Online.de', 'Hotmail.com', 'gmail.com', 'Yahoo.ca', 'Xtra.co.nz', 'Online.no'];





