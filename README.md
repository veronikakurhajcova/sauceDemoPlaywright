# 🧪 SauceDemo Playwright Test Suite

![Playwright](https://img.shields.io/badge/Playwright-45ba4b?style=for-the-badge&logo=playwright&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)

Automated E2E test suite for the [SauceDemo](https://www.saucedemo.com) e-commerce application, demonstrating modern testing practices with a focus on maintainability, clean architecture, and security awareness.

---

## 📋 Description

This test suite contains automated tests covering the full user journey of the SauceDemo e-commerce application:
- ✅ **Happy Path tests** — core user flows
- ❌ **Negative tests** — error handling and validation
- 🔒 **Security tests** — OWASP-inspired (SQL injection, unauthorized access, session management)
- 🛒 **E2E tests** — complete purchase flow with step-by-step reporting

**Total: 20+ automated tests across 6 test suites**

---

## 🛠️ Tech Stack & Practices

- **Playwright** — E2E testing framework with cross-browser support
- **JavaScript** (ES Modules) — test implementation language
- **Page Object Model (POM)** — decoupling page logic from test scripts for better maintainability
- **Centralized Test Data** — all constants (URLs, users, messages, products) managed in a single `credentials.js` — zero hardcoding in tests
- **Risk-Based Testing** — test cases prioritized by business impact
- **Allure + HTML Reporter** — detailed test reporting

---

## 🔑 Key Features

- ✅ Full **Happy Path** and **Negative** scenario coverage
- ✅ **E2E purchase flow** with `test.step()` for clear reporting
- ✅ **Security testing** — SQL injection, unauthorized access, session expiration (OWASP-inspired)
- ✅ **Cross-browser** — Chromium, Firefox, WebKit
- ✅ **Tag-based test execution** — `@smoke`, `@regression`, `@e2e`, `@security`
- ✅ **Utility functions** — reusable sorting logic for filter assertions
- ✅ Known bug documented with `test.fail()` — CI/CD pipeline not blocked

---

## 🔐 Security & Data Privacy

This project uses **publicly available demo credentials** provided by SauceDemo and does not contain any sensitive data.

In a real-world project, sensitive data (credentials, tokens, API keys) would be:
- Stored in `.env` files
- Excluded via `.gitignore`
- Managed via CI/CD secret variables

---

## 📁 Project Structure

```
SauceDemoPlaywright/
├── tests/
│   ├── auth.spec.js            # Login & Logout tests
│   ├── cart.spec.js            # Shopping cart tests
│   ├── e2e.spec.js             # Complete purchase flow
│   ├── filter.spec.js          # Product filtering tests
│   ├── productDetail.spec.js   # Product detail tests
│   └── security.spec.js        # Security tests
├── pages/
│   ├── LoginPage.js
│   ├── MenuPage.js
│   ├── InventoryPage.js
│   ├── InventoryItemPage.js
│   ├── CartPage.js
│   ├── CheckoutPage.js
│   ├── CheckoutOverviewPage.js
│   └── CheckoutCompletePage.js
├── helpers/
│   ├── credentials.js          # Centralized test data & constants
│   └── sortUtils.js            # Utility functions for sorting assertions
├── playwright.config.js
└── package.json
```

---

## 📋 Test Coverage

### ✅ Happy Path Tests

| Suite | Scenarios | Tags |
|-------|-----------|------|
| Auth | Login with valid credentials, Logout | `@smoke` `@regression` |
| Cart | Add product to cart, Remove product from cart | `@smoke` `@regression` |
| E2E | Complete purchase flow | `@e2e` `@regression` |
| Filter | Price ASC, Price DESC, Name A-Z, Name Z-A | `@regression` |
| Product Detail | Correct product information displayed | `@regression` |

### ❌ Negative Tests

| Suite | Scenarios | Tags |
|-------|-----------|------|
| Auth | Invalid username, Invalid password, Empty fields, Locked user | `@regression` |

### 🔒 Security Tests

| Suite | Scenarios | Tags |
|-------|-----------|------|
| Security | SQL injection, Unauthorized access, Session expiration | `@security` |

---

## ⚙️ Tag-Based Execution

| Tag | Description |
|-----|-------------|
| `@smoke` | Critical happy path tests — quick sanity check |
| `@regression` | Full regression suite |
| `@e2e` | End-to-end tests covering complete user flows |
| `@security` | Security-related tests (OWASP-inspired) |

---

## 🚀 How to Get Started

### Prerequisites
- Node.js (v18+)
- npm

### Installation

**1. Clone the repository**
```bash
git clone https://github.com/veronikakurhajcova/sauceDemoPlaywright.git
cd SauceDemoPlaywright
```

**2. Install dependencies**
```bash
npm install
```

**3. Install Playwright browsers**
```bash
npx playwright install
```

### Running Tests

```bash
# All tests
npx playwright test

# By tag
npx playwright test --grep "@smoke"
npx playwright test --grep "@regression"
npx playwright test --grep "@security"
npx playwright test --grep "@e2e"

# Single browser
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit

# Specific file
npx playwright test auth.spec.js
```

### Viewing Reports

```bash
# HTML report
npx playwright show-report

# Allure report
npx allure generate allure-results --clean
npx allure open
```

---

## 🐛 Known Issues

See [ISSUES.md](./ISSUES.md) for detailed bug reports.
Affected tests are marked with `test.fail()` to ensure clean CI/CD pipeline execution.

---

## 👩‍💻 Author

**Veronika Kurhajcová**
📅 May 2026
