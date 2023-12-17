const { test, expect } = require('@playwright/test');

// Test Case 1
// test('To get DOM elements that match a specific selector, use the .filter() command.', async ({ page }) => {
//   //Navigate to the specified webpage
//   await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
  
//   //Use $$eval to get an array of elements matching the selector 'button.btn-outline-info'
//   const buttons = await page.$$eval('button.btn-outline-info', buttons => buttons.length);
  
//   //Assert that the number of matching buttons is 2
//   expect(buttons).toBe(2);
// });

// // Test Case 2
// test('To remove DOM element(s) from the set of elements, use the .not() command.', async ({ page }) => {
//     // Navigate to the specified webpage
//     await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
  
//     // Use the 'locator' to find elements with class '.traversal-button-states'
//     // Use the 'children()' method to get the child elements
//     // Use the 'filter()' method to exclude elements with class '.disabled'
//     const elements = await page.locator('.traversal-button-states').children().filter((child) => !child.locator('.disabled').count);
  
//     // Assert that the number of filtered elements is 3
//     expect(elements.length).toBe(3);
//   });
  

// // Test Case 3
// test('To get descendant DOM elements, use the .find() command.', async ({ page }) => {
//   //Navigate to the specified webpage
//   await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
  
//   // Use the 'locator' to find the descendant element with the specified selector
//   const coffeeText = await page.locator('.thumbnail:last-child #coffee').innerText();
  
//   // Assert that the text of the found element is 'Coffee'
//   expect(coffeeText).toBe('Coffee');
// });

// // Test Case 4
test('To get the closest ancestor DOM element, use the .closest() command.', async ({ page }) => {
  //Navigate to the specified webpage
  await page.goto('https://webdriveruniversity.com/Data-Table/index.html');
  
  //Use the 'locator' to find the element with id 'coffee', then use 'closest' to find the closest ancestor div
  await page.locator('#coffee').closest('div').expectThat('div').toHaveClass('thumbnail');
});

// // Test Case 5
// test('To get parents DOM element until another element, use the .parentsUntil() command.', async ({ page }) => {
//   //Navigate to the specified webpage
//   await page.goto('https://webdriveruniversity.com/Data-Table/index.html');

//   //Use the 'locator' to find the element with id 'coffee', then use 'parentsUntil' to get parents until an element with class '.thumbnail'
//   const coffeeParents = await page.locator('#coffee').parentsUntil('.thumbnail');
  
//   // Assert that the number of parent elements is 1
//   expect(coffeeParents.length).toBe(1);  
// });
