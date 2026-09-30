# 🚐 uberdriver — VINCY DRIVER App Documentation

[![Deploy to GitHub Pages](https://github.com/mmks735/uberdriver/actions/workflows/deploy.yml/badge.svg)](https://github.com/mmks735/uberdriver/actions/workflows/deploy.yml)
[![Docusaurus](https://img.shields.io/badge/Built_with-Docusaurus_v3-23964D.svg)](https://docusaurus.io/)
[![Flutter](https://img.shields.io/badge/Platform-Flutter_3.10+-02569B.svg)](https://flutter.dev/)

Complete UI/UX, screen flows, and Flutter code documentation for the **VINCY DRIVER** minibus and commercial transit mobile app.

🌐 **Live Documentation:** **[https://mmks735.github.io/uberdriver/](https://mmks735.github.io/uberdriver/)**

---

## 📱 Documented Screens & Operational Modules

| # | Screen / Module | Description | Documentation Link |
|---|-----------------|-------------|--------------------|
| 1 | **Driver App Overview** | Architecture, brand guidelines, navigation map & tech stack | [Overview](https://mmks735.github.io/uberdriver/) |
| 2 | **Splash & Onboarding** | Splash screen initialization and 3-slide driver intro carousel | [Onboarding](https://mmks735.github.io/uberdriver/onboarding) |
| 3 | **Authentication & Setup** | Login, 3-step password recovery, driver registration & vehicle setup | [Authentication](https://mmks735.github.io/uberdriver/auth) |
| 4 | **Home Dashboard** | Departure countdowns, waiting passenger reminders & seat adjuster | [Home Dashboard](https://mmks735.github.io/uberdriver/home) |
| 5 | **QR Scanner & Boarding** | Dual-mode camera scanner (Full Ticket vs Short Drop) & validation | [QR Scanner](https://mmks735.github.io/uberdriver/qr-scanner) |
| 6 | **Refund Management** | Ticket barcode search, QR refund scan, warning check & credit return | [Refund](https://mmks735.github.io/uberdriver/refund) |
| 7 | **Earnings & Payouts** | Revenue metric cards, withdrawal modal & paginated transaction logs | [Earnings](https://mmks735.github.io/uberdriver/earnings) |
| 8 | **Vehicle Profile** | Vehicle specifications, assigned route stops & information update | [Vehicle](https://mmks735.github.io/uberdriver/vehicle) |
| 9 | **Driver Documents** | Driving license front/back image upload and compliance verification | [Documents](https://mmks735.github.io/uberdriver/documents) |
| 10 | **Live GPS Tracking** | Google Maps live position stream & Socket.IO coordinate broadcast | [Live Tracking](https://mmks735.github.io/uberdriver/tracking) |
| 11 | **Notifications Center** | Push notification alerts, trip events & bulk mark-all-as-read | [Notifications](https://mmks735.github.io/uberdriver/notifications) |
| 12 | **Security Settings** | Password update form, validation rules & session security | [Security](https://mmks735.github.io/uberdriver/security-settings) |
| 13 | **Driver Profile** | Personal information, avatar photo upload & More menu hub | [Profile](https://mmks735.github.io/uberdriver/profile) |
| 14 | **Legal & Support** | About VINCY DRIVER, Terms of Service, Privacy Policy & Contact Desk | [Legal & Support](https://mmks735.github.io/uberdriver/legal-support) |

---

## 🛠️ Local Development

### Prerequisites
- Node.js `v18+` or `v20+` (tested with v24)
- npm `v9+` or `v10+`

### Setup & Run
```bash
# Clone the repository
git clone git@github.com-mmks735:mmks735/uberdriver.git
cd uberdriver

# Install dependencies
npm install

# Start local development server
npm start
```

The site will be available locally at `http://localhost:3000/uberdriver/`.

### Production Build & Test
```bash
npm run build
npm run serve
```

---

## 🚀 GitHub Pages Automated Deployment

The documentation site is automatically built and deployed to GitHub Pages via **GitHub Actions** on every push to the `main` branch:

1. Push commits to `main`.
2. The workflow defined in `.github/workflows/deploy.yml` triggers automatically.
3. The site is compiled and published live to `https://mmks735.github.io/uberdriver/`.

---

## 📄 License
MIT License.