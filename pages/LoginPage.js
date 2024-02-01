exports.LoginPage =
class LoginPage {

    constructor(page){
        this.page = page
        this.signupName = page.getByTestId('signup-name')
        this.signupEmail = page.getByTestId('signup-email')
        this.signupButton = page.getByRole('button', { name: 'Signup' })
        this.loginEmail = page.getByTestId('login-email')
        this.loginPassword = page.getByTestId('login-password')
        this.loginButton = page.getByRole('button', { name: 'Login' })
    }

    async newUserSignup(name, email){
        await this.signupName.fill(name)
        await this.signupEmail.fill(email)
        await this.signupButton.click()
    }
    
    async loginToYourAccount(email, password){
        await this.loginEmail.fill(email)
        await this.loginPassword.fill(password)
        await this.loginButton.click()
    }

}