import {test, expect} from "playwright/test";
import { CasinoGuru } from "../../src/PO/casinoGuru/casinoGuru";
import Methods from "../../src/methods/methods";
import { LANDINGS } from "../../src/constants/constants";
import { TEST_CREDS } from "../../src/data/creds";
import { faker } from "@faker-js/faker";




test.describe("Visual testing of King's World landing", async () => {


    let casinoGuru: CasinoGuru
    let methods: Methods

    test.beforeEach(async ({ page }) => {
        casinoGuru = new CasinoGuru(page);
        methods = new Methods();
        await casinoGuru.navigateTo(LANDINGS.casinoGuru)
        await page.waitForTimeout(5000)
        
    })


    test('Visual test of the main picture', async () => {

        await expect(casinoGuru.CGMainPicture).toHaveScreenshot('MainPicture.png', {})
    })

    test("Visual test of logo", async () => {
        if(await casinoGuru.CGLogoDesktop.isVisible()){
        await expect(casinoGuru.CGLogoDesktop).toHaveScreenshot('Logo.png')
        } else {
            await expect(casinoGuru.CGLogoMobile).toHaveScreenshot('LogoMobile.png')
        }
    })

    test("Visual test of How to block", async () => {
        await expect(casinoGuru.howToBlock).toHaveScreenshot('HowToBlock.png')
    })

    test("Visual test of Terms and conditions block", async () => {
        await expect(casinoGuru.termsAndConditionsBlock).toHaveScreenshot('TermsAndConditionsBlock.png')
    })

    test("Visual test of Payments block", async () => {
        await expect(casinoGuru.CGPaymentLogos).toHaveScreenshot('PaymentLogos.png')
    })

    test("Visual test of Verification block", async () => {
        await expect(casinoGuru.CGVerificationLogos).toHaveScreenshot('VerificationLogos.png')
    })

    test("Visual test of License text", async () => {
        await expect(casinoGuru.CGLicenseText).toHaveScreenshot('LicenseText.png')
    })
})


test.describe("Reg form visual test", () => {
    let casinoGuru: CasinoGuru
    let methods: Methods

    test.beforeEach(async ({ page }) => {
        casinoGuru = new CasinoGuru(page);
        methods = new Methods();
        await casinoGuru.navigateTo(LANDINGS.casinoGuru)
        await page.waitForTimeout(5000)
        
    })

    test('Check registration form on the first step', async () => {
        await casinoGuru.CGopenRegForm.click()
        await expect(casinoGuru.CGRegForm).toHaveScreenshot('RegistrationFormFirst.png')
    })

    test('Check registration form on the second step', async ({page}) => {
        await casinoGuru.CGopenRegForm.click()
        await casinoGuru.completeRegistrationFirstStep({
            email: await methods.generateRandomEmail(),
            password: TEST_CREDS.standartPassword
        })
        await casinoGuru.firstNextButton.click()

        await page.waitForTimeout(3000)
        await expect(casinoGuru.CGRegForm).toHaveScreenshot('RegistrationFormSecond.png')
    })

    test('Check registration form on the third step', async ({page}) => {
        await casinoGuru.CGopenRegForm.click()
        await casinoGuru.completeRegistrationFirstStep({
            email: await methods.generateRandomEmail(),
            password: TEST_CREDS.standartPassword
        })
        await casinoGuru.firstNextButton.click()

        await casinoGuru.completeRegistrationSecondStep({
            firstName: faker.person.firstName(), 
            secondName: faker.person.lastName(),
            day: String(faker.number.int({max: 28, min: 1})),
            month: String(faker.number.int({max: 12, min: 1})),
            year: String(faker.number.int({max: 2004, min: 1860})),
            gender: faker.datatype.boolean()

        })
        await casinoGuru.CGRegForm.click()
        await casinoGuru.secondNextButton.click()
        await page.waitForTimeout(3000)

        await expect(casinoGuru.CGRegForm).toHaveScreenshot('RegistrationFormThird.png')
    })

    
})