// @ts-check
import { test, expect } from '@playwright/test';

test('Login', async ({ page, context}) => {
  //  Go to banner portal
  await page.goto('the first link for the log in'); //There you can adjust the URL in base of the website that you're in

  

  // wait to the page charge the informationn
  //Below this text says "Nuevapage" (you can name however you prefer) that's because whem you click specifically the button before, 
  // it open a new link, sometimes is on the same, sometimes is no 
  const [Nuevapage] = await Promise.all([
    context.waitForEvent('page'), //this command is to wait for the page 1 to chargen so i can load
    page.click('the link for the newpage"] '), // This is for the system click the button
  ]);

  // 4. There's fill the institutional email
  await Nuevapage.locator('There goes the email label id with a "#" at the beginning ').fill('There goes the email'); // wait for the email field to be available


  //click on the nex button(in this case is because it redirect to the next parte(password thing))
  await Nuevapage.locator('The id for the button').click();

  // 5. fill the password
  await Nuevapage.locator('id for the paswword label').fill('password'); // wait for the password field to be available
  
  //password button
  await Nuevapage.locator("#button id").click(); //this is the button for the password
//This is for the question "Stay signed in?"
  await Nuevapage.locator("#idSIButton9").click(); //this is for case that request you stay sign in after
});


//And that's all :)
//remember, yo need to has a the playwright extension on vscode and also on the command promt as "npm i playwright"
