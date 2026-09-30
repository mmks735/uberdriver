---
title: QR Scanner & Boarding Verification
sidebar_position: 5
---

# 📷 QR Scanner & Boarding Verification

Boarding speed is critical for minibus transit operations. The **VINCY DRIVER** app features an elevated center Floating Action Button that invokes the **Scanner Terminal Modal** (`ScannerBottomSheet`) with dual-tab support for full-journey tickets and intermediate **Short Drops**.

---

## 📱 Scanner Modal Interface

<div style={{display:'flex', gap:'2rem', alignItems:'flex-start', flexWrap:'wrap', margin:'1.5rem 0'}}>
<div style={{flex:'0 0 auto', textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/scanner/Scanner_BottomSheet.png" style={{borderRadius:'20px', width:'210px', display:'block'}} alt="QR Scanner Interface" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Scanner Viewfinder</div>
</div>
<div style={{flex:'1', minWidth:'280px'}}>

### Scanner Modal Capabilities

| Feature | Description |
|---------|-------------|
| **Dual Scanning Modes** | Segmented switcher: **Scan Ticket** (full route) or **Short Drop** (sub-route) |
| **Camera Viewfinder** | Hardware-accelerated scanning with rounded target cutout and torch control |
| **Manual Barcode Input** | Text field fallback allowing drivers to type barcode IDs directly if a screen is cracked |
| **Haptic & Audio Feedback** | Device vibrates and chimes upon valid barcode recognition |
| **Auto-Submit Prevention** | Debounce logic prevents double-scanning the same ticket |

</div>
</div>

---

## 🎟️ Full Ticket vs Short Drop Modes

### 1. Mode A: Scan Standard Ticket
- **Use Case:** Passenger booked an end-to-end ticket through the VINCYUBER passenger app.
- **Workflow:**
  1. Driver aims camera at passenger's digital ticket QR code.
  2. Scanner extracts ticket identifier (`code`).
  3. App calls `ApiEndPoints.scanRideTicket`.
  4. Backend marks ticket status as **In Transit**, records driver ID, and updates bus passenger manifest.

### 2. Mode B: Short Drop Validation
- **Use Case:** Passenger hops off before the final destination at an intermediate stop (e.g., Kingstown to Calliaqua on an Argyle route).
- **Workflow:**
  1. Driver selects the specific intermediate drop-off stop.
  2. System recalculates discounted short-drop fare.
  3. Scanner verifies boarding against `ApiEndPoints.scanRideTicketShortDrop`.
  4. Credit is deducted accordingly from the passenger's digital wallet.

---

## 💻 Scanner Implementation (`NavigatorController`)

```dart
void onTicketScanner(BarcodeCapture capture) {
  if (!isScanning) return;
  for (final barcode in capture.barcodes) {
    final rawText = barcode.rawValue;
    if (rawText != null && rawText.isNotEmpty) {
      // Extract ticket code query parameter
      final parts = rawText.split('=');
      final code = parts.isNotEmpty ? parts.last : rawText;

      isScanning = false;
      Get.back(); // Dismiss camera sheet
      update();

      verifyScannedTicket(code);
      break;
    }
  }
}

Future<void> verifyScannedTicket(String code) async {
  isLoading = true;
  update();

  final res = await ApiRepo.post(
    ApiEndPoints.scanRideTicket,
    data: {
      'barcode': code,
      'vehicle_id': vehicle?.sId,
    },
  );

  isLoading = false;
  update();

  if (res.isSuccess) {
    Alert.success('Ticket Verified! Passenger boarded successfully.');
  } else {
    Alert.error(res.message ?? 'Invalid or expired ticket.');
  }
}
```
