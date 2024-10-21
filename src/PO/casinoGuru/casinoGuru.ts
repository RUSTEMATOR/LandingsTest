import { expect, type Locator, type Page } from "playwright/test";


export class CasinoGuru {
    readonly page: Page
    readonly Logo: Locator
    readonly MainPicture: Locator
    readonly benefitsBlock: Locator
    readonly infoBlockHowTo: Locator
    readonly infoTermsAndCond: Locator
    readonly paymentLogos: Locator
    readonly verifLogos: Locator
    readonly license: Locator
    readonly whyUsGetIt: Locator
    readonly howToGetIt: Locator
    readonly regForm: Locator
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly ageCheckbox: Locator
    readonly promoCheckbox: Locator
    readonly crossSaleCheckbox: Locator
    readonly createAccountButton: Locator
    readonly hidePassButton: Locator
    readonly countryDropdown: Locator
    readonly currencyDropdown: Locator
    readonly termsAndConditionsLink: Locator
    readonly privacyPolicyLink: Locator
    readonly notValidEmailError: Locator
    readonly stepperOne: Locator
    readonly stepperTwo: Locator
    readonly stepperThree: Locator
    readonly whyUsStepperOne: Locator
    readonly whyUsStepperTwo: Locator
    readonly whyUsStepperThree: Locator
    readonly invalidEmailError: Locator
    readonly blankEmailError: Locator
    readonly passProgressBar: Locator
    readonly passProgressBarText: Locator
    readonly invalidPassToolTip: Locator
    readonly countryDropdownItem: (country: string) => Locator;
    readonly currencyDropdownItem: (currency: string) => Locator;

    constructor(page: Page){
        this.page = page
        this.Logo = page.locator('xpath=')
        this.MainPicture = page.locator("xpath=")
        this.benefitsBlock = page.locator("xpath=")
        this.infoBlockHowTo = page.locator("xpath=")
        this.infoTermsAndCond = page.locator("xpath=")
        this.paymentLogos = page.locator("xpath=")
        this.verifLogos = page.locator("xpath=")
        this.license = page.locator("xpath=")
        this.whyUsGetIt = page.locator("")
        this.howToGetIt = page.locator("")
        this.regForm = page.locator("")
        this.emailInput = page.locator("")
        this.passwordInput = page.locator("")
        this.ageCheckbox = page.locator("")
        this.promoCheckbox = page.locator("")
        this.crossSaleCheckbox = page.locator("")
        this.createAccountButton = page.locator("")
        this.hidePassButton = page.locator("")
        this.countryDropdown = page.locator("")
        this.currencyDropdown = page.locator("")
        this.termsAndConditionsLink = page.getByRole('link', { name: 'Terms and Conditions' })
        this.privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy' })
        this.notValidEmailError = page.locator("").filter({hasText: 'Email is not valid'})
        this.stepperOne = page.locator("")
        this.stepperTwo = page.locator("")
        this.stepperThree = page.locator("")
        this.whyUsStepperOne = page.locator(``)
        this.whyUsStepperTwo = page.locator(``)
        this.whyUsStepperThree = page.locator(``)
        this.invalidEmailError = page.locator("").filter({hasText: 'Email is not valid'})
        this.blankEmailError = page.locator("").filter({hasText: "Can't be blank"})
        this.passProgressBar = page.locator("")
        this.passProgressBarText = page.locator("")
        this.invalidPassToolTip= page.locator("")
        this.countryDropdownItem = (country: string) => page.locator(`xpath=//button[contains(@data-text, ${'country'})]`).filter({hasText: `${country}`})
        this.currencyDropdownItem = (currency: string) => page.getByRole('button', { name: `${currency}`, exact: true })

    }

    get CGLogo(): Locator{
        return this.Logo;
    }

    get CGMainPicture(): Locator {
        return this.MainPicture;
    }

    get whyUsBlock(): Locator {
        return this.benefitsBlock;
    }

    get howToBlock(): Locator {
        return this.infoBlockHowTo;
    }

    get termsAndConditionsBlock(): Locator {
        return this.infoTermsAndCond;
    }

    get CGPaymentLogos(): Locator {
        return this.paymentLogos;
    }

    get CGVerificationLogos(): Locator {
        return this.verifLogos;
    }

    get CGLicenseText(): Locator {
        return this.license;
    }

    get CGWhyUsGetItButton(): Locator {
        return this.whyUsGetIt;
    }
    
    get CGHowToGetItButton(): Locator {
        return this.howToGetIt;
    }

    get CGRegForm(): Locator {
        return this.regForm;
    }
    
    get CGEmailInput(): Locator {
        return this.emailInput;
    }

    get CGAgeCheckbox(): Locator {
        return this.ageCheckbox;
    }

    get CGPromoCheckbox(): Locator {
        return this.promoCheckbox;
    }


    get CGCrossSaleCheckbox(): Locator {
        return this.crossSaleCheckbox;
    }


    get CGCreateAccountButton(): Locator {
        return this.createAccountButton;
    }

    get CGHidePassButton(): Locator {
        return this.hidePassButton;
    }

    get CGCountryDropdown(): Locator {
        return this.countryDropdown;
    }

    get CGCurrencyDropdown(): Locator {
        return this.currencyDropdown;
    }

    get CGTermsAndConditionsLink(): Locator {
        return this.termsAndConditionsLink;
    }

    get CGPrivacyPolicyLink(): Locator {
        return this.privacyPolicyLink;
    }

    get CGNotValidEmailError(): Locator {
        return this.notValidEmailError;
    }

    get CGInvalidEmailError(): Locator {
        return this.invalidEmailError;
    }

    get CGBlankEmailError(): Locator {
        return this.blankEmailError;
    }

    get CGPassProgressBar(): Locator {
        return this.passProgressBar;
    }

    get CGPassProgressBarText(): Locator {
        return this.passProgressBarText;
    }

    async navigateTo(link: string) {
        await this.page.goto(link)
    }

    async clickDropdownCountries(country: string){
        await this.CGCountryDropdown.click()
        await this.countryDropdownItem(country).click()
    }

    async checkDropdownCountries(country: string){
        console.log(`Checking ${country} visibility in dropdown`)
        await this.currencyDropdownItem(country).click()
        await expect(this.countryDropdownItem(country)).toBeVisible()
    }

    async checkDropdownCurrencies(currency: string){
        console.log(`Checking ${currency} visibility in dropdown`)
        await this.currencyDropdownItem(currency).click()
        await expect(this.currencyDropdownItem(currency)).toBeVisible()
    }

    
}