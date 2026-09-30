---
title: Earnings Dashboard & Payouts
sidebar_position: 7
---

# 💰 Earnings Dashboard & Payouts

The **Earnings Screen** (Tab 3) provides commercial drivers with real-time financial transparency. Drivers can track daily and cumulative ride revenues in Eastern Caribbean Dollars (XCD), monitor completed minibus trips, request withdrawals, and browse paginated transaction statements.

---

## 📱 Mobile Screen Interfaces

<div className="phone-mockup-row" style={{display:'flex', gap:'2rem', justifyContent:'center', flexWrap:'wrap', margin:'2rem 0'}}>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/earnings/Earning.png" style={{borderRadius:'20px', width:'195px', display:'block'}} alt="Earnings Dashboard" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Earnings Overview</div>
</div>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/earnings/Transection_List.png" style={{borderRadius:'20px', width:'195px', display:'block'}} alt="Transaction History" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Transaction Statements</div>
</div>

</div>

---

## 📊 Financial Metrics Breakdown

<div className="screen-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fill, minmax(240px,1fr))', gap:'1rem', margin:'1.5rem 0'}}>

<div className="screen-card" style={{background:'white', borderRadius:'12px', padding:'1.25rem', boxShadow:'0 2px 12px rgba(0,0,0,0.08)', borderLeft:'4px solid #23964D'}}>
  <h4 style={{color:'#666', margin:'0 0 0.25rem', fontSize:'0.85rem'}}>TOTAL EARNINGS</h4>
  <h2 style={{color:'#1A0E2A', margin:'0', fontSize:'1.6rem'}}>$ 12,450.00</h2>
  <span style={{fontSize:'0.75rem', color:'#23964D', fontWeight:'600'}}>Lifetime Gross Platform Revenue</span>
</div>

<div className="screen-card" style={{background:'white', borderRadius:'12px', padding:'1.25rem', boxShadow:'0 2px 12px rgba(0,0,0,0.08)', borderLeft:'4px solid #23964D'}}>
  <h4 style={{color:'#666', margin:'0 0 0.25rem', fontSize:'0.85rem'}}>WALLET BALANCE</h4>
  <h2 style={{color:'#23964D', margin:'0', fontSize:'1.6rem'}}>$ 1,840.50</h2>
  <span style={{fontSize:'0.75rem', color:'#666'}}>Available for Instant Payout</span>
</div>

<div className="screen-card" style={{background:'white', borderRadius:'12px', padding:'1.25rem', boxShadow:'0 2px 12px rgba(0,0,0,0.08)', borderLeft:'4px solid #23964D'}}>
  <h4 style={{color:'#666', margin:'0 0 0.25rem', fontSize:'0.85rem'}}>COMPLETED TRIPS</h4>
  <h2 style={{color:'#1A0E2A', margin:'0', fontSize:'1.6rem'}}>482</h2>
  <span style={{fontSize:'0.75rem', color:'#666'}}>Total Completed Minibus Routes</span>
</div>

<div className="screen-card" style={{background:'white', borderRadius:'12px', padding:'1.25rem', boxShadow:'0 2px 12px rgba(0,0,0,0.08)', borderLeft:'4px solid #23964D'}}>
  <h4 style={{color:'#666', margin:'0 0 0.25rem', fontSize:'0.85rem'}}>PENDING PAYOUT</h4>
  <h2 style={{color:'#EAB308', margin:'0', fontSize:'1.6rem'}}>$ 450.00</h2>
  <span style={{fontSize:'0.75rem', color:'#666'}}>Processing by Admin/Bank</span>
</div>

</div>

---

## 🏦 Withdrawal Request Modal

Drivers initiate payouts directly to their bank account or mobile wallet via a bottom sheet form:
1. **Amount Input:** Enforces minimum ($50 XCD) and maximum wallet balance limits.
2. **Gateway Selector:** Dynamically populated from `ApiEndPoints.getPaymentGateways` (e.g., Bank of St. Vincent and the Grenadines, Republic Bank, Mobile Money).
3. **Account Details:** Routing number, account name, and phone/account number.
4. **Instant Submission:** Calls `ApiEndPoints.withdrawRequest`, instantly placing the request into the operator audit queue.

---

## 📜 Paginated Transaction Statements

The transaction list uses **`infinite_scroll_pagination`** wrapped inside a custom `Paginate<TransactionModel>` helper for smooth, infinite scrolling:

```dart
late final transactionList = Paginate<TransactionModel>(
  url: ApiEndPoints.transactionList,
  fromJson: (json) => TransactionModel.fromJson(json),
  parentController: this,
);
```

### Statement Record Attributes
- **Transaction ID & Date:** Formatted timestamp (e.g., `28 Sep, 2026 02:45 PM`).
- **Description:** Route trip earnings or withdrawal reference.
- **Credit / Debit Flag:** Green positive amount (`+$45.00`) or red debit (`-$500.00`).
- **Status Indicator:** `Completed` (Green), `Pending` (Amber), or `Failed` (Red).

---

## 🎨 Complete Design Artboard

<div className="artboard-container">
  <img src="/uberdriver/img/screens/earnings/Earning_Flow.png" alt="Earnings & Transactions Artboard" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: Earnings Dashboard, Withdraw Modal & Transaction Statements</span>
  </div>
</div>
