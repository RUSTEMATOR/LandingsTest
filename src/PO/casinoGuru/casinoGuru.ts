import { expect, type Locator, type Page } from "playwright/test";
import { faker } from '@faker-js/faker';


interface IcompleteRegistrationFirstStep{
    (details: {email?: string, password?: string}): Promise<void>
    
    
}


export class CasinoGuru {
    readonly page: Page
    readonly LogoDesktop: Locator
    readonly LogoMobile: Locator
    readonly MainPicture: Locator
    readonly registrationStepper: Locator
    readonly infoBlockHowTo: Locator
    readonly infoTermsAndCond: Locator
    readonly paymentLogos: Locator
    readonly verifLogos: Locator
    readonly license: Locator
    readonly regForm: Locator
    readonly openRegGorm: Locator
    readonly emailInput: Locator
    readonly passwordInput: Locator
    readonly ageCheckbox: Locator
    readonly ageCheckboxHit: Locator
    readonly promoCheckbox: Locator
    readonly promoCheckboxHit: Locator
    readonly crossSaleCheckbox: Locator
    readonly crossSaleCheckboxHit: Locator
    readonly firstNextButton: Locator
    readonly secondNextButton: Locator
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
    readonly firstNameInfput: Locator
    readonly lastNameInfput: Locator
    readonly dayInput: Locator
    readonly monthInput: Locator
    readonly yearInput: Locator
    readonly genderMale: Locator
    readonly genderFemale: Locator
    readonly blankError: Locator
    readonly passProgressBar: Locator
    readonly passProgressBarText: Locator
    readonly invalidPassToolTip: Locator
    readonly cityInput: Locator
    readonly addressInput: Locator
    readonly postalCodeInput: Locator
    readonly phoneNumberInput: Locator
    readonly countryDropdownItem: (country: string) => Locator;
    readonly countryDropdownItemSelected: (country: string) => Locator;
    readonly currencyDropdownItem: (currency: string) => Locator;
    readonly currencyDropdownItemSelected: (currency: string) => Locator;

    

    constructor(page: Page){
        this.page = page
        this.LogoDesktop = page.locator("xpath=//div[contains(@class,'header_desktop_logo')]/div[contains(@class, 'svelte-abczik')]/img")
        this.LogoMobile = page.locator("xpath=//div[contains(@class,'header_mobile_logo')]/div[contains(@class, 'svelte-abczik')]/img")
        this.MainPicture = page.locator("xpath=//div[contains(@class, 'offer__character ')]/img")
        this.registrationStepper = page.locator("xpath=//div[contains(@class, 'offer__steps')]")
        this.infoBlockHowTo = page.locator("div.howto.svelte-abczik")
        this.infoTermsAndCond = page.locator("div.terms.svelte-abczik")
        this.paymentLogos = page.locator("div.footer_block-payments")
        this.verifLogos = page.locator("div.footer_block-logos")
        this.license = page.locator("div.footer_block-text")
        this.openRegGorm = page.locator("div.offer__button")


        this.firstNextButton = page.locator("xpath=//div[contains(@class, 'first-step')]/div[contains(@class, 'form_buttons_wrapper')]/div/button")
        this.regForm = page.locator("xpath=//div[contains(@class, 'form_block')]")
        this.emailInput = page.locator("input.svelte-15nv5yr")
        this.passwordInput = page.locator("input#id")
        this.ageCheckboxHit = page.locator("xpath=//label[contains(@for, 'rule') and contains(@class, 'gal')]")
        this.ageCheckbox = page.locator("#rule")
        this.promoCheckbox = page.locator("#promos")
        this.promoCheckboxHit = page.locator("xpath=//label[contains(@for, 'promos') and contains(@class, 'gal')]")
        this.crossSaleCheckbox = page.locator("#crossale")
        this.crossSaleCheckboxHit = page.locator("xpath=//label[contains(@for, 'crossale') and contains(@class, 'gal')]")


        this.secondNextButton = page.locator("xpath=//div[contains(@class, 'second-step')]/div[contains(@class, 'form_buttons_wrapper')]/div/button")
        this.firstNameInfput = page.locator('#first-name')
        this.lastNameInfput = page.locator('last-name')
        this.dayInput = page.locator("#day")
        this.monthInput = page.locator("#month")
        this.yearInput = page.locator("#year")
        this.genderMale = page.locator("#m")
        this.genderFemale = page.locator("button#f")



        this.createAccountButton = page.locator("xpath=//div[contains(@class, 'third-step')]/div[contains(@class, 'form_buttons_wrapper')]/div/button[contains(@class, 'create_account')]")
        this.cityInput = page.locator('#city')
        this.addressInput = page.locator('#address')
        this.postalCodeInput = page.locator('#postal_code')
        this.phoneNumberInput = page.locator('#tel-input')

        this.hidePassButton = page.locator("xpath=//button[contains(@class, 'pass')]")
        this.countryDropdown = page.locator("button.btn.svelte-eg7mu2")
        this.currencyDropdown = page.locator("button.btn.svelte-g9bpfz")
        this.termsAndConditionsLink = page.getByRole('link', { name: 'Terms and Conditions' })
        this.privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy' })

        this.notValidEmailError = page.locator("//div[contains(@class, 'error')]/span[contains(@class, 'active')]").filter({hasText: 'Email is not valid'})
        this.stepperOne = page.locator("xpath=//div[contains(@class, 'offer__steps')]/div[contains(@class, 'step') and contains(@class, 'first')]")
        this.stepperTwo = page.locator("xpath=//div[contains(@class, 'offer__steps')]/div[contains(@class, 'step') and contains(@class, 'second')]")
        this.stepperThree = page.locator("xpath=//div[contains(@class, 'offer__steps')]/div[contains(@class, 'step') and contains(@class, 'third')]")

        this.blankError = page.locator("xpath=//div[contains(@class, 'error')]/span[contains(@class, 'active')]").filter({hasText: "Can't be blank"})
        this.passProgressBar = page.locator("xpath=//div[contains(@class, 'progress-bar')]/div[contains(@class, 'progress-state')]")
        this.passProgressBarText = page.locator("xpath=//div[contains(@class, 'progress-text')]")
        this.invalidPassToolTip= page.locator("xpath=//div[contains(@class, 'error')]/span[contains(@class, 'active')]")

        this.countryDropdownItem = (country: string) => page.locator(`xpath=//button[contains(@data-text, ${'country'})]`).filter({hasText: `${country}`})
        this.countryDropdownItemSelected = (country: string) => page.locator(`xpath=//button[contains(@data-text, ${'country'}) and contains(@class, 'selected')]`).filter({hasText: `${country}`}).nth(0)
        this.currencyDropdownItem = (currency: string) => page.getByRole('button', { name: `${currency}`, exact: true })
        this.currencyDropdownItemSelected = (currency: string) => page.locator(`xpath=//button[contains(@data-text, ${currency}) and contains(@class, 'selected')]`).filter({hasText: `${currency}`}).nth(0)
        

    }

