import { test, expect } from '@playwright/test';
import { injectAxe, checkA11y } from 'axe-playwright';

test.beforeEach(async ({ page }) => {
  page.on('console', msg => {
    console.log(`Console ${msg.type()}: ${msg.text()}`);
  });
  page.on('pageerror', error => {
    console.log(`Page error: ${error.message}`);
  });
});

test('homepage has title', async ({ page }) => {
  await page.goto('http://localhost:3000/en');
  await expect(page).toHaveTitle(/Afidh Adra's Portfolio/);
});

test('navigation to about page', async ({ page }) => {
  await page.goto('http://localhost:3000/en');
  await page.click('text=About');
  await expect(page).toHaveURL(/.*about/);
});

test('dark mode toggle', async ({ page }) => {
  await page.goto('http://localhost:3000/en');
  const themeButton = page.locator('button').filter({ hasText: '🌙' });
  await themeButton.click();
  // Check if dark mode is applied (this might need adjustment based on implementation)
  await expect(page.locator('html')).toHaveClass(/dark/);
});

test('blog page loads and shows posts', async ({ page }) => {
  await page.goto('http://localhost:3000/en/blog');
  await expect(page).toHaveTitle(/Blog/);
  // Check if posts are displayed
  await expect(page.locator('article')).toHaveCount(1); // Assuming 1 post
});

test('contact form submission', async ({ page }) => {
  await page.goto('http://localhost:3000/en/contact');
  await page.fill('input[name="name"]', 'Test User');
  await page.fill('input[name="email"]', 'test@example.com');
  await page.fill('textarea[name="message"]', 'This is a test message');
  
  // Listen for alert
  page.on('dialog', async dialog => {
    expect(dialog.message()).toContain("Thank you for your message! I'll get back to you soon.");
    await dialog.accept();
  });
  
  await page.click('button[type="submit"]');
});

test('language switch to Indonesian', async ({ page }) => {
  await page.goto('http://localhost:3000/en');
  await page.click('button:has-text("EN")'); // Assuming locale switch button
  await expect(page).toHaveURL(/\/id/);
  await expect(page.locator('text=Hai, saya')).toBeVisible();
});

test('accessibility check on homepage', async ({ page }) => {
  await page.goto('http://localhost:3000/en');
  await injectAxe(page);
  await checkA11y(page, null, {
    detailedReport: true,
    detailedReportOptions: { html: true },
  });
});