# 🐛 Issues Found in SauceDemo

![Issues](https://img.shields.io/badge/Total%20Issues-1-yellow?style=for-the-badge)
![Critical](https://img.shields.io/badge/Critical-0-brightgreen?style=for-the-badge)
![Medium](https://img.shields.io/badge/Medium-1-orange?style=for-the-badge)

---

## 📊 Summary

| Bug ID | Title | Severity | Type |
|--------|-------|----------|------|
| BUG-001 | Empty page displayed for invalid URL path | 🟡 Medium | UX / Security |

**Total issues:** 1 | **Critical:** 0 | **Medium:** 1

---

## BUG-001: Empty Page Displayed for Invalid URL Path

**Severity:** 🟡 Medium
**URL:** `https://www.saucedemo.com/ftp`
**Type:** UX / Security

### Issue
When an authenticated user navigates to a non-existent path (e.g., `/ftp`), the application displays a completely empty page instead of a proper error page or redirect.

### Steps to Reproduce
1. Log in with valid credentials (`standard_user` / `secret_sauce`)
2. Manually navigate to `https://www.saucedemo.com/ftp`
3. Observe the result

### Expected Behavior
- Display a **404 Not Found** page with a clear message
- Or **redirect** the user back to the inventory page or login page

### Actual Behavior
- A completely **empty page** is displayed
- The URL remains `https://www.saucedemo.com/ftp`
- No error message or guidance is shown to the user

### Impact
- Poor user experience — user has no indication of what went wrong
- Potential security concern — empty pages may hint at hidden application paths
- Missing proper error handling

### Recommendation
Implement a proper 404 error page with a user-friendly message and a link back to the home page. Add server-side routing fallback for undefined paths.

### Test Coverage
This bug is covered by an automated test in `security.spec.js`:

```javascript
test('[SEC] - Access non-existent path - should display 404 or redirect - KNOWN BUG',
  { tag: '@security' }, async ({ page }) => {
    test.fail(); // known bug - marked to not block CI/CD pipeline
    await page.goto(URLS.base_url + '/ftp');
    await expect(page.locator('#root')).not.toBeEmpty();
})
```

---

## 📈 Testing Overview

| Metric | Value |
|--------|-------|
| Test suites | 6 |
| Test cases executed | 20+ |
| Pass rate | 100% *(known bug marked with `test.fail()`)* |
| Browsers tested | Chromium, Firefox, WebKit |
| Testing approach | E2E, Negative, Security (OWASP-inspired), Cross-browser |

---

**Tested by:** Veronika Kurhajcová | **Date:** May 2026
