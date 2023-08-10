import { test, expect } from '@playwright/test';

test('home', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Home page for Fitness Club' }).click();
});

test('about', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'About page for Fitness Club' }).click();
});

test('blog', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Blog page for Fitness Club' }).click();
});

test('social media', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'Instagram' }).click();
  await page.getByRole('link', { name: 'Facebook' }).click();
});

