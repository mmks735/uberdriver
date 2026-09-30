---
title: Refund Management & Scanner
sidebar_position: 6
---

# 🔄 Refund Management & Scanner

Minibus transit passengers occasionally need to cancel or refund unused tickets directly with the driver before departure. The **VINCY DRIVER** app provides a dedicated **Refund Terminal** (Tab 2) equipped with barcode lookup, instant camera scanning, safety warning checks, and real-time wallet credit reversals.

---

## 📱 Refund Screen Progression

<div className="phone-mockup-row" style={{display:'flex', gap:'1.5rem', justifyContent:'center', flexWrap:'wrap', margin:'2rem 0'}}>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/refund/Refund.png" style={{borderRadius:'20px', width:'180px', display:'block'}} alt="Refund Search" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>1. Refund Home</div>
</div>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/refund/Refund_Scan.png" style={{borderRadius:'20px', width:'180px', display:'block'}} alt="Scan Refund" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>2. Scan Ticket QR</div>
</div>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/refund/Refund_Scan_Warning.png" style={{borderRadius:'20px', width:'180px', display:'block'}} alt="Refund Verification" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>3. Warning Modal</div>
</div>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/refund/Refund_Scan_successful.png" style={{borderRadius:'20px', width:'180px', display:'block'}} alt="Refund Success" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>4. Refund Success</div>
</div>

</div>

---

## 🔍 Refund Step-by-Step Workflow

<div className="step-flow">

<div className="step-item">
  <div className="step-number">1</div>
  <div className="step-content">
    <h4>Input or Scan Ticket Barcode</h4>
    <p>The driver can either manually enter the ticket code in the search field or tap the camera icon to scan the passenger's physical or digital QR code directly.</p>
  </div>
</div>

<div className="step-item">
  <div className="step-number">2</div>
  <div className="step-content">
    <h4>Ticket Inspection & Refund Query</h4>
    <p>The app contacts the server to verify whether the ticket is eligible for refund (i.e. status is "In Progress" or "Booked" and vehicle has not yet completed the trip).</p>
  </div>
</div>

<div className="step-item">
  <div className="step-number">3</div>
  <div className="step-content">
    <h4>Confirmation & Refund Warning Dialog</h4>
    <p>A safety modal appears displaying the passenger's name, ticket route, original fare in XCD, and cancellation deduction policy. Driver confirms action with "Yes, Refund".</p>
  </div>
</div>

<div className="step-item">
  <div className="step-number">4</div>
  <div className="step-content">
    <h4>Instant Credit Reversal</h4>
    <p>The backend automatically credits the passenger's VINCYUBER digital wallet, marks the ticket as "Refunded", decrements the driver's passenger count, and shows a green success dialog.</p>
  </div>
</div>

</div>

---

## 💻 Controller Implementation (`RefundController`)

```dart
class RefundController extends GetxController {
  final ticketBarcodeController = TextEditingController();
  bool isLoading = false;

  Future<void> processRefund(String barcode) async {
    isLoading = true;
    update();

    final res = await ApiRepo.post(
      ApiEndPoints.rideTicketScanRefund,
      data: {
        'barcode': barcode,
      },
    );

    isLoading = false;
    update();

    if (res.isSuccess) {
      // Refresh driver financial metrics
      await EarningsService.instance.fetchEarnings();
      
      // Show success modal
      Get.dialog(
        RefundSuccessDialog(
          amount: res.data['refund_amount'],
          ticketId: barcode,
        ),
      );
    } else {
      Alert.error(res.message ?? 'Refund request failed.');
    }
  }
}
```

---

## 🎨 Complete Design Artboard

<div className="artboard-container">
  <img src="/uberdriver/img/screens/refund/Refund_Flow.png" alt="Refund Artboard Flow" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: Refund Search, Camera Scanner, Confirmation Modal & Success Result</span>
  </div>
</div>
