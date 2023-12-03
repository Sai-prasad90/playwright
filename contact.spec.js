const { test, expect } = require('@playwright/test');

// Test case to verify contact us form with valid data
test('verify contact us form with valid data', async ({ page }) => {
    // Arrangement: Navigate to the contact us form URL
    await page.goto("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

    // Actions: Fill in the contact us form with valid data
    await page.locator("input[name='first_name']").fill("sai")
    await page.locator("input[name='last_name']").fill("wate")
    await page.locator("input[name='email']").fill("01saiprasad@gmail.com")
    await page.locator("textarea[name='message']").fill("I am learning js")
    await page.locator("input[type ='submit']").click()

    // Assertion: Wait for 2 seconds and check if the h1 element is visible
    await page.waitForTimeout(2000);
    let isH1Visible = await page.locator('h1').isVisible();
    expect(isH1Visible).toBeTruthy();
})

// Test case to verify contact us form with reset button
test('verify contact us form with reset button', async ({ page }) => {
    // Arrangement: Navigate to the contact us form URL
    await page.goto("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

    // Actions: Fill in the contact us form with valid data and click the reset button
    await page.locator("input[name='first_name']").fill("sai")
    await page.locator("input[name='last_name']").fill("wate")
    await page.locator("input[name='email']").fill("01saiprasad@gmail.com")
    await page.locator("textarea[name='message']").fill("I am learning but what")
    await page.locator("input[type ='reset']").click()

    // Assertion: Check if the first_name input is empty after clicking reset
    let firstNameText = await page.locator("input[name='first_name']").innerText()
    expect(firstNameText).toBe("");
})

// Test case to verify contact us form with invalid email
test('verify contact us form with invalid email', async ({ page }) => {
    // Arrangement: Navigate to the contact us form URL
    await page.goto("https://www.webdriveruniversity.com/Contact-Us/contactus.html")

    // Actions: Fill in the contact us form with invalid email and submit
    await page.locator("input[name='first_name']").fill("sai")
    await page.locator("input[name='last_name']").fill("prasad")
    await page.locator("input[name='email']").fill("01saiprasad0gmail.com")
    await page.locator("textarea[name='message']").fill("I am learning js")
    await page.locator("input[type ='submit']").click()

    // Assertion: Wait for 2 seconds and check if the error message is present in the body
    await page.waitForTimeout(2000);
    let bodyText = await page.locator("body").innerText()
    expect(bodyText).toContain("Error: Invalid email address")
})
