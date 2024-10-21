var randomEmail = require('random-email');


export default class Methods {

    constructor(){}

    async generateRandomEmail(domain?: string): Promise<string> {
        const randEmail = `automaton_${randomEmail({domain: domain || 'kingbilly.xyz', length: 10})}`
        return randEmail;
    }
}