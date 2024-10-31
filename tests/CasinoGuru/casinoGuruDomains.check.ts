import {test, expect} from "playwright/test";
import { EMAIL_DOMAINS, LANDINGS } from "../../src/constants/constants";
import Methods from "../../src/methods/methods";
import { CasinoGuru } from "../../src/PO/casinoGuru/casinoGuru";




test.describe('Check if mailcheck accepts domains', () => {
    let casinoGuru: CasinoGuru
    let methods: Methods

    test.beforeEach(async ({page}) => {
        casinoGuru = new CasinoGuru(page);
        methods = new Methods();
        await casinoGuru.navigateTo(LANDINGS.casinoGuru)
        await page.waitForLoadState("domcontentloaded")
    })

        for (const email of EMAIL_DOMAINS){
            
            test(`Check if standart domains are accepted by Email Check: ${email}`, async ({page}) => {
                await casinoGuru.openRegGorm.click()

                await casinoGuru.emailInput.fill(email)
                await casinoGuru.emailInput.blur()
                await page.waitForTimeout(20000)
                await expect(casinoGuru.notValidEmailError).not.toBeVisible()
                
            })
    }
})