import { test, expect, type Page } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

// Every page on the site. Add new pages here and they get every check below.
const PAGES = [
  { path: '/', name: 'Homepage' },
  { path: '/work/epms-hrms-automation/', name: 'Case study 01' },
  { path: '/work/java-modernization/', name: 'Case study 02' },
  { path: '/work/bank-integration/', name: 'Case study 03' },
];

const CASE_STUDIES = PAGES.filter((p) => p.path.startsWith('/work/'));

async function collectConsoleErrors(page: Page) {
  const errors: string[] = [];
  page.on('console', (msg) => { if (msg.type() === 'error') errors.push(msg.text()); });
  page.on('pageerror', (err) => errors.push(err.message));
  return errors;
}

for (const { path, name } of PAGES) {
  test.describe(name, () => {
    test('loads with one h1, a title and no console errors', async ({ page }) => {
      const errors = await collectConsoleErrors(page);
      const response = await page.goto(path);
      expect(response?.status(), `${path} should return 200`).toBe(200);
      await expect(page).toHaveTitle(/Faria Nawer/);
      await expect(page.locator('h1')).toHaveCount(1);
      await expect(page.locator('meta[name="description"]')).toHaveAttribute('content', /.{50,}/);
      expect(errors, 'console errors').toEqual([]);
    });

    test('has no serious accessibility violations', async ({ page }) => {
      await page.goto(path);
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(serious.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`)).toEqual([]);
    });

    test('has no serious accessibility violations in dark theme', async ({ page }) => {
      await page.addInitScript(() => localStorage.setItem('theme', 'dark'));
      await page.goto(path);
      await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
      const results = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa']).analyze();
      const serious = results.violations.filter((v) => v.impact === 'serious' || v.impact === 'critical');
      expect(serious.map((v) => `${v.id}: ${v.help} (${v.nodes.length})`)).toEqual([]);
    });

    test('does not scroll sideways', async ({ page }) => {
      await page.goto(path);
      const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
      expect(overflow, 'horizontal overflow in px').toBeLessThanOrEqual(1);
    });

    test('every internal link and in-page anchor resolves', async ({ page, request }) => {
      await page.goto(path);
      const hrefs = await page.locator('a[href]').evaluateAll((as) => as.map((a) => a.getAttribute('href') ?? ''));
      for (const href of new Set(hrefs)) {
        if (href.startsWith('#')) {
          if (href.length > 1) {
            await expect(page.locator(href), `anchor ${href} on ${path}`).toHaveCount(1);
          }
        } else if (href.startsWith('/')) {
          const [target, hash] = href.split('#');
          const res = await request.get(target || '/');
          expect(res.status(), `${href} linked from ${path}${href.endsWith('.pdf') ? ' — add your CV at public/faria-nawer-cv.pdf' : ''}`).toBeLessThan(400);
          if (hash) {
            const html = await res.text();
            expect(html, `anchor #${hash} on ${target}`).toContain(`id="${hash}"`);
          }
        }
      }
    });

    test('every image has alt text', async ({ page }) => {
      await page.goto(path);
      const missing = await page.locator('img:not([alt])').count();
      expect(missing).toBe(0);
    });
  });
}

test.describe('Theme', () => {
  test('toggle switches theme and remembers it', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'light' });
    await page.goto('/');
    const html = page.locator('html');
    await expect(html).toHaveAttribute('data-theme', 'light');

    const toggle = page.getByRole('button', { name: 'Switch to dark theme' });
    await toggle.click();
    await expect(html).toHaveAttribute('data-theme', 'dark');
    await expect(page.getByRole('button', { name: 'Switch to light theme' })).toBeVisible();

    await page.reload();
    await expect(html).toHaveAttribute('data-theme', 'dark');
  });

  test('follows the system setting on a first visit', async ({ page }) => {
    await page.emulateMedia({ colorScheme: 'dark' });
    await page.goto('/');
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
});

test.describe('Content rules', () => {
  test('homepage lists every case study', async ({ page }) => {
    await page.goto('/');
    for (const cs of CASE_STUDIES) {
      await expect(page.locator(`#work a[href="${cs.path}"]`)).toHaveCount(1);
    }
  });

  for (const cs of CASE_STUDIES) {
    test(`${cs.name}: result count matches its lines`, async ({ page }) => {
      await page.goto(cs.path);
      const lines = await page.locator('[data-testid="result-report"] li').count();
      expect(lines).toBeGreaterThan(0);
      await expect(page.getByTestId('result-count')).toHaveText(`${lines} / ${lines} passed`);
    });
  }

  test('no draft placeholders are published', async ({ page }) => {
    for (const { path } of PAGES) {
      await page.goto(path);
      const text = await page.locator('body').innerText();
      expect(text, `placeholder on ${path}`).not.toMatch(/\[[A-Z][A-Z0-9 ,:'’–-]{2,}\]/);
    }
  });

  test('unknown pages show the 404 page', async ({ page }) => {
    const res = await page.goto('/this-page-does-not-exist/');
    expect(res?.status()).toBe(404);
    await expect(page.locator('h1')).toHaveText("This page didn't pass.");
  });
});
