const { test, expect } = require('@playwright/test');

// methods
test('webelements method - click()', async ({ page }) => {
  // Visit the specified URL
  await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
  // Type values into input fields
  await page.type('[name="first_name"]', 'sai');
  await page.type('[name="last_name"]', 'wate');
  await page.type('[name="email"]', '01saiprasad@gmail.com');
  await page.type('[name="message"]', 'I am learning something which I dont know');
  // Click on the submit button
  await page.click('[type="submit"]');
  // Assert the existence of an h1 element
  await expect(page.locator('h1')).toBeVisible();
});

// test('webelements method - type()', async ({ page }) => {
//   // Visit the specified URL
//   await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
//   // Type values into input fields
//   await page.type('[name="first_name"]', 'chetya');
//   await page.type('[name="last_name"]', 'aag');
//   await page.type('[name="email"]', 'chetan_aag25@gmail.com');
//   await page.type('[name="message"]', 'I am learning python');
//   // Click on the submit button
//   await page.click('[type="submit"]');
//   // Assert the existence of an h1 element
//   await expect(page.locator('h1')).toBeVisible();
// });

// test('webelements method - clear()', async ({ page }) => {
//   // Arrangement: Visit the specified URL
//   // Action: Type and then clear the first name field
//   await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
//   const firstName = await page.locator('[name="first_name"]');
//   await firstName.type('Sai wate');
//   await firstName.clear();
//   // Assertion: Verify that the first name field is now empty
//   await expect(firstName).toHaveValue('');
// });

// test('webelements method - getting attribute and verifying attribute', async ({ page }) => {
//   // Visit the specified URL
//   await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
//   // Assert attributes of an h2 element
//   await expect(page.locator('h2')).toHaveAttribute('class');
//   await expect(page.locator('h2')).toHaveAttribute('name');
//   await expect(page.locator('h2')).toHaveAttribute('class', 'section_header');
//   await expect(page.locator('h2')).toHaveAttribute('name', 'contactme');
//   // Log the values of attributes
//   const classAttribute = await page.locator('h2').getAttribute('class');
//   console.log(classAttribute);
//   const nameAttribute = await page.locator('h2').getAttribute('name');
//   console.log(nameAttribute);
// });

// test('webelements method - getting text and verifying the text of element', async ({ page }) => {
//   // Visit the specified URL
//   await page.goto('https://www.webdriveruniversity.com/Contact-Us/contactus.html');
//   // Assert the text content of an h2 element
//   await expect(page.locator('h2')).toHaveText('CONTACT US');
//   // Log the text
//   const textContent = await page.locator('h2').innerText();
//   console.log(textContent);
//   // Assert that the h2 element is visible
//   await expect(page.locator('h2')).toBeVisible();
// });

// test('webelements method - element is selected', async ({ page }) => {
//   // Visit the specified URL
//   await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
//   // Assert checkbox with value "Lettuce" is checked
//    expect(page.locator('[value="Lettuce"]')).toBeChecked();
// });

// test('webelements method - element is enabled', async ({ page }) => {
//   await page.goto('https://www.webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');
//   //assert "cabbage" is disabled
//   await expect(page.locator('[value="cabbage"]')).toBeDisabled();
// });
