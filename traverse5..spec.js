// Import necessary modules from the Playwright testing library and assert library
const { test, expect } = require('@playwright/test');
const assert = require('assert');

// Define a test case for counting children elements
test("all children element", async ({ page }) => {
    // Navigate to a web page
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Find all children elements under '.traversal-drinks-list'
    let elementCount = await page.$$('.traversal-drinks-list > *');
    
    // Assert that the count of elements is 5
    expect(elementCount.length).toBe(5);
})

// Define a test case for traversing elements using $$eval
test("Traverse using childrens", async ({ page }) => {
    // Navigate to a web page
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Use $$eval to count elements under '.traversal-buttons > input'
    let totalItemCount = await page.$$eval('.traversal-buttons > input', (items) => {
        return items.length;
    });
    
    // Assert that the count of elements is 3
    expect(totalItemCount).toBe(3);
})

// Define a test case for traversing elements using $$eval with a CSS selector
test("Traverse using childrens", async ({ page }) => {
    // Navigate to a web page
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Use $$eval to count elements under '.traversal-buttons > input' again
    let totalItemCount = await page.$$eval('.traversal-buttons > input', (items) => {
        return items.length;
    });
    
    // Assert that the count of elements is 3
    expect(totalItemCount).toBe(3);
})

// Define test cases for traversing elements using :first-child, :last-child, and :nth-child()
// Also, demonstrate the use of $eval to get text content
test("traverse using first", async ({ page }) => {
    // Navigate to a web page
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Use $eval to get the text content of the first child element
    let firstElementText = await page.$eval('.btn-group-toggle > button:first-child', (firstE) => {
        return firstE.textContent;
    });
    
    // Assert that the text content is 'Button-1'
    expect('Button-1').toBe(firstElementText);
})

test("traverse using last", async ({ page }) => {
    // Navigate to a web page
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Use $eval to get the text content of the last child element
    let lastElementText = await page.$eval('.btn-group-toggle > button:last-child', (lastE) => {
        return lastE.textContent;
    });
    
    // Assert that the text content is 'Button-4'
    expect('Button-4').toBe(lastElementText);
})

test.only("traverse using last", async ({ page }) => {
    // Navigate to a web page
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Use $eval to get the text content of the second child element
    let secondEText = await page.$eval('.btn-group-toggle > button:nth-child(2)', (secondE) => {
        return secondE.textContent;
    });
    
    // Assert that the text content is 'Button-2'
    expect('Button-2').toBe(secondEText);
})

// Define a test case for selecting an element by index in a list
test.only("element by Index", async ({ page }) => {
    // Navigate to a web page
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Use $$eval to get the text content of all elements under '.btn-group-toggle > button'
    let listE = await page.$$eval('.btn-group-toggle > button', (elements) => {
        // Map the elements to an array of text content
        return elements.map(function (el) {
            return el.textContent;
        });
    });
    
    // Assert that the text content of the last element is 'Button-3'
    expect('Button-3').toBe(listE[listE.length - 1]);
})
