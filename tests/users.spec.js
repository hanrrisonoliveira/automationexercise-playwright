// @ts-check
import { faker, fakerEN_US } from '@faker-js/faker';
const { test, expect } = require('@playwright/test');
const { LoginPage } = require ('../pages/LoginPage');
const { SignupPage } = require ('../pages/SignupPage');
const { HomePage } = require ('../pages/HomePage');
const { AccountCreatedPage } = require('../pages/AccountCreatedPage');
const { DeleteAccountPage } = require('../pages/DeleteAccountPage');

const firstName = faker.person.firstName()
const lastName = faker.person.lastName()
const email = faker.internet.email({ firstName: firstName })
const password = faker.internet.password({ length: 10 })
const month = faker.date.month()
const company = faker.company.name()
const street = faker.location.street()
const state = fakerEN_US.location.state()
const city = fakerEN_US.location.city()
const zipcode = fakerEN_US.location.zipCode()
const mobileNumber = faker.phone.number()

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test('Test Case 1: Register User', async ({ page }) => {
  const homePage = new HomePage(page)
  const loginPage = new LoginPage(page)
  const signupPage = new SignupPage(page)
  const accountCreatedPage = new AccountCreatedPage(page)
  const deleteAccountPage = new DeleteAccountPage(page)

  await expect(page).toHaveTitle('Automation Exercise');
  await homePage.signupLogin()
  await loginPage.newUserSignup(firstName, email)
  await expect(page.getByText('Enter Account Information')).toBeVisible()
  await signupPage.checkTitle()
  await signupPage.fillPassword(password)
  await signupPage.fillDay('5') //Pode ter um problema se cair dia 31 de fevereiro
  await signupPage.fillMonth(month)
  await signupPage.fillYear('1993')
  await signupPage.checkNewsletter()
  await signupPage.checkSpecialOffers()
  await signupPage.fillFirstName(firstName)
  await signupPage.fillLastName(lastName)
  await signupPage.fillCompany(company)
  await signupPage.fillAddress(street);
  await signupPage.fillAddressTwo('Second Address');
  await signupPage.fillCountry('United States')
  await signupPage.fillState(state)
  await signupPage.fillCity(city)
  await signupPage.fillZipcode(zipcode)
  await signupPage.fillMobileNumber(mobileNumber)
  await signupPage.createAccount()
  await expect(page.getByText('Account Created!')).toBeVisible()
  await accountCreatedPage.continue()

  await expect(page.getByText('Logged in as ' + firstName)).toBeVisible()
  await homePage.deleteAccount()
  await deleteAccountPage.continue()

});