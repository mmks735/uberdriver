---
title: Splash & Onboarding Screens
sidebar_position: 2
---

# 🚀 Splash & Onboarding Screens

The VINCY DRIVER app welcomes drivers with a fast-loading branded **Splash Screen** followed by a **3-step introductory Onboarding Carousel** highlighting essential driver operational features.

---

## 🌟 Splash Screen

When the driver launches the app, the **Splash Screen** initializes background services (Firebase Messaging, Notification Channels, and the `LocationService` singleton), verifies the cached auth token in `FlutterSecureStorage`, and determines whether to redirect to the **Onboarding Carousel**, the **Login Screen**, or directly to the **Home Navigator**.

<div style={{display:'flex', gap:'2rem', alignItems:'flex-start', flexWrap:'wrap', margin:'1.5rem 0'}}>
<div style={{flex:'0 0 auto', textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'32px', padding:'10px', display:'inline-block', boxShadow:'0 16px 48px rgba(0,0,0,0.25)'}}>
    <img src="/uberdriver/img/screens/splash/Splash.png" style={{borderRadius:'24px', width:'210px', display:'block'}} alt="Splash Screen" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600', display:'inline-block'}}>Splash Screen</div>
</div>
<div style={{flex:'1', minWidth:'280px'}}>

### UI Elements & Lifecycle

| Element | Details |
|---------|---------|
| **Brand Mark** | High-resolution VINCY DRIVER logo centered on clean white canvas |
| **Animation** | Smooth fade & scale transition |
| **Duration** | Minimum 1500ms delay to allow background token resolution |
| **Navigation Logic** | • Valid token → Redirect to `/homeNavigator`<br/>• First-time user → Redirect to `/onboarding`<br/>• Logged out user → Redirect to `/login` |

### Code Implementation (`SplashScreen`)
```dart
class _SplashScreenState extends State<SplashScreen> {
  @override
  void initState() {
    super.initState();
    _checkAuthAndNavigate();
  }

  Future<void> _checkAuthAndNavigate() async {
    await Future.delayed(const Duration(milliseconds: 1500));
    final token = await LocalStorage.instance.getToken();
    if (token != null && token.isNotEmpty) {
      Get.offAllNamed(AppRoutes.homeNavigator);
    } else {
      Get.offAllNamed(AppRoutes.onboarding);
    }
  }
}
```

</div>
</div>

---

## 📱 3-Step Driver Onboarding Carousel

The onboarding flow introduces the driver to key platform capabilities through three interactive slides with dot indicators, **Skip** button, and primary action buttons.

<div className="phone-mockup-row" style={{display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap', margin:'2rem 0'}}>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/onboarding/Onboarding 1.png" style={{borderRadius:'20px', width:'190px', display:'block'}} alt="Onboarding Slide 1" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Slide 1: Smart Transit</div>
</div>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/onboarding/Onboarding 2.png" style={{borderRadius:'20px', width:'190px', display:'block'}} alt="Onboarding Slide 2" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Slide 2: Live Tracking</div>
</div>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/onboarding/Onboarding 3.png" style={{borderRadius:'20px', width:'190px', display:'block'}} alt="Onboarding Slide 3" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Slide 3: Payouts & Earnings</div>
</div>

</div>

---

### Detailed Slide Breakdown

### Slide 1 — Drive with Ease & Flexibility
- **Focus:** Digital minibus management and scheduling.
- **Illustration:** Passenger transit and modern minibus graphic.
- **Key Message:** Start your daily routes with automated bus stop scheduling and digital passenger lists.
- **Call-to-Action:** **Next** button or **Skip** to bypass directly to login.

### Slide 2 — Fast Ticket Verification & Live Tracking
- **Focus:** Hardware QR scanning and real-time passenger pickup.
- **Illustration:** Mobile QR scanner interface and route GPS map.
- **Key Message:** Scan passenger boarding tickets in milliseconds. Provide waiting commuters with accurate live GPS location.

### Slide 3 — Transparent Earnings & Fast Payouts
- **Focus:** Revenue metrics, trip statistics, and instant payouts.
- **Illustration:** Financial wallet graphics and security shield.
- **Key Message:** Track daily trip earnings in XCD. Request bank withdrawals and wallet transfers anytime with zero hassle.
- **Final CTA:** **Get Started** button leading to Driver Login or Registration.

---

## 🎨 Complete Design Artboard

Below is the composite Figma design board showing the full onboarding progression:

<div className="artboard-container">
  <img src="/uberdriver/img/screens/splash/Splash_Flow.png" alt="Splash & Onboarding Flow Artboard" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: Splash & Onboarding Visual Architecture</span>
  </div>
</div>
