---
title: Driver Profile & More Menu Hub
sidebar_position: 13
---

# 👤 Driver Profile & More Menu Hub

The **More Menu** (Tab 4) acts as the operational hub linking to secondary services, while the **Profile Settings** screen enables drivers to view and update their personal identity, contact information, and public profile photo.

---

## 📱 Mobile Screen Interface

<div style={{display:'flex', gap:'2rem', alignItems:'flex-start', flexWrap:'wrap', margin:'1.5rem 0'}}>
<div style={{flex:'0 0 auto', textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/more/More.png" style={{borderRadius:'20px', width:'210px', display:'block'}} alt="More Menu Screen" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>More Services Hub</div>
</div>
<div style={{flex:'1', minWidth:'280px'}}>

### More Hub Menu Categorization

#### 🚐 My Services
- **Vehicle:** Inspection, routes & specifications (`/vehicle`)
- **Documents:** Commercial license uploads (`/documents`)
- **Tracking:** Live GPS route broadcasting (`/busTracking`)
- **Contact Us:** Hotline, dispatch & email support (`/contactUs`)

#### ⚙️ Account Management
- **Profile Settings:** Name, avatar & phone (`/profile`)
- **Security Settings:** Password updates (`/securitySettings`)
- **About VINCY DRIVER:** Platform info (`/aboutUs`)
- **Terms & Condition:** Legal operational agreement (`/termsAndCondition`)
- **Privacy Policy:** Passenger & driver data handling (`/privacyPolicy`)
- **Logout:** Flushes credentials and resets device tokens

</div>
</div>

---

## ✏️ Profile Information Management

Drivers update their profile particulars via `ProfileScreen`:
- **Profile Photo:** Uploaded via camera snapshot or gallery selector. Compressed before uploading via multipart form data (`updateProfileImage`).
- **Legal Full Name:** Synchronized with platform registration records.
- **Phone Number:** Primary contact used by dispatch and SMS OTP verifications.

```dart
Future<void> updateProfile({
  required String name,
  required String phone,
  File? avatarFile,
}) async {
  final formData = FormData.fromMap({
    'name': name,
    'phone': phone,
    if (avatarFile != null)
      'image': await MultipartFile.fromFile(
        avatarFile.path,
        contentType: AppConstants.jpegImageMediaType,
      ),
  });

  final res = await ApiRepo.post(ApiEndPoints.updateProfile, data: formData);
  if (res.isSuccess) {
    await ProfileService.instance.fetchProfile();
    Alert.success('Profile updated successfully!');
  }
}
```

---

## 🎨 Complete Design Artboard

<div className="artboard-container">
  <img src="/uberdriver/img/screens/profile/Profile_Flow.png" alt="Profile Settings Artboard" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: Driver Profile, Personal Details & Avatar Upload Flow</span>
  </div>
</div>
