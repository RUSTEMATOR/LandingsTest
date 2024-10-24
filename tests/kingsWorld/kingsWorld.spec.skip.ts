import {test, expect} from "playwright/test";
import { KingsWorld } from "../../src/PO/kingsWorld/kingsWorld";
import { KINGBILLYSITE, LANDINGS, DROPDOWN_COUNTRIES, DROPDOWN_CURRENCIES, REDIRECT_LINKS, } from "../../src/constants/constants";
import Methods from "../../src/methods/methods";
import { BACKGROUND_COLORS, EMAIL_VIOLATIONS, PROGRESS_TEXT, TEXT_TOOLTIP, UI_TEXT } from "../../src/constants/textAndColorParams";
import { PASS_INPUTS, TEST_CREDS } from "../../src/data/creds";



test.describe("King's world test", () => {
    let kingsWorld: KingsWorld
    let methods: Methods


    test.beforeEach(async ({page}) => {
        kingsWorld = new KingsWorld(page);
        methods = new Methods();
        await kingsWorld.navigateTo(LANDINGS.kingsWorld)
        await page.waitForLoadState("domcontentloaded")
    })

    test.describe('Check visibility of the elements', () => {

        test('Check logo functionality', async ({page}) => {
            await expect(kingsWorld.KWLogo).toBeVisible()
            await kingsWorld.KWLogo.click()
            await expect(page).toHaveURL(KINGBILLYSITE.logo)
        })

        test('Check Registration form to be visible', async () => {
            await expect(kingsWorld.KWRegForm).toBeVisible()
        })

        test('Check email field to be visible', async () => {
            await expect(kingsWorld.KWEmailInput).toBeVisible()
        })

        test('Check password field to be visible', async () => {
            await expect(kingsWorld.KWAgeCheckbox).toBeVisible()
        })

        test('Check age checkbox to be visible', async () => {
            await expect(kingsWorld.KWAgeCheckbox).toBeVisible()
        })

        test('Check promo checkbox to be visible', async () => {
            await expect(kingsWorld.promoCheckbox).toBeVisible()
        })

        test('Check cross sale checkbox to be visible', async () => {
            await expect(kingsWorld.KWCrossSaleCheckbox).toBeVisible()
        })
    })

    test.describe('Check functionality of the elements', () => {

        test('Check email input to accept information', async ({page}) => {
            const randomEmail = await methods.generateRandomEmail()

            await kingsWorld.KWEmailInput.click()
            await expect(kingsWorld.KWEmailInput).toBeFocused()

            await kingsWorld.KWEmailInput.fill(randomEmail)

            const logs: any = []

            await page.on('console', (message) => {
                logs.push({message, type: message.type()})
            })

            await kingsWorld.KWEmailInput.blur()

            const enteredEmail: string = await logs[1].message.text()

            console.log(enteredEmail)

            expect(enteredEmail).toEqual(randomEmail)
        })

        test('Check if password input accepts information', async ({page}) => {
            const logs: any = []
            const randomEmail = await methods.generateRandomEmail()

            

            await kingsWorld.passwordInput.fill(TEST_CREDS.standartPassword)
            await kingsWorld.KWEmailInput.fill(randomEmail)

            await page.on('console', (message) => {
                logs.push({message, type: message.type()})
            })

            await kingsWorld.KWEmailInput.blur()

            
            const enteredPassword: string = await logs[2].message.text()

            console.log(enteredPassword)

            expect(enteredPassword).toEqual(TEST_CREDS.standartPassword)
        })

        test('Check "hide password" button functionality', async () => {
            await expect(kingsWorld.hidePassButton).toBeVisible()
            await expect(kingsWorld.hidePassButton).toHaveClass('pass hidden svelte-1bptdmy')
            await kingsWorld.hidePassButton.click()
            await expect(kingsWorld.hidePassButton).toHaveClass('pass active svelte-1bptdmy')
            await kingsWorld.hidePassButton.click()
            await expect(kingsWorld.hidePassButton).toHaveClass('pass hidden svelte-1bptdmy')
        })

        test('Check promo checkbox functionality', async () => {
            await expect(kingsWorld.promoCheckbox).toBeChecked()
            await kingsWorld.promoCheckbox.click()
            await expect(kingsWorld.promoCheckbox).not.toBeChecked()

            await kingsWorld.promoCheckbox.click()
            await expect(kingsWorld.promoCheckbox).toBeChecked()
        })

        test('Check age checkbox functionality', async () => {
           
            await kingsWorld.KWAgeCheckbox.click()
            await expect(kingsWorld.KWAgeCheckbox).toBeChecked()

            await kingsWorld.KWAgeCheckbox.click()
            await expect(kingsWorld.KWAgeCheckbox).not.toBeChecked()
        })

        test('Check cross promo checkbox functionality', async () => {
            await kingsWorld.KWCrossSaleCheckbox.click()
            await expect(kingsWorld.KWCrossSaleCheckbox).toBeChecked()
            await kingsWorld.KWCrossSaleCheckbox.click()
            await expect(kingsWorld.KWCrossSaleCheckbox).not.toBeChecked()
            await kingsWorld.KWCrossSaleCheckbox.click()
            await expect(kingsWorld.KWCrossSaleCheckbox).toBeChecked()
        })

        test('Check if the submit button is enabled after filling email, password, age checkbox', async ({page}) => {
            const randomEmail = await methods.generateRandomEmail()

            await page.waitForTimeout(1000)

            await kingsWorld.emailInput.fill(randomEmail)
    
            await kingsWorld.passwordInput.fill(TEST_CREDS.standartPassword)
            
            await kingsWorld.KWAgeCheckbox.click()

            expect(kingsWorld.createAccountButton).toBeEnabled()
        })

        test.skip('Check account creation', async ({page}) => {
            
            const randomEmail = await methods.generateRandomEmail()
            await kingsWorld.emailInput.fill(randomEmail)
            await kingsWorld.passwordInput.fill(TEST_CREDS.standartPassword)
            await kingsWorld.KWAgeCheckbox.click()
            await kingsWorld.createAccountButton.click()

            await page.waitForURL(KINGBILLYSITE.registration)

            expect(page).toHaveURL(KINGBILLYSITE.registration)
        })



        for (let country of DROPDOWN_COUNTRIES.kingsWorld){
            test(`Open coutnry dropdown and find ${country}`, async ({page}) => {
                await page.waitForTimeout(1000)
                await page.evaluate(async () => {
                    const dropdownButton = document.querySelector('button.btn.svelte-1gf82f6') as HTMLElement | null
                    if(dropdownButton){
                    dropdownButton.innerText = ''}})
               
                await expect(kingsWorld.countryDropdown).toBeVisible()

                
                await kingsWorld.countryDropdown.click()

                await kingsWorld.checkDropdownCountries(country)

                
            })
        }

        for (let currency of DROPDOWN_CURRENCIES.kingsWorld){
            test(`Open currency dropdown and find ${currency}`, async ({page}) => {
                
                await page.waitForTimeout(1000)
                await page.evaluate(async () => {
                    const dropdownButton = document.querySelector('button.btn.svelte-1u63d2r') as HTMLElement | null
                    if(dropdownButton){
                    dropdownButton.innerText = ''}})
               
                await expect(kingsWorld.currencyDropdown).toBeVisible()

                await kingsWorld.currencyDropdown.click()

                await kingsWorld.checkDropdownCurrencies(currency)
            })
        }

        test('Check Terms and Conditions redirect', async ({page}) => {
            const page1Promise = page.waitForEvent('popup');

            await kingsWorld.termsAndConditionsLink.click()
            const page1 = await page1Promise
            await page1.waitForURL(REDIRECT_LINKS.TermsAndConditions)
            console.log(`Received URL: ${page1.url()}`)
            expect(page1.url()).toEqual(REDIRECT_LINKS.TermsAndConditions)

            })

        test('Check privacy policy redirect', async ({page}) => {
            const page1Promise = page.waitForEvent('popup');

            await kingsWorld.privacyPolicyLink.click()
            const page1 = await page1Promise
            await page1.waitForURL(REDIRECT_LINKS.PrivacyPolicy)
            console.log(`Received URL: ${page1.url()}`)
            expect(page1.url()).toEqual(REDIRECT_LINKS.PrivacyPolicy)

    
        })

    })

    test.describe('Check text content of UI elements', () => {

        test('1st stepper text', async () => {
           await kingsWorld.stepperOne.scrollIntoViewIfNeeded()
           const receivedText = await kingsWorld.stepperOne.innerText()
        
           const text = receivedText.replace(/\s+/g, ' ').trim()
           console.log(text)

           expect(text).toEqual(UI_TEXT.stepperOne)
        })

        test('2nd stepper text', async () => {
            await kingsWorld.stepperTwo.scrollIntoViewIfNeeded()
            const receivedText = await kingsWorld.stepperTwo.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)

            expect(text).toEqual(UI_TEXT.stepperTwo)
        })

        test('3rd stepper text', async () => {
            await kingsWorld.stepperThree.scrollIntoViewIfNeeded()
            const receivedText = await kingsWorld.stepperThree.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)

            expect(text).toEqual(UI_TEXT.stepperThree)
        })

        test('Why us 1st stepper text', async () => {
            await kingsWorld.whyUsStepperOne.scrollIntoViewIfNeeded()
            const receivedText = await kingsWorld.whyUsStepperOne.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)
            expect(text).toEqual(UI_TEXT.whyUsStepperOne)
        })

        test('Why us 2nd stepper text', async () => {
            await kingsWorld.whyUsStepperTwo.scrollIntoViewIfNeeded()
            const receivedText = await kingsWorld.whyUsStepperTwo.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)
            expect(text).toEqual(UI_TEXT.whyUsStepperTwo)
        })

        test('Why us 3rd stepper text', async () => {
            await kingsWorld.whyUsStepperThree.scrollIntoViewIfNeeded()
            const receivedText = await kingsWorld.whyUsStepperThree.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)
            expect(text).toEqual(UI_TEXT.whyUsStepperThree)
        })

        test('How to block text', async () => {
            await kingsWorld.howToBlock.scrollIntoViewIfNeeded()
            const receivedText = await kingsWorld.howToBlock.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)
            expect(text).toEqual(UI_TEXT.howToBlock)
        })

        test('Check text of the terms and conditions block', async () => {
            await kingsWorld.termsAndConditionsBlock.scrollIntoViewIfNeeded()
            const receivedText = await kingsWorld.termsAndConditionsBlock.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)
            expect(text).toEqual(UI_TEXT.termsAndConditionsBlock)
        })

        test('Check text of the license in the footer', async () => {
            await kingsWorld.license.scrollIntoViewIfNeeded()
            const receivedText = await kingsWorld.license.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)
            expect(text).toEqual(UI_TEXT.license)
        })
    })

    test.describe('Negative tests', () => {

        for (const email of EMAIL_VIOLATIONS){
            test(`Check error message of the email input: ${email}`, async () => {
                await kingsWorld.emailInput.fill(email)
                await kingsWorld.emailInput.blur()

                expect(kingsWorld.invalidEmailError).toBeVisible()
            })
        }

        for (const email of EMAIL_VIOLATIONS){
            test(`Check color of the email input for invalid emails: ${email}`, async ({page}) => {
                await kingsWorld.emailInput.fill(email)
                await kingsWorld.emailInput.blur()
                await page.waitForTimeout(2000)
                
                // const borders = [
                //     'border-bottom-color',
                //     'border-left-color',
                //     'border-right-color',
                //     'border-top-color']
                
                //for (const border of borders) {
                    expect(kingsWorld.emailInput).toHaveCSS(`border-color`, 'rgb(125, 18, 0)')
                //}
            })
        }

        test('Check error message for an empty field', async () => {
            await kingsWorld.emailInput.fill("")
            await kingsWorld.emailInput.blur()

            expect(kingsWorld.blankEmailError).toBeVisible
            
        })

        test('Check color of the email input for empty field', async ({page}) => {
            await kingsWorld.emailInput.fill("")
            await kingsWorld.emailInput.blur()
            await page.waitForTimeout(2000)

            expect(kingsWorld.emailInput).toHaveCSS(`border-color`, 'rgb(125, 18, 0)')
            
        })

        test('Check password input status if less than 8 characters are entered', async ({page}) => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.bad)
            await kingsWorld.passwordInput.blur()
            await page.waitForTimeout(2000)

            expect(kingsWorld.passProgressBar).toHaveCSS('background-color', BACKGROUND_COLORS.passProgressBarBad)
        })

        test("Check text of the password progress bar with: less than 8 characters ", async() => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.bad)
            await kingsWorld.passwordInput.blur()
  
            
            expect(kingsWorld.passProgressBarText).toHaveText(PROGRESS_TEXT.bad)
        })

        test('Check tooltip for less than 8 characters', async({page}) => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.bad)
            await kingsWorld.passwordInput.blur()
            await page.waitForTimeout(2000)

            expect(kingsWorld.invalidPassToolTip).toContainText(TEXT_TOOLTIP.bad)
        })

        test('Check password input status if more than 8 characters + 1 lower case letter is entered', async({page}) => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.weak)
            await kingsWorld.passwordInput.blur()
            await page.waitForTimeout(2000)

            expect(kingsWorld.passProgressBar).toHaveCSS('background-color', BACKGROUND_COLORS.passProgressBarWeak)
        })

        test('Check text of the password progress bar with: more than 8 characters + 1 lower case letter', async () => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.weak)
            await kingsWorld.passwordInput.blur()
          
            
            expect(kingsWorld.passProgressBarText).toHaveText(PROGRESS_TEXT.weak)
        })


        test('Check tooltip text of the password progress bar with: more than 8 characters + 1 lower case letter', async () => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.weak)
            await kingsWorld.passwordInput.blur()
        
            expect(kingsWorld.invalidPassToolTip).toContainText(TEXT_TOOLTIP.weak)
        })

        test('Check password input status if more than 8 characters, 1 lower case and 1 special symbol', async ({page}) => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.strong)
            await kingsWorld.passwordInput.blur()
            await page.waitForTimeout(2000)
            
            expect(kingsWorld.passProgressBar).toHaveCSS('background-color', BACKGROUND_COLORS.passProgressBarStrong)
        })

        test('Check text password input status if more than 8 characters, 1 lower case and 1 special symbol', async ({page}) => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.strong)
            await kingsWorld.passwordInput.blur()
            await page.waitForTimeout(2000)
            
            expect(kingsWorld.passProgressBarText).toHaveText(PROGRESS_TEXT.strong)
        })


        test('Check password input status if more than 8 characters, 1 lower case, 1 uppercase and 1 special symbol', async ({page}) => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.great)
            await kingsWorld.passwordInput.blur()
            await page.waitForTimeout(2000)
            
            expect(kingsWorld.passProgressBar).toHaveCSS('background-color', BACKGROUND_COLORS.passProgressBarGreat)
        })


        test('Check text password input status if more than 8 characters, 1 lower case, 1 upper case and 1 special symbol', async ({page}) => {
            await kingsWorld.passwordInput.fill(PASS_INPUTS.great)
            await kingsWorld.passwordInput.blur()
            await page.waitForTimeout(2000)
            
            expect(kingsWorld.passProgressBarText).toHaveText(PROGRESS_TEXT.great)
        })

        
    })
})


