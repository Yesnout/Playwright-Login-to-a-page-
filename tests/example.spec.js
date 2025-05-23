// @ts-check
import { test, expect } from '@playwright/test';

test('Login en Self Service desde el portal de Banner', async ({ page, context}) => {
  //  Go to banner portal
  await page.goto('https://landing.unapec.edu.do/banner/'); //There you can adjust the URL in base of the website that you're in

  

  // wait to the page charge the informationn
  //Below this text says "Nuevapage" (you can name however you prefer) 
  const [Nuevapage] = await Promise.all([
    context.waitForEvent('page'), // Esperar a que se abra una nueva página
    page.click('a[href="https://alumnos.unapec.edu.do/StudentSelfService"] '), // Hacer clic en el botón
  ]);

  // 4. Llenar el correo institucional
  await Nuevapage.locator('#i0116').fill('y.encarnacion14@unapec.edu.do'); // Esperar a que el campo de correo esté disponible
  //await page.fill('input[type="email"]', '');

  //click en el boton de siguiente
  await Nuevapage.locator('#idSIButton9').click();

  // 5. Llenar la contraseña
  await Nuevapage.locator('#i0118').fill('Codigo.2006'); // Esperar a que el campo de contraseña esté disponible
  
  //El click de la contraseña
  await Nuevapage.locator("#idSIButton9").click();
//Click para el mantener inicio de sesion
  await Nuevapage.locator("#idSIButton9").click();
});
