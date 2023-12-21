import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  // const browser = await puppeteer.launch();
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://incm-dev.outsystemsenterprise.com/SSA_FrontOffice_SIMAP_VW/FormsLista?_ts=638373742035524077');

  // // Set screen size
  await page.setViewport({ width: 1080, height: 1024 });

  // await esperar(1000);
  const form = await page.waitForXPath('/html/body/div/div/div/div/div/div/div/div/div/div/div/div/table/tbody/tr[40]/td[3]/div/a/i');
  form.click();

  // wait 5 second for the page to load
  await esperar(5000);


  // get inputs to fill
  const [i1] = await page.$x('/html/body/div[1]/div/div/div[1]/div/div/div/div/div/div[2]/div/div/div/form/div/div/div/div[1]/div[3]/div/div/div/div[4]/span/textarea');
  await fillInput(i1, 'Zequinha Softwares');
  const [i2] = await page.$x('/html/body/div[1]/div/div/div[1]/div/div/div/div/div/div[2]/div/div/div/form/div/div/div/div[1]/div[3]/div/div/div/div[5]/span/input');
  await fillInput(i2, 'http://zequinhasoft.pt');
  const [i3] = await page.$x('/html/body/div[1]/div/div/div[1]/div/div/div/div/div/div[2]/div/div/div/form/div/div/div/div[1]/div[3]/div/div/div/div[6]/span/input');
  await fillInput(i3, 'http://zequinhasoft.pt/1');
  const [i4] = await page.$x('/html/body/div[1]/div/div/div[1]/div/div/div/div/div/div[2]/div/div/div/form/div/div/div/div[1]/div[4]/div/div/div/div[2]/span/textarea');
  await i4.type('Rua das amoras 78');
  const [i5] = await page.$x('/html/body/div[1]/div/div/div[1]/div/div/div/div/div/div[2]/div/div/div/form/div/div/div/div[1]/div[4]/div/div/div/div[3]/span/textarea');
  await i5.type('Guanabara');
  const [i6] = await page.$x('/html/body/div[1]/div/div/div[1]/div/div/div/div/div/div[2]/div/div/div/form/div/div/div/div[1]/div[4]/div/div/div/div[4]/span/input');
  await i6.type('11450-888');


  // await esperar(1000);
  // const iniciar = await page.waitForXPath('/html/body/div[3]/div[2]/div[2]/div[2]/input');
  // iniciar.click();

  // await esperar(1000);
  // const irn = await page.waitForXPath('/html/body/form/div/div[1]/div/div[6]/div[3]/button');
  // irn.click();

  // // THEME SELECTION
  // await esperar(1000);

  // const themeSelector = 'select#IdCategoria';
  // const themeOption = '22002';

  // const themeXpath = '/html/body/form/div[1]/div/div[1]/div/select';
  // await page.waitForXPath(themeXpath);

  // const selectHandles = await page.$x(themeXpath);

  // if (selectHandles.length > 0) {
  //   await page.select(themeSelector, themeOption);
  // } else {
  //   console.error(`Select element with XPath '${selectXPath}' not found.`);
  // }

  // //  SUBTHEME SELECTION
  // await esperar(1000);

  // const subThemeSelector = 'select#IdSubcategoria';
  // const subThemeOption = '30825';

  // const subThemeXpath = '/html/body/form/div[1]/div/div[2]/div/select';
  // await page.waitForXPath(subThemeXpath);

  // const subTheme = await page.$x(subThemeXpath);

  // if (subTheme.length > 0) {
  //   await page.select(subThemeSelector, subThemeOption);
  // } else {
  //   console.error(`Select element with XPath '${selectXPath}' not found.`);
  // }

  // await esperar(1000);

  // const submeter = await page.waitForXPath('/html/body/form/div[3]/div/nav/ul/li[2]/a');
  // submeter.click();

  // //  DISTRICT SELECTION
  // await esperar(1000);

  // const districtThemeSelector = 'select#IdDistrito';
  // const districtThemeOption = '8';
  // const districtThemeXpath = '/html/body/form/div/div/div[1]/div/select';

  // const districtTheme = await page.$x(districtThemeXpath);

  // if (districtTheme.length > 0) {
  //   await page.select(districtThemeSelector, districtThemeOption);
  // } else {
  //   console.error(`Select element with XPath '${selectXPath}' not found.`);
  // }

  // //  LOCALITY SELECTION
  // await esperar(1000);

  // const localityThemeSelector = 'select#IdLocalidade';
  // const localityThemeOption = '-1';
  // const localityThemeXpath = '/html/body/form/div/div/div[2]/div/select';

  // const localityTheme = await page.$x(localityThemeXpath);

  // if (localityTheme.length > 0) {
  //   await page.select(localityThemeSelector, localityThemeOption);
  // } else {
  //   console.error(`Select element with XPath '${selectXPath}' not found.`);
  // }


  // await esperar(1000);
  // const lista = await page.waitForXPath('/html/body/form/div/div/nav/ul/li[2]/a');
  // lista.click();

  // let count = 0;
  // while (true) {
  //   count++;
  //   console.log(count);
  //   await esperar(1000);
  //   await page.waitForXPath('/html/body/form/div/div/div[1]/div/div/div/h5');

  //   const h5 = await page.$$eval('h5', head => {
  //     return head.map(h => h.textContent);
  //   });
  //   if (!h5.includes('There are no appointment shedules available for the selected criteria.')) break;

  //   page.reload();
  // }

  async function esperar(time) {
    return new Promise(r => setTimeout(r, time));
  }

  async function fillInput(el, str) {
    try {
      await el.type(str);
    }
    catch (err) {
      console.log(`The xPath para a info: ${str} was not found!!!`);
    }
  }

  // await page.close();

  console.log("Bye bye!!!! :)");
})();