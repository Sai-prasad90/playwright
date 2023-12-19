const { test, expect } = require('@playwright/test');
const assert = require ('assert');

// Test case for Dropdown functionality
test("Drop down", async ({ page }) => {
    // Arrangement: Navigate to the test page
    await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

    // Action: Select 'Python' from the first dropdown
    await page.selectOption('#dropdowm-menu-1', 'Python');

    // Assertion: Check if the selected value is 'python'
    const actualValue = await page.$eval("#dropdowm-menu-1", (el) => el.value);
    assert.strictEqual(actualValue, "python");

    // Action: Select 'Maven' from the second dropdown
    await page.selectOption('#dropdowm-menu-2', 'Maven');

    // Assertion: Check if the selected value is 'maven'
    const actualValue2 = await page.$eval("#dropdowm-menu-2", (el) => el.value);
    assert.strictEqual(actualValue2, "maven");

    // Additional Assertion: Check the text content of an h1 element
    let textContentVal = await page.$eval('h1', (el) => el.textContent());
    assert.strictEqual(textContentVal, "Dropdown Menu(s), Checkboxe(s) &amp; Radio Button(s)");
});

// // Test case for Checkbox functionality
// test("Check box", async ({ page }) => {
//     // Arrangement: Navigate to the test page
//     await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

//     // Action: Check the second checkbox and uncheck the third checkbox
//     await page.check('input[value= "option-2"]');
//     await page.uncheck('input[value= "option-3"]');

//     // Assertion: Check if the second checkbox is checked and the third checkbox is unchecked
//     const avail = await page.$eval('input[value= "option-2"]', (el) => el.checked);
//     const availB = await page.$eval('input[value= "option-3"]', (el) => el.checked);
//     assert.strictEqual(avail, true);
//     assert.strictEqual(availB, false);
// });

// // Test case for Radio Button functionality
// test("Radio button", async ({ page }) => {
//     // Arrangement: Navigate to the test page
//     await page.goto('https://webdriveruniversity.com/Dropdown-Checkboxes-RadioButtons/index.html');

//     // Action: Check the 'green' radio button
//     await page.check("input[value= 'green']");

//     // Assertion: Check if the 'green' radio button is checked and the 'blue' radio button is unchecked
//     let availC = await page.$eval('input[value= "green"]', (el) => el.checked);
//     assert.strictEqual(availC, true);

//     let availD = await page.$eval('input[value= "blue"]', (el) => el.checked);
//     assert.strictEqual(availD, false);
// });
