exports.HomePage =
class HomePage {

    constructor(page){
        this.page = page
        this.signupLoginButton = page.getByRole('link', { name: ' Signup / Login' })
        this.deleteAccountButton = page.getByRole('link', { name: ' Delete Account' })
    }

    async signupLogin(){
        await this.signupLoginButton.click()
    }

    async deleteAccount(){
        await this.deleteAccountButton.click()
    }

}