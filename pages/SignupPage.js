exports.SignupPage =
class SignupPage {

    constructor(page){
        this.page = page
        this.selectTitle = page.getByLabel('Mr.')
        this.password = page.getByTestId('password')
        this.day = page.getByTestId('days')
        this.month = page.getByTestId('months')
        this.year = page.getByTestId('years')
        this.newsletter = page.getByLabel('Sign up for our newsletter!')
        this.specialOffers = page.getByLabel('Receive special offers from')
        this.firstName = page.getByTestId('first_name')
        this.lastName = page.getByTestId('last_name')
        this.company = page.getByTestId('company')
        this.address = page.getByTestId('address')
        this.address2 = page.getByTestId('address2')
        this.country = page.getByTestId('country')
        this.state = page.getByTestId('state')
        this.city = page.getByTestId('city')
        this.zipcode = page.getByTestId('zipcode')
        this.mobileNumber = page.getByTestId('mobile_number')
        this.createAccountButton = page.getByTestId('create-account')
    }

    async checkTitle(){
        await this.selectTitle.check()
    }

    async fillPassword(password){
        await this.password.fill(password)
    }

    async fillDay(day){
        await this.day.selectOption(day)
    }

    async fillMonth(month){
        await this.month.selectOption(month)
    }

    async fillYear(year){
        await this.year.selectOption(year)
    }

    async checkNewsletter(){
        await this.newsletter.check()
    }

    async checkSpecialOffers(){
        await this.specialOffers.check()
    }

    async fillFirstName(firstName){
        await this.firstName.fill(firstName)
    }

    async fillLastName(lastName){
        await this.lastName.fill(lastName)
    }

    async fillCompany(company){
        await this.company.fill(company)
    }

    async fillAddress(address){
        await this.address.fill(address)
    }

    async fillAddressTwo(address2){
        await this.address2.fill(address2)
    }

    async fillCountry(country){
        await this.country.selectOption(country)
    }

    async fillState(state){
        await this.state.fill(state)
    }

    async fillCity(city){
        await this.city.fill(city)
    }

    async fillZipcode(zipcode){
        await this.zipcode.fill(zipcode)
    }

    async fillMobileNumber(mobileNumber){
        await this.mobileNumber.fill(mobileNumber)
    }

    async createAccount(){
        await this.createAccountButton.click()
    }
}