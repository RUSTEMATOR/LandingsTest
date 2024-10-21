import {test, expect} from "playwright/test";
import { EMAIL_DOMAINS, LANDINGS } from "../../src/constants/constants";
import Methods from "../../src/methods/methods";
import { KingsWorld } from "../../src/PO/kingsWorld/kingsWorld";



test.describe('Check if mailcheck accepts domains', () => {
    let kingsWorld: KingsWorld
    let methods: Methods

    test.beforeEach(async ({page}) => {
        kingsWorld = new KingsWorld(page);
        methods = new Methods();
        await kingsWorld.navigateTo(LANDINGS.kingsWorld)
        await page.waitForLoadState("domcontentloaded")
    })

        for (const domain of EMAIL_DOMAINS){
            
            test(`Check if standart domains are accepted by Email Check: ${domain}`, async ({page}) => {
                const email = await methods.generateRandomEmail(domain)

                await kingsWorld.emailInput.fill(email)
                await kingsWorld.emailInput.blur()
                await page.waitForTimeout(20000)
                await expect(kingsWorld.notValidEmailError).not.toBeVisible()
                
            })
    }
})