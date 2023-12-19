const { test, expect } = require('@playwright/test');
const assert = require ('assert');

// Test Case 1: Counting children elements
test("all children element", async ({ page }) => {
     
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Select all children elements of 
    let elementCount = await page.$$('.traversal-drinks-list > *');
    
    // Expect the number of children elements to be 5
    expect(elementCount.length).toBe(5);
})

// Test Case 2: Evaluating the count of elements using $$eval
test("Traverse using children", async ({ page }) => {
     
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Evaluate the count of input elements
    let totalItemCount = await page.$$eval('.traversal-buttons > input', (items) => {
        return items.length;
    });

    // Expect the count of input elements to be 3
    expect(totalItemCount).toBe(3);
})

// Test Case 3: Evaluating the count of elements using $$eval with comments
test("Traverse using children with comments", async ({ page }) => {
     
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Evaluate the count of input elements
    let totalItemCount = await page.$$eval('.traversal-buttons > input', (items) => {
        return items.length;
    });

    // Expect the count of input elements to be 3
    expect(totalItemCount).toBe(3);
})

// Test Case 4: Traversing elements using first(), last(), eq()
test("Traverse using first", async ({ page }) => {
     
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    //  text content of the first child button 
    let firstElementText = await page.$eval('.btn-group-toggle > button:first-child', (firstE) => {
        return firstE.textContent;
    });

    // Expect the text content to be 'Button-1'
    expect('Button-1').toBe(firstElementText);
})

// Test Case 5: Traversing elements using last()
test("Traverse using last", async ({ page }) => {
     
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Extract text content of the last child button within '.btn-group-toggle'
    let lastElementText = await page.$eval('.btn-group-toggle > button:last-child', (lastE) => {
        return lastE.textContent;
    });

    // Expect the text content to be 'Button-4'
    expect('Button-4').toBe(lastElementText);
})

// Test Case 6: Traversing elements using nth-child()
test.only("Traverse using nth-child", async ({ page }) => {
     
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Extract text content of the second child button 
    let secondElementText = await page.$eval('.btn-group-toggle > button:nth-child(2)', (secondE) => {
        return secondE.textContent;
    });

    // Expect the text content to be 'Button-2'
    expect('Button-2').toBe(secondElementText);
})

// Test Case 7: Traversing elements using element by index
test.only("element by Index", async ({ page }) => {
     
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Evaluate the text content of all buttons within '.btn-group-toggle'
    let listE =  await page.$$eval('.btn-group-toggle > button', (elements) => {
        // Map and return the text content of each button
        return elements.map(function(el){
            return el.textContent;
        });
    });

    // Expect the last element's text content to be 'Button-3'
    expect('Button-3').toBe(listE[listE.length-1]);
})

const { test, expect } = require('@playwright/test');

// Test Case 1: Traversing elements using children()
test("Traverse using children", async ({ page }) => {
     
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Select all children elements of '.traversal-buttons'
    let childrenElements = await page.$$('.traversal-buttons > *');

    // Expect the number of children elements to be 3
    expect(childrenElements.length).toBe(3);
})

// Test Case 2: Traversing elements using firstElement()
test("Traverse using firstElement", async ({ page }) => {
     
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Select the first child button within '.btn-group-toggle'
    let firstElementText = await page.$eval('.btn-group-toggle > button:first-child', (firstE) => {
        return firstE.textContent;
    });

    // Expect the text content to be 'Button-1'
    expect('Button-1').toBe(firstElementText);
})

// Test Case 3: Traversing elements using lastElement()
test("Traverse using lastElement", async ({ page }) => {
    
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Select the last child button 
    let lastElementText = await page.$eval('.btn-group-toggle > button:last-child', (lastE) => {
        return lastE.textContent;
    });

   
    expect('Button-4').toBe(lastElementText);
})

// Test Case 4: Traversing elements using nth-child()
test("Traverse using nth-child", async ({ page }) => {

    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Select the third child button
    let thirdElementText = await page.$eval('.btn-group-toggle > button:nth-child(3)', (thirdE) => {
        return thirdE.textContent;
    });

    // Expect the text content to be 'Button-3'
    expect('Button-3').toBe(thirdElementText);
})

// Test Case 5: Traversing elements using element by index
test("Element by Index", async ({ page }) => {
    
    await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
    
    // Evaluate the text content of all buttons within 
    let buttonTexts = await page.$$eval('.btn-group-toggle > button', (buttons) => {
        return buttons.map((button) => button.textContent);
    });

    // Expect the second element'
    expect('Button-2').toBe(buttonTexts[1]);
})
