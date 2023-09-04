//importuj test i expect f-cije sa playwright modula
import { test, expect } from '@playwright/test';

//koristim 'test' f-ciju da bih definisala test pod nazivom 'Go to sign up page'
//'test' f-cija uzima dva argumenta, prvi je string title, a drugo je asinhrona f-cija unutar koje cu pisati test kejseve vezane za scenario "Go to sign up page"
test('Go to sign up page', async ({page}) => {
    await page.goto("http://localhost:3000");
    await page.getByText('Log in').click();
    await page.getByRole('link', { name: 'Don’t have an account? Sign up here.'})
   
    //assert?
    //await expect (page.getByText('Create a new account')).toBeVisible());
    //await expect(page.getByRole('heading', { name: ' Create a new account ' })).toBeVisible();
    

})
