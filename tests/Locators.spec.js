//const {test, expect} = require('@playwright/test')
import {test,expect} from '@playwright/test'

test('Locators', async ({page})=>{
    await page.goto('https://www.demoblaze.com/index.html');
    
    //click on log-in button
    // await page.locator('id=login2').click()
    await page.click('id=login2')

    //enter username
    await page.type('#loginusername', 'pavanol')
    //enter password
    await page.type("input[id='loginpassword']", 'test@123')

    //click on login button
    await page.click("//button[normalize-space()='Log in']")

    //assert log out button is visible
    const logoutLink = await page.locator("(//a[normalize-space()='Log out'])[1]")
    await expect(logoutLink).toBeVisible();
    
    await page.close()
    






})
