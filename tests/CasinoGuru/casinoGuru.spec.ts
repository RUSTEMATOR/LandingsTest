import {test, expect} from "playwright/test";
import { CasinoGuru } from "../../src/PO/casinoGuru/casinoGuru";
import { KINGBILLYSITE, LANDINGS, DROPDOWN_COUNTRIES, DROPDOWN_CURRENCIES, REDIRECT_LINKS, } from "../../src/constants/constants";
import Methods from "../../src/methods/methods";
import { BACKGROUND_COLORS, CG_UI_TEXT, EMAIL_VIOLATIONS, PROGRESS_TEXT, TEXT_TOOLTIP, UI_TEXT } from "../../src/constants/textAndColorParams";
import { PASS_INPUTS, TEST_CREDS } from "../../src/data/creds";



test.describe("King's world test", () => {
    let casinoGuru: CasinoGuru
    let methods: Methods


    test.beforeEach(async ({page}) => {
        casinoGuru = new CasinoGuru(page);
        methods = new Methods();
        await casinoGuru.navigateTo(LANDINGS.casinoGuru)   
    })

    test.describe('Check visibility of the elements', () => {

        test('Check logo functionality', async ({page}) => {
           
            if (await casinoGuru.CGLogoDesktop.isVisible()){

                await expect(casinoGuru.CGLogoDesktop).toBeVisible()
            
            } else {
                await expect(casinoGuru.CGLogoMobile).toBeVisible()
     
            }
        })

        test('Check Registration form to be visible', async () => {
            await casinoGuru.CGopenRegForm.click()
            await expect(casinoGuru.CGRegForm).toBeVisible()
        })

        test('Check email field to be visible', async () => {
            await casinoGuru.CGopenRegForm.click()
            await expect(casinoGuru.CGEmailInput).toBeVisible()
        })

        test('Check password field to be visible', async () => {
            await casinoGuru.CGopenRegForm.click()
            await expect(casinoGuru.CGAgeCheckbox).toBeVisible()
        })

        test('Check age checkbox to be visible', async () => {
            await casinoGuru.CGopenRegForm.click()
            await expect(casinoGuru.CGAgeCheckboxHit).toBeVisible()
        })

        test('Check promo checkbox to be visible', async () => {
            await casinoGuru.CGopenRegForm.click()
            await casinoGuru.promoCheckboxHit.click()
            await expect(casinoGuru.promoCheckbox).toBeVisible()
        })

        test('Check cross sale checkbox to be visible', async () => {
            await casinoGuru.CGopenRegForm.click()
            await casinoGuru.crossSaleCheckboxHit.click()
            await expect(casinoGuru.CGCrossSaleCheckbox).toBeVisible()
        })
    })

    test.describe('Functional test', () => {

        test.beforeEach(async ({page}) => {
            await casinoGuru.CGopenRegForm.click()
           
        })

        test('Check email input to accept information', async () => {
            const randomEmail = await methods.generateRandomEmail()

            await casinoGuru.checkEmailAndPasswordField({email: randomEmail})

            expect(casinoGuru.CGblankError).not.toBeVisible()
            expect(casinoGuru.CGNotValidEmailError).not.toBeVisible()
        })

        test('Check if password input accepts information', async ({page}) => {
            const logs: any = []
            const randomEmail = await methods.generateRandomEmail()

            

            await casinoGuru.passwordInput.fill(TEST_CREDS.standartPassword)
            await casinoGuru.CGEmailInput.fill(randomEmail)

            await page.on('console', (message) => {
                logs.push({message, type: message.type()})
            })

            await casinoGuru.CGEmailInput.blur()

            
            const enteredPassword: string = await logs[2].message.text()

            console.log(enteredPassword)

            expect(casinoGuru.blankError).not.toBeVisible()
        })

        test('Check "hide password" button functionality', async () => {
            await expect(casinoGuru.hidePassButton).toBeVisible()
            await expect(casinoGuru.hidePassButton).toHaveClass('pass hidden svelte-17zm91l')
            await casinoGuru.hidePassButton.click()
            await expect(casinoGuru.hidePassButton).toHaveClass('pass active svelte-17zm91l')
            await casinoGuru.hidePassButton.click()
            await expect(casinoGuru.hidePassButton).toHaveClass('pass hidden svelte-17zm91l')
        })

        test('Check promo checkbox functionality', async () => {
            await expect(casinoGuru.promoCheckbox).toBeChecked()
            await casinoGuru.promoCheckboxHit.click()
            await expect(casinoGuru.promoCheckbox).not.toBeChecked()

            await casinoGuru.promoCheckboxHit.click()
            await expect(casinoGuru.promoCheckbox).toBeChecked()
        })

        test('Check age checkbox functionality', async () => {
           
            await casinoGuru.CGAgeCheckboxHit.click()
            await expect(casinoGuru.CGAgeCheckbox).toBeChecked()

            await casinoGuru.ageCheckboxHit.click()
            await expect(casinoGuru.CGAgeCheckbox).not.toBeChecked()
        })

        test('Check cross promo checkbox functionality', async ({page}) => {
            await casinoGuru.crossSaleCheckboxHit.click()
            await expect(casinoGuru.crossSaleCheckbox).toBeChecked()
            await casinoGuru.crossSaleCheckboxHit.click()
            await expect(casinoGuru.crossSaleCheckbox).not.toBeChecked()
            await casinoGuru.crossSaleCheckboxHit.click()
            await expect(casinoGuru.crossSaleCheckbox).toBeChecked()
        })

        test('Check if the "next" button is enabled after filling email, password, age checkbox', async ({page}) => {
            const randomEmail = await methods.generateRandomEmail()

            await page.waitForTimeout(1000)

            await casinoGuru.emailInput.fill(randomEmail)
    
            await casinoGuru.passwordInput.fill(TEST_CREDS.standartPassword)
            
            await casinoGuru.CGAgeCheckboxHit.click()

            expect(casinoGuru.firstNextButton).toBeEnabled()
        })


        for (let country of DROPDOWN_COUNTRIES.casinoGuru){
            test(`Open coutnry dropdown and find ${country}`, async ({page}) => {
                await page.waitForTimeout(1000)
                await page.evaluate(async () => {
                    const dropdownButton = document.querySelector('button.btn.svelte-eg7mu2') as HTMLElement | null
                    if(dropdownButton){
                    dropdownButton.innerText = ''}})
               
                await expect(casinoGuru.countryDropdown).toBeVisible()

                
                await casinoGuru.countryDropdown.click()

                await casinoGuru.checkDropdownCountries(country)

                
            })
        }

        for (let currency of DROPDOWN_CURRENCIES.casinoGuru){
            test(`Open currency dropdown and find ${currency}`, async ({page}) => {
                
                await page.waitForTimeout(1000)
                await page.evaluate(async () => {
                    const dropdownButton = document.querySelector('button.btn.svelte-g9bpfz') as HTMLElement | null
                    if(dropdownButton){
                    dropdownButton.innerText = ''}})
               
                await expect(casinoGuru.currencyDropdown).toBeVisible()

                await casinoGuru.currencyDropdown.click()

                await casinoGuru.checkDropdownCurrencies(currency)
            })
        }

        test('Check Terms and Conditions redirect', async ({page}) => {
            const page1Promise = page.waitForEvent('popup');

            await casinoGuru.termsAndConditionsLink.click()
            const page1 = await page1Promise
            await page1.waitForURL(REDIRECT_LINKS.CGTermsAndConditions)
            console.log(`Received URL: ${page1.url()}`)
            expect(page1.url()).toEqual(REDIRECT_LINKS.CGTermsAndConditions)

            })

        test('Check privacy policy redirect', async ({page}) => {
            const page1Promise = page.waitForEvent('popup');

            await casinoGuru.privacyPolicyLink.click()
            const page1 = await page1Promise
            await page1.waitForURL(REDIRECT_LINKS.CGPrivacyPolicy)
            console.log(`Received URL: ${page1.url()}`)
            expect(page1.url()).toEqual(REDIRECT_LINKS.CGPrivacyPolicy)

    
        })

    })

    test.describe('Check text content of UI elements', () => {

        test.beforeEach(async ({page}) => {
            await page.waitForTimeout(3000)
        })

        test('1st stepper text', async () => {
           await casinoGuru.stepperOne.scrollIntoViewIfNeeded()
           const receivedText = await casinoGuru.stepperOne.innerText()
        
           const text = receivedText.replace(/\s+/g, ' ').trim()
           console.log(text)

           expect(text).toEqual(CG_UI_TEXT.stepperOne)
        })

        test('2nd stepper text', async () => {
            await casinoGuru.stepperTwo.scrollIntoViewIfNeeded()
            const receivedText = await casinoGuru.stepperTwo.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)

            expect(text).toEqual(CG_UI_TEXT.stepperTwo)
        })

        test('3rd stepper text', async () => {
            await casinoGuru.stepperThree.scrollIntoViewIfNeeded()
            const receivedText = await casinoGuru.stepperThree.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)

            expect(text).toEqual(CG_UI_TEXT.stepperThree)
        })

        test('How to block text', async () => {
            await casinoGuru.howToBlock.scrollIntoViewIfNeeded()
            const receivedText = await casinoGuru.howToBlock.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)
            expect(text).toEqual(CG_UI_TEXT.howToBlock)
        })

        test('Check text of the terms and conditions block', async () => {
            await casinoGuru.termsAndConditionsBlock.scrollIntoViewIfNeeded()
            const receivedText = await casinoGuru.termsAndConditionsBlock.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)
            expect(text).toEqual(CG_UI_TEXT.termsAndConditionsBlock)
        })

        test('Check text of the license in the footer', async () => {
            await casinoGuru.license.scrollIntoViewIfNeeded()
            const receivedText = await casinoGuru.license.innerText()
            
            const text = receivedText.replace(/\s+/g, ' ').trim()
            console.log(text)
            expect(text).toEqual(CG_UI_TEXT.license)
        })
    })

    test.describe('Negative tests', () => {
        
        test.beforeEach(async({page}) => {
            await casinoGuru.CGopenRegForm.click()
            await page.waitForTimeout(3000)
        })

        for (const email of EMAIL_VIOLATIONS){
            test(`Check error message of the email input: ${email}`, async () => {
                await casinoGuru.emailInput.fill(email)
                await casinoGuru.emailInput.blur()

                expect(casinoGuru.notValidEmailError).toBeVisible()
            })
        }

        for (const email of EMAIL_VIOLATIONS){
            test(`Check color of the email input for invalid emails: ${email}`, async ({page}) => {
                await casinoGuru.emailInput.fill(email)
                await casinoGuru.emailInput.blur()
                await page.waitForTimeout(2000)
                
                // const borders = [
                //     'border-bottom-color',
                //     'border-left-color',
                //     'border-right-color',
                //     'border-top-color']
                
                //for (const border of borders) {
                    expect(casinoGuru.emailInput).toHaveCSS(`border-color`, 'rgb(125, 18, 0)')
                //}
            })
        }

        test('Check error message for an empty field', async () => {
            await casinoGuru.emailInput.fill("")
            await casinoGuru.emailInput.blur()

            expect(casinoGuru.blankError).toBeVisible
            
        })

        test('Check color of the email input for empty field', async ({page}) => {
            await casinoGuru.emailInput.fill("")
            await casinoGuru.emailInput.blur()
            await page.waitForTimeout(2000)

            expect(casinoGuru.emailInput).toHaveCSS(`border-color`, 'rgb(125, 18, 0)')
            
        })

        test('Check password input status if less than 8 characters are entered', async ({page}) => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.bad)
            await casinoGuru.passwordInput.blur()
            await page.waitForTimeout(2000)

            expect(casinoGuru.passProgressBar).toHaveCSS('background-color', BACKGROUND_COLORS.passProgressBarBad)
        })

        test("Check text of the password progress bar with: less than 8 characters ", async() => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.bad)
            await casinoGuru.passwordInput.blur()
  
            
            expect(casinoGuru.passProgressBarText).toHaveText(PROGRESS_TEXT.bad)
        })

        test('Check tooltip for less than 8 characters', async({page}) => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.bad)
            await casinoGuru.passwordInput.blur()
            await page.waitForTimeout(2000)

            expect(casinoGuru.invalidPassToolTip).toContainText(TEXT_TOOLTIP.bad)
        })

        test('Check password input status if more than 8 characters + 1 lower case letter is entered', async({page}) => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.weak)
            await casinoGuru.passwordInput.blur()
            await page.waitForTimeout(2000)

            expect(casinoGuru.passProgressBar).toHaveCSS('background-color', BACKGROUND_COLORS.passProgressBarWeak)
        })

        test('Check text of the password progress bar with: more than 8 characters + 1 lower case letter', async () => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.weak)
            await casinoGuru.passwordInput.blur()
          
            
            expect(casinoGuru.passProgressBarText).toHaveText(PROGRESS_TEXT.weak)
        })


        test('Check tooltip text of the password progress bar with: more than 8 characters + 1 lower case letter', async () => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.weak)
            await casinoGuru.passwordInput.blur()
        
            expect(casinoGuru.invalidPassToolTip).toContainText(TEXT_TOOLTIP.weak)
        })

        test('Check password input status if more than 8 characters, 1 lower case and 1 special symbol', async ({page}) => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.strong)
            await casinoGuru.passwordInput.blur()
            await page.waitForTimeout(2000)
            
            expect(casinoGuru.passProgressBar).toHaveCSS('background-color', BACKGROUND_COLORS.passProgressBarStrong)
        })

        test('Check text password input status if more than 8 characters, 1 lower case and 1 special symbol', async ({page}) => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.strong)
            await casinoGuru.passwordInput.blur()
            await page.waitForTimeout(2000)
            
            expect(casinoGuru.passProgressBarText).toHaveText(PROGRESS_TEXT.strong)
        })


        test('Check password input status if more than 8 characters, 1 lower case, 1 uppercase and 1 special symbol', async ({page}) => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.great)
            await casinoGuru.passwordInput.blur()
            await page.waitForTimeout(2000)
            
            expect(casinoGuru.passProgressBar).toHaveCSS('background-color', BACKGROUND_COLORS.passProgressBarGreat)
        })


        test('Check text password input status if more than 8 characters, 1 lower case, 1 upper case and 1 special symbol', async ({page}) => {
            await casinoGuru.passwordInput.fill(PASS_INPUTS.great)
            await casinoGuru.passwordInput.blur()
            await page.waitForTimeout(2000)
            
            expect(casinoGuru.passProgressBarText).toHaveText(PROGRESS_TEXT.great)
        })

        
    })
})


