import { test, expect } from "@playwright/test";
test.beforeEach(async ({ page }) => {
  // Runs before each test and signs in each page.
  await page.goto("https://www.fitpeo.com/");
  await page.waitForTimeout(2000);
});
test("Tc-01-Naviagating to the Fitpeo Home page.", async ({page})=>{
  await page.goto("https://www.fitpeo.com/");
  await expect(page.locator("//div[@class='satoshi MuiBox-root css-1s5s2kl'][text()='Home']")).toHaveText("Home");
});

test("Tc-02-Navigate to the Revenue Calculator Page", async({page})=>{
  await expect(page.locator("//div[@class='satoshi MuiBox-root css-1aspamu'][text()='Revenue Calculator']")).toHaveText("Revenue Calculator");
  await page.locator("//div[@class='satoshi MuiBox-root css-1aspamu'][text()='Revenue Calculator']").click();
});

test("Tc-03-Navigate to the Revenue Calculator Page and Scroll Down to the Slider section", async({page})=>{
  await page.locator("//div[@class='satoshi MuiBox-root css-1aspamu'][text()='Revenue Calculator']").click();
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  await expect(page.locator("//span[@class='MuiSlider-rail css-3ndvyc']")).toBeVisible();
});

test("Tc-04-Navigate to the Revenue Calculator Page and Scroll Down to the Slider section", async({page})=>{
  await page.locator("//div[@class='satoshi MuiBox-root css-1aspamu'][text()='Revenue Calculator']").click();
  await page.waitForTimeout(2000);
  await page.getByRole('spinbutton').clear();
  await page.getByRole('spinbutton').fill('820');
  await page.getByRole('spinbutton').press('Enter');
  await page.waitForTimeout(2000);
  await expect(page.locator("(//p[normalize-space()='820'])[1]")).toHaveText("820");
});

test("Tc-05-Update the text field to 560", async({page})=>{
  await page.locator("//div[@class='satoshi MuiBox-root css-1aspamu'][text()='Revenue Calculator']").click();
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  await page.getByRole('spinbutton').clear();
  await page.getByRole('spinbutton').fill('560');
  await page.getByRole('spinbutton').press('Enter');
  await page.waitForTimeout(2000);
});

test("Tc-06-Validate the updated slider value ", async({page})=>{
  await page.locator("//div[@class='satoshi MuiBox-root css-1aspamu'][text()='Revenue Calculator']").click();
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  await page.getByRole('spinbutton').clear();
  await page.getByRole('spinbutton').fill('560');
  await page.getByRole('spinbutton').press('Enter');
  await page.waitForTimeout(2000);
  await expect(page.locator("(//div[@class='MuiBox-root css-19xu03j'])[2]")).toBeVisible();
  await expect(page.locator("(//p[normalize-space()='560'])[1]")).toHaveText("560");
});


test("Tc-07- Scroll down further and select the checkboxes for CPT-99091, CPT-99453, CPT-99454, and CPT-99474.", async({page})=>{
  await page.locator("//div[@class='satoshi MuiBox-root css-1aspamu'][text()='Revenue Calculator']").click();
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  // Selecting 'CPT-99091' check box
  await page.locator("(//input[@type='checkbox'])[1]").click();
  // Selecting 'CPT-99453' check box
  await page.locator("(//input[@type='checkbox'])[2]").click();
  // Selecting 'CPT-99454' check box
  await page.locator("(//input[@type='checkbox'])[3]").click();
  // Selecting 'CPT-99474.' check box
  await page.locator("(//input[@type='checkbox'])[8]").click();
});

test("Tc-08-Validate Total Recurring Reimbursement", async({page})=>{
  await page.locator("//div[@class='satoshi MuiBox-root css-1aspamu'][text()='Revenue Calculator']").click();
  await page.waitForTimeout(2000);
  await page.evaluate(() => {
    window.scrollBy(0, 1000);
  });
  // Selecting 'CPT-99091' check box
  await page.locator("(//input[@type='checkbox'])[1]").click();
  // Selecting 'CPT-99453' check box
  await page.locator("(//input[@type='checkbox'])[2]").click();
  // Selecting 'CPT-99454' check box
  await page.locator("(//input[@type='checkbox'])[3]").click();
  // Selecting 'CPT-99474.' check box
  await page.locator("(//input[@type='checkbox'])[8]").click();
  await expect(page.locator("(//p[@class='MuiTypography-root MuiTypography-body2 inter css-1xroguk'])[4]")).toBeVisible();
  });

test("Tc-09-Verify that the header displaying Total Recurring Reimbursement for all Patients Per Month: shows the value $110700.", async({page})=>{
    await page.locator("//div[@class='satoshi MuiBox-root css-1aspamu'][text()='Revenue Calculator']").click();
    await page.waitForTimeout(2000);
    await page.evaluate(() => {
      window.scrollBy(0, 1000);
    });
    await page.getByRole('spinbutton').clear();
    await page.getByRole('spinbutton').fill('820');
    await page.getByRole('spinbutton').press('Enter');
    await page.waitForTimeout(2000);
    // Selecting 'CPT-99091' check box
    await page.locator("(//input[@type='checkbox'])[1]").click();
    // Selecting 'CPT-99453' check box
    await page.locator("(//input[@type='checkbox'])[2]").click();
    // Selecting 'CPT-99454' check box
    await page.locator("(//input[@type='checkbox'])[3]").click();
    // Selecting 'CPT-99474.' check box
    await page.locator("(//input[@type='checkbox'])[8]").click();
    await page.waitForTimeout(2000);
    await expect(page.locator("(//p[@class='MuiTypography-root MuiTypography-body1 inter css-hocx5c'])[4]")).toHaveText("$110700");
    });