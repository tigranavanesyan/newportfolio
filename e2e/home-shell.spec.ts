import { test, expect } from '@playwright/test';
import { instant } from '@next/playwright';

const SHELL_MARKER = 'h1';
const SHELL_TEXT = 'I design and ship web products end to end.';

test.describe('instant initial load: home', () => {
  test('home shell is served', async ({ page, baseURL }) => {
    await instant(
      page,
      async () => {
        await page.goto('/');
        await expect(page.locator(SHELL_MARKER)).toContainText(SHELL_TEXT);
      },
      { baseURL },
    );
  });
});
