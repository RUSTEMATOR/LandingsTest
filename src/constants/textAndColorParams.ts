interface IUiText {
    stepperOne: string
    stepperTwo: string
    stepperThree: string
    whyUsStepperOne?: string
    whyUsStepperTwo?: string
    whyUsStepperThree?: string
    howToBlock: string
    termsAndConditionsBlock: string
    license: string

}

interface IBackgroundColors {
    passProgressBarBad: string
    passProgressBarWeak: string
    passProgressBarStrong: string
    passProgressBarGreat: string
}

interface IProgressText {
    bad: string
    weak: string
    strong: string
    great: string
}

interface ItextTooltip {
    bad: string
    weak: string
}

export const UI_TEXT: IUiText = {
    stepperOne: '01. REGISTER To Become a Kingdom Citizen!' , 
    stepperTwo: '02. DEPOSIT From €/$20 safely and hassle-free!',
    stepperThree: '03. PLAY Thousands of jaw-dropping games!', 
    whyUsStepperOne: '24/7 Live Chat',
    whyUsStepperTwo: 'Lowest Wager X30',
    whyUsStepperThree: 'Fastest Payouts',

    howToBlock: `How to get your Bonus in 5 Easy Steps: 1. Register at King Billy by pressing the GET IT NOW button. 2. Make your 1st deposit and grab 100% Bonus + 100 Free Spins.\
 3. Make your 2nd deposit and grab 50% Bonus + 50 Free Spins (CODE: WELCOME2) 4. Make your 3rd deposit and grab 25% Bonus (CODE: WELCOME3)\
 5. Make your 4th deposit and grab 75% Bonus + 100 Free Spins (CODE: WELCOME4) Up for Grabs a massive 250% Bonus +250 Free Spins! get it now`,

    termsAndConditionsBlock: `BONUS TERMS & CONDITIONS 1. Wager x30 (bonus amount) 2. Max bet with an active bonus - €/$5 3. 1st Deposit bonus 100% + 100 Free Spins.\
 Maximum bonus amount: €/$500 4. 2nd Deposit bonus 50% + 50 Free Spins. Maximum bonus amount: €/$500 5. 3rd Deposit bonus 25%. Maximum bonus amount: €/$1000 6.\
 4th Deposit bonus 75% + 100 Free Spins. Maximum bonus amount: €/$500 7. The offer is in € EURO/ $ dollars 8. Upon first and 4th deposits you get 100 Free Spins in 2 packs\
 of 50 Free Spins 9. The first pack of 50 Free Spins will be given after wager x1 of your deposit 10. The second pack of 50 Free Spins will be given 24 hours after the first one`,
 
    license: `Copyright © 2024 www.kingbillycasino.com is owned and operated by Dama N.V. that is incorporated under the laws of Curacao with company registration number 152125 and having its registered address at Scharlooweg 39, Willemstad, Curaçao.\
 Dama N.V. is operating under E-gaming license No. OGL/2023/174/0082 issued by Curaçao Gaming Control Board. All payments with Paysafe are made via Dama N.V.\
 It is the player’s sole responsibility to inquire about the existing laws and regulations of the given jurisdiction for online gambling.`
}

export const CG_UI_TEXT: IUiText = {
    stepperOne: 'REGISTER ACCOUNT' , 
    stepperTwo: 'CONFIRM EMAIL',
    stepperThree: 'PLAY NOW', 


    howToBlock: `HOW TO GET YOUR BONUS IN 3 EASY STEPS 1. Register at King Billy by pressing the GET IT NOW button. 2. Confirm your email upon registration.\
 3. Activate bonus in your Player account. Enjoy your Gameplay with 50 Free Spins! GET IT NOW`,

    termsAndConditionsBlock: `BONUS TERMS & CONDITIONS 1. Wager x25 (bonus amount) 2. Max bet - €5 3. Max win - €50 4. Bet per spin - €0.5\
 5. Withdraw your winnings once wager is done with a min deposit. 6. For more details, you can contact Us via Live Chat Support.`,
 
    license: `Copyright © 2024 www.kingbillycasino.com is owned and operated by Dama N.V. that is incorporated under the laws of Curacao with company registration number 152125 and having its registered address at Scharlooweg 39, Willemstad, Curaçao.\
 Dama N.V. is operating under E-gaming license No. OGL/2023/174/0082 issued by Curaçao Gaming Control Board. All payments with Paysafe are made via Dama N.V.\
 It is the player’s sole responsibility to inquire about the existing laws and regulations of the given jurisdiction for online gambling.`
}


export const EMAIL_VIOLATIONS: string[] = [
    "usergmail.com",        // Missing "@" symbol
    "user@",                // Missing domain part after "@"
    "@gmail.com",           // Missing local part before "@"
    "user@gmail",           // Missing top-level domain (TLD)
    "user!#%&'*+/=?^_`{|}~@gmail.com",  // Invalid special characters
    "user@@gmail.com",      // Double "@" symbol
    "!@gmail.com",          // Only special characters in local part
    "user@gmail.x",         // Invalid TLD (too short)
    "user@gmail.",          // Missing domain extension after "."
    "用户@邮件.com",          // Non-ASCII characters in local or domain part
    ".username@gmail.com",  // Dot at the start of local part
    "username.@gmail.com",  // Dot at the end of local part  
                          // Empty input (no email)
];


export const BACKGROUND_COLORS: IBackgroundColors = {
    passProgressBarBad: 'rgb(218, 56, 19)',
    passProgressBarWeak: 'rgb(255, 201, 10)',
    passProgressBarStrong: 'rgb(57, 133, 234)',
    passProgressBarGreat: 'rgb(124, 178, 90)'
}

export const PROGRESS_TEXT: IProgressText = {
    bad: 'Bad',
    weak: 'Weak',
    strong: 'Strong',
    great: 'Great'
}


export const TEXT_TOOLTIP: ItextTooltip = {
    bad: 'Password must be at least 8 characters long',
    weak: '*Must include at least one special symbol, such as !@#$%^*()'

}

export const TEXT_TOOLTIPCG: ItextTooltip = {
    bad: 'Password must be at least 8 characters long',
    weak: '*Must include one special symbol !@#$%^*()'

}

