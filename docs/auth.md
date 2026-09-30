---
title: Authentication, Registration & Setup
sidebar_position: 3
---

# 🔐 Authentication, Registration & Setup

The **VINCY DRIVER** platform provides a secure, streamlined onboarding and authentication flow tailored for commercial drivers, incorporating phone validation (`+1784`), vehicle creation, and a multi-step password recovery bottom sheet.

---

## 🔑 Driver Login Screen

Drivers log in using their registered email address or phone number and password.

<div style={{display:'flex', gap:'2rem', alignItems:'flex-start', flexWrap:'wrap', margin:'1.5rem 0'}}>
<div style={{flex:'1', minWidth:'280px'}}>

### UI Elements & Controls

| Element | Component | Validation Rules |
|---------|-----------|------------------|
| **Email / Phone** | `TextInput` | Required, valid email or phone format |
| **Password** | `PasswordInput` | Required, obscured text with eye toggle |
| **Forgot Password?** | `TextButtonWidget` | Opens `ForgotPasswordBottomSheet` |
| **Login CTA** | `Button` | Triggers `LoginController.onLogin()` with loader |
| **Register Link** | `RichText` | Navigates to `/createAccount` |

### Controller Logic (`LoginController`)
```dart
Future<void> onLogin() async {
  if (phoneController.text.isEmpty || passwordController.text.isEmpty) {
    Alert.error('Please enter all required fields.');
    return;
  }
  
  isLoading = true;
  updateUI();
  
  final res = await ApiRepo.post(
    ApiEndPoints.login,
    data: {
      'email_or_phone': phoneController.text.trim(),
      'password': passwordController.text.trim(),
    },
  );
  
  isLoading = false;
  if (res.isSuccess) {
    await LocalStorage.instance.setToken(res.data['token']);
    await ProfileService.instance.fetchProfile();
    Get.offAllNamed(AppRoutes.homeNavigator);
  }
}
```

</div>
</div>

---

## 🔄 Forgot Password Flow (3-Step Modal Sheet)

When a driver taps **"Forgot password?"**, a bottom sheet (`ForgotPasswordBottomSheet`) handles credential recovery in three sequential phases:

<div className="step-flow">

<div className="step-item">
  <div className="step-number">1</div>
  <div className="step-content">
    <h4>Step 1: Enter Registered Email or Phone</h4>
    <p>Driver inputs their registered contact detail. Tapping "Send OTP" sends a 4-digit code to their email or SMS via <code>ApiEndPoints.sendOtp</code>.</p>
  </div>
</div>

<div className="step-item">
  <div className="step-number">2</div>
  <div className="step-content">
    <h4>Step 2: 4-Digit OTP Verification</h4>
    <p>Presents a 4-box PIN input powered by <code>Pinput</code> with automatic focus progression and a 60-second resend countdown timer.</p>
  </div>
</div>

<div className="step-item">
  <div className="step-number">3</div>
  <div className="step-content">
    <h4>Step 3: Set New Password & Confirmation</h4>
    <p>Driver provides a new secure password (minimum 8 characters) and confirms it. Upon submission, an instant success modal appears, redirecting back to login.</p>
  </div>
</div>

</div>

<div className="artboard-container">
  <img src="/uberdriver/img/screens/auth/Login_ForgotPassword_Flow.png" alt="Login & Forgot Password Artboard Flow" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: Complete Login & 3-Step Forgot Password Recovery Flow</span>
  </div>
</div>

---

## 📝 Driver Registration & Vehicle Setup

New drivers register through a two-stage process: personal information verification followed by vehicle and route assignment.

### 1. Account Details (`CreateAccountScreen`)
- **Full Name:** Driver's legal name as it appears on commercial licenses.
- **Email Address:** Unique email used for receipts and system alerts.
- **Phone Number:** Country code fixed to Saint Vincent (`+1784`) with formatted input.
- **Date of Birth & Gender:** Standard compliance fields.
- **Password & Confirmation:** Secure credential setup.

### 2. Vehicle Profile Creation (`CreateVehicleScreen`)
After creating an account, the driver registers their minibus:
- **Vehicle Brand & Model:** e.g., Toyota HiAce, Nissan Caravan.
- **License Plate Number:** Official registration number (e.g., `H-1234`).
- **Color & Year of Manufacture:** Minibus exterior details.
- **Seating Capacity:** Total passenger capacity (e.g., 14 or 18 seats).
- **Driving License Photos:** Front and back document upload slots.

<div className="artboard-container">
  <img src="/uberdriver/img/screens/auth/Create_Account_Flow.png" alt="Create Account & Vehicle Setup Flow" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: Driver Registration, Phone Verification & Vehicle Setup Flow</span>
  </div>
</div>
