---
title: Driver Documents & Compliance
sidebar_position: 9
---

# 📄 Driver Documents & Compliance

Commercial passenger transit requires strict adherence to regional licensing regulations. The **Documents Module** allows drivers to upload, preview, and update their **Driving License (Front & Back)** and regulatory compliance certificates.

---

## 📱 Mobile Screen Interface

<div style={{display:'flex', gap:'2rem', alignItems:'flex-start', flexWrap:'wrap', margin:'1.5rem 0'}}>
<div style={{flex:'0 0 auto', textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/documents/Documents.png" style={{borderRadius:'20px', width:'210px', display:'block'}} alt="Driver Documents Screen" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Documents Portal</div>
</div>
<div style={{flex:'1', minWidth:'280px'}}>

### Document Verification Requirements

| Document | Type | Requirement | Expiry Check |
|----------|------|-------------|--------------|
| **Driving License (Front)** | Photo / PDF | Clear photo showing driver face, class & license number | Mandatory |
| **Driving License (Back)** | Photo / PDF | Clear photo showing endorsements and expiry date | Mandatory |
| **Commercial Permit** | Certificate | Saint Vincent Public Transport Operator permit | Mandatory |
| **Inspection Certificate** | Certificate | Annual vehicle roadworthiness certificate | Annual renewal |

</div>
</div>

---

## 📸 Image Picker & Upload Architecture

The upload interface uses `ImagePicker` coupled with `ImageInput` widgets featuring interactive dashed bounding boxes and preview thumbnails:

```dart
ImageInput(
  onTap: controller.onLicenseFrontTap,
  label: 'Driving License (Front)',
  imageFile: controller.licenseFrontFile,
  value: controller.vehicle.drivingLicense?.front,
  require: true,
  child: Column(
    mainAxisAlignment: MainAxisAlignment.center,
    children: [
      const Icon(Icons.add_photo_alternate_outlined, size: 32, color: AppColors.primary),
      const SizedBox(height: 6),
      Text('Upload Front Image...', style: AppTextStyle.baseMedium),
    ],
  ),
)
```

### Verification States
1. **Unsubmitted:** Highlighted in grey dashed outline requesting driver upload.
2. **Pending Review:** Blue badge indicating documents are currently under verification by the safety team.
3. **Verified / Approved:** Green checkmark allowing full access to accept rides.
4. **Needs Revision:** Red alert explaining rejection reasons (e.g. blurry image or expired dates).

---

## 🎨 Complete Design Artboard

<div className="artboard-container">
  <img src="/uberdriver/img/screens/documents/Document_Flow.png" alt="Documents Flow Artboard" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: Driver License Front/Back Upload & Verification Review Portal</span>
  </div>
</div>