    get CGLogoDesktop(): Locator{
        return this.LogoDesktop;
    }

    get CGLogoMobile(): Locator {
        return this.LogoMobile;
    }

    get CGMainPicture(): Locator {
        return this.MainPicture;
    }

    get regStepper(): Locator {
        return this.registrationStepper;
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

    get CGopenRegForm(): Locator {
        return this.openRegGorm;
    }

    get CGRegForm(): Locator {
        return this.regForm;
    }
    
    get CGEmailInput(): Locator {
        return this.emailInput;
    }

    get CGAgeCheckboxHit(): Locator {
        return this.ageCheckboxHit;
    }

    get CGAgeCheckbox(): Locator {
        return this.ageCheckbox;
    }

    get CGPromoCheckbox(): Locator {
        return this.promoCheckbox;
    }

    get CGPromoCheckboxHit(): Locator {
        return this.promoCheckboxHit;
    }


    get CGCrossSaleCheckbox(): Locator {
        return this.crossSaleCheckbox;
    }

    get CGfirstNextButton(): Locator {
        return this.firstNextButton;
    }

    get CGSecondNextButton(): Locator {
        return this.secondNextButton;
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


    get CGblankError(): Locator {
        return this.blankError;
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
        await this.countryDropdownItem(country).click()
        await expect(this.countryDropdownItemSelected(country)).toBeVisible()
    }

    async checkDropdownCurrencies(currency: string){
        console.log(`Checking ${currency} visibility in dropdown`)
        await this.currencyDropdownItem(currency).click()
        await expect(this.currencyDropdownItemSelected(currency)).toBeVisible()
    }

    checkEmailAndPasswordField: IcompleteRegistrationFirstStep = async ({email, password}) => {
        await this.emailInput.fill(email || '')
        await this.passwordInput.fill(password || '')
    }

    completeRegistrationFirstStep: IcompleteRegistrationFirstStep = async ({email, password}) => {
        await this.emailInput.fill(email || '')
        await this.passwordInput.fill(password || '')
        await this.ageCheckbox.click()
    }

    async completeRegistrationSecondStep({firstName, secondName, day, month, year, gender}:
    {firstName?: string, secondName?: string, day?: string, month?: string, year?: string, gender?: boolean}){
        if(firstName){
            await this.firstNameInfput.fill(firstName)
        }
        if(secondName){
            await this.lastNameInfput.fill(secondName)
        }
        if(day){
            await this.dayInput.selectOption(String(day))
        }
        if(month){
            await this.monthInput.selectOption(String(month))
        }
        if(year){
            await this.yearInput.selectOption(String(year))
        }
        if(gender){
            if(gender = true){
                await this.genderMale.click()
            } else {
                await this.genderFemale.click()
            }
        }
    }

    async completeRegistrationThirdStep(city?: string, address?: string, postalCode?: string, phoneNumber?: string){
        await this.cityInput.fill(city || '')
        await this.addressInput.fill(address || '')
        await this.postalCodeInput.fill(postalCode || '')
        await this.phoneNumberInput.fill(phoneNumber || '')
    }

    
}