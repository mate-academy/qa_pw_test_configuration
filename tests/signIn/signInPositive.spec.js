import { test } from '@playwright/test';
import { SignInPage } from '../../src/pages/SignInPage'; 
import { HomePage } from '../../src/pages/HomePage'; 

test('Successful `Sign in` flow test', async ({ page }) => {
  const signInPage = new SignInPage(page); 
  const homePage = new HomePage(page); 

  await signInPage.open();
  await signInPage.fillEmailField('test_new_user@gmail.com');
  await signInPage.fillPasswordField('newpass123!');
  await signInPage.clickSignInButton(); 

  await homePage.assertYourFeedTabIsVisible();
});
