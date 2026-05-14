import { test, expect } from '@playwright/test'
import { testConfig } from './test.config'

test.describe('amargraves.org placeholder page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/')
  })

  test('page loads successfully', async ({ page }) => {
    await expect(page).toHaveURL('/')
    await expect(page).not.toHaveTitle('')
  })

  test('shows "Under Development" eyebrow text', async ({ page }) => {
    await expect(page.getByText(new RegExp(testConfig.placeholder.eyebrow, 'i'))).toBeVisible()
  })

  test('shows org name "Amar Graves"', async ({ page }) => {
    await expect(page.getByText(new RegExp(testConfig.placeholder.orgName, 'i'))).toBeVisible()
  })

  test('sets noindex,nofollow robots meta tag', async ({ page }) => {
    const robotsMeta = page.locator('meta[name="robots"]')
    await expect(robotsMeta).toHaveCount(1)
    const content = await robotsMeta.getAttribute('content')
    expect(content).toMatch(/noindex/i)
    expect(content).toMatch(/nofollow/i)
  })
})
