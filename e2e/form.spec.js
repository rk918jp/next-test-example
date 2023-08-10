import { test, expect } from '@playwright/test'

test('e2e test sample', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.click('text=Form');
  await expect(page).toHaveURL('http://localhost:3000/form');
  await expect(page.locator('h1')).toContainText('Form Page');
  await page.locator('input[name="name"]').fill('test');
  await page.locator('button').click();
  await page.screenshot({ path: 'screenshot.png', fullPage: true });
  await expect(page.locator('div.input-value')).toContainText("test")
})