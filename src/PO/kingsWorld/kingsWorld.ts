import { expect, type Locator, type Page } from "playwright/test";


export class KingsWorld {
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
        this.Logo = page.locator('xpath=//body//a/img')
        this.MainPicture = page.locator("xpath=//div[contains(@class, 'offer_block-king svelte-1t85epi')]")
        this.benefitsBlock = page.locator("xpath=//div[contains(@class, 'whyus_block svelte-1t85epi')]")
        this.infoBlockHowTo = page.locator("xpath=//div[contains(@class, 'howto_block-flexbox svelte-1t85epi')]")
        this.infoTermsAndCond = page.locator("xpath=//div[contains(@class, 'terms_block-container svelte-1t85epi')]")
        this.paymentLogos = page.locator("xpath=//div[contains(@class, 'footer_block-payments svelte-lmq9rw')]")
        this.verifLogos = page.locator("xpath=//div[contains(@class, 'footer_block-logos svelte-lmq9rw')]")
        this.license = page.locator("xpath=//div[contains(@class, 'footer_block-text svelte-lmq9rw')]")
        this.whyUsGetIt = page.locator("div.whyus_block-button.svelte-1t85epi")
        this.howToGetIt = page.locator("button.button.list-button")
        this.regForm = page.locator("xpath=//main")
        this.emailInput = page.locator("xpath=//main//input[contains(@name, 'email')]")
        this.passwordInput = page.locator("xpath=//main//input[contains(@name, 'password')]")
        this.ageCheckbox = page.locator("xpath=//label[contains(@for, 'rule') and contains(@class, 'gal svelte-5693iq')]")
        this.promoCheckbox = page.locator("xpath=//label[contains(@for, 'promos') and contains(@class, 'gal svelte-5693iq')]")
        this.crossSaleCheckbox = page.locator("xpath=//label[contains(@for, 'crossale') and contains(@class, 'gal svelte-5693iq')]")
        this.createAccountButton = page.locator("xpath=//div[contains(@class, 'svelte-1o46w68')]/button[contains(@class, 'create_account')]")
        this.hidePassButton = page.locator("xpath=//button[contains(@class, 'pass')]")
        this.countryDropdown = page.locator("xpath=//div[contains(@class, 'selects_wrapper')]//button[contains(@class, 'svelte-1gf82f6') and contains(@class, 'btn')]")
        this.currencyDropdown = page.locator("button.btn.svelte-1u63d2r")
        this.termsAndConditionsLink = page.getByRole('link', { name: 'Terms and Conditions' })
        this.privacyPolicyLink = page.getByRole('link', { name: 'Privacy Policy' })
        this.notValidEmailError = page.locator("xpath=//div[contains(@class, 'error')]").filter({hasText: 'Email is not valid'})
        this.stepperOne = page.locator("xpath=//div[contains(@class,  'offer_block-steps-banner')][1]")
        this.stepperTwo = page.locator("xpath=//div[contains(@class,  'offer_block-steps-banner')][2]")
        this.stepperThree = page.locator("xpath=//div[contains(@class,  'offer_block-steps-banner')][3]")
        this.whyUsStepperOne = page.locator(`xpath=//div[contains(@class, 'whyus_block-first svelte-1t85epi')]`)
        this.whyUsStepperTwo = page.locator(`xpath=//div[contains(@class, 'whyus_block-second svelte-1t85epi')]`)
        this.whyUsStepperThree = page.locator(`xpath=//div[contains(@class, 'whyus_block-third svelte-1t85epi')]`)
        this.invalidEmailError = page.locator("xpath=//div[contains(@class, 'error')]/span[contains(@class, 'active')]").filter({hasText: 'Email is not valid'})
        this.blankEmailError = page.locator("xpath=//div[contains(@class, 'error')]/span[contains(@class, 'active')]").filter({hasText: "Can't be blank"})
        this.passProgressBar = page.locator("xpath=//div[contains(@class, 'progress-bar')]/div[contains(@class, 'progress-state')]")
        this.passProgressBarText = page.locator("xpath=//div[contains(@class, 'progress-text')]")
        this.invalidPassToolTip= page.locator("xpath=//div[contains(@class, 'error')]/span[contains(@class, 'active')]")
        this.countryDropdownItem = (country: string) => page.locator(`xpath=//button[contains(@data-text, ${'country'})]`).filter({hasText: `${country}`})
        this.currencyDropdownItem = (currency: string) => page.getByRole('button', { name: `${currency}`, exact: true })

    }

    get KWLogo(): Locator{
        return this.Logo;
    }

    get KWMainPicture(): Locator {
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

    get KWPaymentLogos(): Locator {
        return this.paymentLogos;
    }

    get KWVerificationLogos(): Locator {
        return this.verifLogos;
    }

    get KWLicenseText(): Locator {
        return this.license;
    }

    get KWWhyUsGetItButton(): Locator {
        return this.whyUsGetIt;
    }
    
    get KWHowToGetItButton(): Locator {
        return this.howToGetIt;
    }

    get KWRegForm(): Locator {
        return this.regForm;
    }
    
    get KWEmailInput(): Locator {
        return this.emailInput;
    }

    get KWAgeCheckbox(): Locator {
        return this.ageCheckbox;
    }

    get KWPromoCheckbox(): Locator {
        return this.promoCheckbox;
    }


    get KWCrossSaleCheckbox(): Locator {
        return this.crossSaleCheckbox;
    }


    get KWCreateAccountButton(): Locator {
        return this.createAccountButton;
    }

    get KWHidePassButton(): Locator {
        return this.hidePassButton;
    }

    get KWCountryDropdown(): Locator {
        return this.countryDropdown;
    }

    get KWCurrencyDropdown(): Locator {
        return this.currencyDropdown;
    }

    get KWTermsAndConditionsLink(): Locator {
        return this.termsAndConditionsLink;
    }

    get KWPrivacyPolicyLink(): Locator {
        return this.privacyPolicyLink;
    }

    get KWNotValidEmailError(): Locator {
        return this.notValidEmailError;
    }

    get KWInvalidEmailError(): Locator {
        return this.invalidEmailError;
    }

    get KWBlankEmailError(): Locator {
        return this.blankEmailError;
    }

    get KWPassProgressBar(): Locator {
        return this.passProgressBar;
    }

    get KWPassProgressBarText(): Locator {
        return this.passProgressBarText;
    }

    async navigateTo(link: string) {
        await this.page.goto(link)
    }

    async clickDropdownCountries(country: string){
        await this.KWCountryDropdown.click()
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