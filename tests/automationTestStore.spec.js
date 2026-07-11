const { test, expect } = require('@playwright/test');
require('dotenv').config();

test('login to env',async({page})=>{
       const username = process.env.USERNAME;
       const password = process.env.PASSWORD;  
       await  page.goto('https://automationteststore.com/')
       await page.getByRole('link',{name:'Login or register'}).click()
       await page.locator('#loginFrm_loginname').fill(username)
       await page.locator('#loginFrm_password').fill(password)
       await page.getByRole('button',{name:'Login'}).click()
       await page.getByRole('link',{name:'Apparel & accessories'}).click()
       let products=await page.locator('//div[@class="thumbnails grid row list-inline"]/div//a[@class="prdocutname"]').allInnerTexts()
       let text=products.map(val=>val.trim())
       
       console.log(text)
       let pricesProduct=await page.locator('//div[@class="thumbnails grid row list-inline"]/div//div[@class="oneprice"]').allTextContents()
       let prices=pricesProduct.map(val=>val.trim())
       console.log(prices)
       const zipped =text.map((product,i)=>[product,prices[i]])

       console.log(zipped);

       //add to card
       await page.getByRole('link',{name:
       'Fiorella Purple Peep Toes'
       }).click()

       const dropdown=await page.locator('#option342')
       await dropdown.selectOption('36')
       await page.getByRole('link',{name: 'Add to Cart'}).click()
       console.log(await page.url())
       await page.locator('#cart_checkout1').click()

       let shippdetails=await page.locator('//table[@class="table confirm_shippment_options"]/tbody/tr/td').allTextContents()
       let shipdetailstext=shippdetails.map(val=>val.replace(/[\t\n]+/g,' ').replace(/\s+/g,' ').trim())

       console.log(shipdetailstext)

       let paymentdetails=await page.locator('//table[@class="table confirm_payment_options"]/tbody/tr/td').allTextContents()
       let paymentdetailstext=paymentdetails.map(val=>val.replace(/[\t\n]+/g,' ').replace(/\s+/g,' ').trim())

       console.log(paymentdetailstext)

       await page.getByRole('button', { name: 'Confirm Order' })

})
