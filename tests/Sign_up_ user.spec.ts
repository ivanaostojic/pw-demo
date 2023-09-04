//Kako se nastavlja pisanje pisanje testa unutar istog scenarija?
import {test, expect} from '@playwright/test';

test('Sign up', async ({page}) => {
    await page.goto("http://localhost:3000/signup");
    await page.getByPlaceholder('Email').click();
    await page.getByPlaceholder('Email').fill('ivana.ostojicstojanovski@clarivate.com');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('automation123');

    ///klik na checkbox
   // await page.getByRole('checkbox', { name: 'Send me a welcome email' }).check();
   await page.locator("//input[@name='welcomeEmail']").check();

    ///kreiranje novog usera,  data-cy signup-submit ili button Create account?
    await page.getByRole('button', {name: 'Create account'}).click();
   
    //assert
    await expect(page.getByRole('heading', { name: 'Get started!' })).toBeVisible();    
    //assert2
    await expect(page.getByText('ivana.ostojicstojanovski@clarivate.com')).toBeVisible();    

})