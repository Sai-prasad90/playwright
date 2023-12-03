const { test, expect } = require('@playwright/test');

// Test case to verify login function with valid credentials
test("Verify login function with valid credentials", async ({ page }) => {

    // Arrangement: Navigate to the login page
    await page.goto("https://www.saucedemo.com/v1/index.html")

    // Action: Fill in the username field with valid username
    await page.locator("input[id ='user-name']").fill('standard_user')

    // Action: Fill in the password field with valid password
    await page.locator("input[id ='password']").fill('secret_sauce')

    // Action: Click on the login button
    await page.locator('#login-button').click()
})
