---
title: Home Dashboard & Departures
sidebar_position: 4
---

# 🏠 Home Dashboard & Trip Operations

The **Home Screen** is the central operational command cockpit for the driver. From this dashboard, drivers activate their duty status, broadcast departure countdowns, notify waiting commuters, track passenger counts, and manage active minibus routes.

---

## 📱 Mobile Screen Interfaces

<div className="phone-mockup-row" style={{display:'flex', gap:'2rem', justifyContent:'center', flexWrap:'wrap', margin:'2rem 0'}}>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/home/Home.png" style={{borderRadius:'20px', width:'200px', display:'block'}} alt="Driver Home Dashboard" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Home Dashboard</div>
</div>

<div className="phone-mockup" style={{textAlign:'center'}}>
  <div style={{background:'#1a1a1a', borderRadius:'28px', padding:'8px', display:'inline-block', boxShadow:'0 12px 36px rgba(0,0,0,0.2)'}}>
    <img src="/uberdriver/img/screens/home/Home_Scan_QR.png" style={{borderRadius:'20px', width:'200px', display:'block'}} alt="Scan QR Prompt" />
  </div>
  <div style={{marginTop:'0.5rem', background:'#E8F5E9', color:'#23964D', padding:'4px 12px', borderRadius:'20px', fontSize:'0.8rem', fontWeight:'600'}}>Boarding QR Terminal</div>
</div>

</div>

---

## 🎛️ Dashboard Component Breakdown

### 1. Header & Duty Status Switch
- **Driver Profile Header:** Displays driver name, profile avatar, and unread notification bell badge.
- **Online / Offline Toggle:** Updates vehicle dispatch status via `ApiEndPoints.updateActiveStatus`. When toggled to **Online**, the vehicle becomes visible on the passenger map and is eligible to receive ride requests.

### 2. Scheduled Departure Countdown Timer
Drivers can schedule their departure from a specific terminal or bus stop using the **Countdown Timer Sheet**:
- **Duration Options:** Quick selection chips for **5, 10, 15, 20, 25, 30, 45, or 60 Minutes**.
- **Bus Stop & Route Selection:** Drops down grouped bus stops associated with the driver's licensed route.
- **Live Passenger Broadcast:** Once confirmed, the system broadcasts the countdown via WebSockets (`SocketService`) to all passenger devices monitoring that route.

### 3. Send Passenger Departure Reminder
When ready to pull out of a terminal, the driver can tap **"Send Reminder"** (`ReminderBottomSheet`):
- Sends high-priority push notifications to passengers who have selected or reserved seats for this route.
- Pre-filled options (e.g., *"Minibus leaving in 5 minutes from Leeward Terminal"*).

### 4. Seating Availability Quick Adjuster
- Drivers can increment (`+`) or decrement (`-`) available seating counters on the fly to reflect walk-on cash passengers not booked through the app.

---

## 💻 Controller Implementation (`HomeController`)

```dart
class HomeController extends GetxController {
  bool isCountdownActive = false;
  String? selectedTime;
  GroupedBusStop? selectedBusStop;
  BusStopRoute? selectedRoute;

  final List<Map<String, dynamic>> timeOptions = [
    {'label': '5 Mins', 'value': '5'},
    {'label': '10 Mins', 'value': '10'},
    {'label': '15 Mins', 'value': '15'},
    {'label': '20 Mins', 'value': '20'},
    {'label': '30 Mins', 'value': '30'},
    {'label': '45 Mins', 'value': '45'},
    {'label': '60 Mins', 'value': '60'},
  ];

  Future<void> submitCountdownTimer() async {
    if (selectedBusStop == null || selectedTime == null) {
      Alert.error('Please select both a bus stop and departure time.');
      return;
    }

    isSubmittingTimer = true;
    update();

    final res = await ApiRepo.post(
      ApiEndPoints.vehicleCountdown,
      data: {
        'bus_stop_id': selectedBusStop?.sId,
        'route_id': selectedRoute?.sId,
        'minutes': int.tryParse(selectedTime!) ?? 10,
      },
    );

    isSubmittingTimer = false;
    if (res.isSuccess) {
      isCountdownActive = true;
      Get.back();
      Alert.success('Departure countdown broadcasted to passengers!');
      update();
    }
  }
}
```

---

## 🎨 Complete Design Artboard

<div className="artboard-container">
  <img src="/uberdriver/img/screens/home/Home_Notification_Flow.png" alt="Home Screen & Notifications Artboard" />
  <div className="artboard-caption">
    <span>📐 Figma Reference: Home Dashboard, Countdowns, Seat Adjustment & Notification System</span>
  </div>
</div>
