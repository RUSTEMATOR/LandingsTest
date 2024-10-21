interface ITestCredentials {
    standartPassword: string
}

interface IpassInputs {
    bad: string,
    weak: string,
    strong: string,
    great: string,
 
}

export const TEST_CREDS: ITestCredentials = {
    standartPassword: '193786Az()'}


export const PASS_INPUTS: IpassInputs = {
    bad: 'test123',
    weak: '12345678a',
    strong: '12345678a.',
    great: '12345678aD.'

}
    