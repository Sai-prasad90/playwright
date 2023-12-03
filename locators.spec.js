const { test, expect } = require('@playwright/test');

// Test case to demonstrate different locators
test('has title', async ({ page }) => {

    // Arrangement: Navigate to the specified URL
    await page.goto('https://webdriveruniversity.com/Contact-Us/contactus.html');

    // Action: Find a single element using attribute locator
    let singleElement = await page.$('h2[name= "contactme"]')
    expect(singleElement).not.toBeNull()

    // Action: Find multiple elements using attribute locator
    let multipleElements = await page.$$('input[type="text"]')
    expect(multipleElements.length).toBe(3);

    // Action: Find multiple elements using class name
    let multipleElementsByClassName = await page.$$('.text-center')
    expect(multipleElementsByClassName.length).toBe(2);

    // Action: Find an element using id
    let elementById = await page.$('#contact_form')
    expect(elementById).not.toBeNull()

    // Action: Find an element using CSS selector (attribute selector)
    let elementByCssSelector = await page.$('input[name = "first_name"]')
    expect(elementByCssSelector).not.toBeNull()

    // Action: Find an element using tagName
    let text = await page.locator('h2').innerText()
    expect(text).toEqual("CONTACT US")
});
