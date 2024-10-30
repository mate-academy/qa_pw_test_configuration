import { test } from '@playwright/test';
import { faker } from '@faker-js/faker';
import { SignUpPage } from '../../src/pages/SignUpPage'; 
import { HomePage } from '../../src/pages/HomePage'; 

test('Successful `Sign up` flow test', async ({ page }) => {
  const userName = `${faker.person.firstName()}${faker.person.lastName()}`
  const email = `${faker.person.firstName()}${faker.internet.email()}`
  const signUpPage = new SignUpPage(page); 
  const homePage = new HomePage(page); 

  await signUpPage.open();
  await signUpPage.fillUsernameField(userName);
  await signUpPage.fillEmailField(email);
  await signUpPage.fillPasswordField(faker.internet.password());
  await signUpPage.clickSignUpButton(); 

  await homePage.assertYourFeedTabIsVisible();
});