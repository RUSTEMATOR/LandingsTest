import {test, expect} from "playwright/test";
import { KingsWorld } from "../../src/PO/kingsWorld/kingsWorld";
import Methods from "../../src/methods/methods";
import { LANDINGS } from "../../src/constants/constants";




test.describe("Visual testing of King's World landing", async () => {


    let kingsWorld: KingsWorld
    let methods: Methods

    test.beforeEach(async ({ page }) => {
        kingsWorld = new KingsWorld(page);
        methods = new Methods();
        await kingsWorld.navigateTo(LANDINGS.kingsWorld)
        await page.waitForTimeout(3000)
        
    })


    test('Visual test of the main picture', async ({page}) => {

        await expect(kingsWorld.KWMainPicture).toHaveScreenshot('MainPicture.png', {})
    })

    test("Visual test of logo", async ({page}) => {

        await expect(kingsWorld.KWLogo).toHaveScreenshot('Logo.png')
    })

    test("Visual test of benefits block", async ({page}) => {

        await expect(kingsWorld.whyUsBlock).toHaveScreenshot('WhyUsBlock.png')
    })

    test("Visual test of How to block", async () => {
        await expect(kingsWorld.howToBlock).toHaveScreenshot('HowToBlock.png')
    })

    test("Visual test of Terms and conditions block", async () => {
        await expect(kingsWorld.termsAndConditionsBlock).toHaveScreenshot('TermsAndConditionsBlock.png')
    })

    test("Visual test of Payments block", async () => {
        await expect(kingsWorld.KWPaymentLogos).toHaveScreenshot('PaymentLogos.png')
    })

    test("Visual test of Verification block", async () => {
        await expect(kingsWorld.KWVerificationLogos).toHaveScreenshot('VerificationLogos.png')
    })

    test("Visual test of License text", async () => {
        await expect(kingsWorld.KWLicenseText).toHaveScreenshot('LicenseText.png')
    })

    test("Visual test of registration form", async () => {
        await expect(kingsWorld.KWRegForm).toHaveScreenshot('RegForm.png')
    })

  
})