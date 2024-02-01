// @ts-check
const { test, expect } = require('@playwright/test');
const { LoginPage } = require ('../pages/LoginPage');
const { SignupPage } = require ('../pages/SignupPage');
const { HomePage } = require ('../pages/HomePage');
const { AccountCreatedPage } = require('../pages/AccountCreatedPage');
const { DeleteAccountPage } = require('../pages/DeleteAccountPage');

test.beforeEach(async ({ page }) => {
  await page.goto('/');
})

test('Test Case 1: Register User', async ({ page }) => {
  const homePage = new HomePage(page)
  const loginPage = new LoginPage(page)
  const signupPage = new SignupPage(page)
  const accountCreatedPage = new AccountCreatedPage(page)
  const deleteAccountPage = new DeleteAccountPage(page)
 
  //Validar o titulo da pagina de uma boa forma
  await expect(page.getByText('Home')).toBeVisible()

  await homePage.signupLogin()
  await loginPage.newUserSignup('Usuario Demonstracao', 'email@playwright.com')
  await expect(page.getByText('Enter Account Information')).toBeVisible()
  await signupPage.checkTitle()
  await signupPage.fillPassword('secretpassword')
  await signupPage.fillDay('31')
  await signupPage.fillMonth('8')
  await signupPage.fillYear('1993')
  await signupPage.checkNewsletter()
  await signupPage.checkSpecialOffers()
  await signupPage.fillFirstName('FIRST NAME')
  await signupPage.fillLastName('LAST NAME')
  await signupPage.fillCompany('COMPANY')
  await signupPage.fillAddress('ADDRESS ONE');
  await signupPage.fillAddressTwo('ADDRESS TWO');
  await signupPage.fillCountry('United States')
  await signupPage.fillState('UTAH')
  await signupPage.fillCity('SALT LAKE CITY')
  await signupPage.fillZipcode('13231231')
  await signupPage.fillMobileNumber('5598958492')
  await signupPage.createAccount()
  await expect(page.getByText('Account Created!')).toBeVisible()
  await accountCreatedPage.continue()

  await expect(page.getByText('Logged in as')).toBeVisible()
  await homePage.deleteAccount()
  await deleteAccountPage.continue()

});