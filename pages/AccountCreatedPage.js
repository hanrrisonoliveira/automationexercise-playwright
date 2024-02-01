exports.AccountCreatedPage =
class AccountCreatedPage {

    constructor(page){
        this.page = page
        this.continueButton = page.getByTestId('continue-button')
    }

    async continue(){
        await this.continueButton.click()
    }
}