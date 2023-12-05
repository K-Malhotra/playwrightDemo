const {test,expect} = require('@playwright/test')

test('AssertionsTest',async ({page}) =>{
//open app url
let URL= 'https://demo.nopcommerce.com/register'
await page.goto(URL)
/*assertions
1. expect(page).toHaveURL()
2. expect(page).toHaveTitle()

*/
await expect(page).toHaveURL(URL)
await expect(page)toHaveTitle('nopCommerce demo store. Register')

})