---
title: Security Settings & Password Update
sidebar_position: 12
---

# 🔒 Security Settings & Password Update

Account security protects driver earnings, vehicle assignments, and sensitive passenger transit data. The **Security Settings** module enables password modification, session invalidation, and credential management.

---

## 📱 Password Modification Workflow

Drivers navigate to **More → Account → Security Settings** to update their credentials:

<div style={{display:'flex', gap:'2rem', alignItems:'flex-start', flexWrap:'wrap', margin:'1.5rem 0'}}>
<div style={{flex:'1', minWidth:'280px'}}>

### Form Validation Rules

| Input Field | Requirement | Validation Criterion |
|-------------|:-----------:|----------------------|
| **Current Password** | Mandatory | Must match currently stored bcrypt hash |
| **New Password** | Mandatory | Minimum 8 characters, at least 1 uppercase, 1 numeric digit |
| **Confirm Password** | Mandatory | Must exactly match New Password value |

### Controller Implementation (`SecuritySettingController`)
```dart
Future<void> onChangePassword() async {
  if (!formKey.currentState!.validate()) return;

  isLoading = true;
  update();

  final res = await ApiRepo.post(
    ApiEndPoints.changePassword,
    data: {
      'current_password': currentPasswordController.text,
      'password': newPasswordController.text,
      'password_confirmation': confirmPasswordController.text,
    },
  );

  isLoading = false;
  update();

  if (res.isSuccess) {
    Alert.success('Password updated successfully!');
    currentPasswordController.clear();
    newPasswordController.clear();
    confirmPasswordController.clear();
  } else {
    Alert.error(res.message ?? 'Failed to update password.');
  }
}
```

</div>
</div>

---

## 🎨 Complete Design Artboard

<div className="artboard-container">
  <img src="/uberdriver/img/screens/security/Security_Flow.png" alt="Security Settings Artboard Flow" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: Security Settings, Password Change Form & Verification Alerts</span>
  </div>
</div>
