exports.DeleteAccountPage =
class DeleteAccountPage {

    constructor(page){
        this.page = page
        this.continueButton = page.getByRole('link', { name: 'Continue' })
    }

    async continue(){
        await this.continueButton.click()
    }

}