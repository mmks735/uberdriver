---
title: Vehicle Profile & Information Update
sidebar_position: 8
---

# 🚗 Vehicle Profile & Information Update

Every driver operates an officially registered commercial minibus or taxi verified by platform administrators. The **Vehicle Module** allows drivers to review their vehicle specifications, view licensed route assignments, and submit vehicle information updates.

---

## 📱 Mobile Screen Interfaces

<div className="phone-mockup-row" style={{display:'flex', gap:'2rem', justifyContent:'center', flexWrap:'wrap', margin:'2rem 0'}}>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/vehicle/Vehicle.png" style={{borderRadius:'20px', width:'200px', display:'block'}} alt="Vehicle Details" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Vehicle Profile</div>
</div>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/vehicle/Vehicle_Update.png" style={{borderRadius:'20px', width:'200px', display:'block'}} alt="Vehicle Update" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Update Specs</div>
</div>

</div>

---

## 📋 Vehicle Specifications & Route Manifest

### 1. Vehicle Details Card
Displays official vehicle attributes matching the commercial transport license:

| Parameter | Example Value | Description |
|-----------|---------------|-------------|
| **Brand & Model** | Toyota HiAce Commuter | Manufacturer and vehicle model line |
| **License Plate** | `H-4821` | Commercial "H" plate designation |
| **Color** | White / Green Stripe | Visual identifier for passengers |
| **Model Year** | 2022 | Manufacture year |
| **Fuel Type** | Diesel | Standard commercial fuel type |
| **Total Seating Capacity** | 18 Seats | Legal passenger occupancy limit |
| **Current Status** | Active (Verified) | Verification state by transport authority |

### 2. Assigned Routes & Intermediate Stops
Shows the route currently authorized for this vehicle:
- **Primary Pickup Point:** e.g., *Kingstown Central Bus Terminal*
- **Primary Dropoff Point:** e.g., *Argyle International Airport*
- **Intermediate Stops (Short Drops):** Arnos Vale, Calliaqua, Ratho Mill, Diamond.
- **Estimated Travel Time & Distance:** Distance in kilometers and standard timetable duration.

---

## ✏️ Vehicle Information Update Screen

When vehicle specs change or the vehicle undergoes re-licensing, drivers navigate to `/vehicleUpdate`:
- Update plate number or registration tags.
- Update exterior color or seating capacity.
- Upload renewed commercial inspection certificates.
- Changes are submitted to admin for re-approval before going live.

---

## 🎨 Complete Design Artboard

<div className="artboard-container">
  <img src="/uberdriver/img/screens/vehicle/Vehicle_Flow.png" alt="Vehicle Management Flow Artboard" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: More Menu, Vehicle Specifications & Information Update Flow</span>
  </div>
</div>
