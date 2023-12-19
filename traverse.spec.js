// const { test, expect } = require('@playwright/test');
// const assert = require ('assert');

// // Test Case 1: Check if the number of children elements is 5
// test("all children element", async ({ page }) => {
//     // Arrange
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

//     // Act
//     let elementCount = await page.$$('.traversal-drinks-list > *');

//     // Assert
//     expect(elementCount.length).toBe(5);
// })

// // Test Case 2: Find the text content of the previous element sibling of the element with id 'milk'
// test("finding previous element sibling", async ({ page }) => {
//     // Arrange
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

//     // Act
//     let preEtext = await page.$eval('#milk', (element) => {
//         return element.previousElementSibling.textContent.trim(); // 'Tea'
//     })

//     // Assert
//     expect(preEtext).toBe('Tea');
// })

// // Test Case 3: Find the text content of the next element sibling of the element with id 'milk'
// test("finding next element sibling", async ({ page }) => {
//     // Arrange
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

//     // Act
//     let preEtext = await page.$eval('#milk', (element) => {
//         return element.nextElementSibling.textContent.trim();
//     })

//     // Assert
//     expect(preEtext).toBe('Espresso');
// })

// // Test Case 4: Check if there are more than 2 elements that are next siblings of the element with id 'coffee'
// test("finding nextAll element sibling", async ({ page }) => {
//     // Arrange
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

//     // Act
//     let allNextSibling = await page.$$('#coffee ~ *')

//     // Assert
//     expect(allNextSibling.length).toBeGreaterThan(2);
// })

// Test Case 5: Check if there are more than 2 elements that are previous siblings of the element with id 'sugar'
test("finding previousAll element sibling", async ({ page }) => {
    // Arrange
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html')

    // Act
    let allprevious = await page.$$('#sugar ~ *')

    // Assert
    expect(allprevious.length).toBeGreaterThan(2);
})

// // Test Case 6: Check if there are exactly 4 elements that are siblings of the element with id 'sugar'

// test("finding previousAll element sibling",async({page})=>{
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html')
//     let allSiblings = await page.$$('#sugar ~ *')
//     expect(allSiblings.length).toBe(4)
// })