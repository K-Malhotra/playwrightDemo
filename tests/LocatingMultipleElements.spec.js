import {test,expect} from '@playwright/test'

test('LocateMultupleElements', async ({page})=>{
await page.goto ('https://www.demoblaze.com/index.html');
/*const links = await page.$$('a');

for(const link of links){
const linktext = await link.textContent();
console.log(linktext);
} */
await page.waitForSelector("//div[@id='tbodyid']//h4/a");
const productname = await page.$$("//div[@id='tbodyid']//h4/a")

for(const product of productname){

const prodname = await product.textContent();
console.log(prodname);
}


})