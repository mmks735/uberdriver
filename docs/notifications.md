---
title: Notifications Center
sidebar_position: 11
---

# 🔔 Notifications Center

Drivers receive real-time alerts regarding trip bookings, scheduled countdown reminders, refund processed notifications, and administrative updates through the **Notification Center**.

---

## 📱 Notification System Architecture

The notification engine utilizes a hybrid push and WebSocket delivery model:
1. **Foreground Alerts:** Received via WebSocket (`SocketService`) and displayed as custom in-app snackbars.
2. **Background / Terminated State:** Delivered via **Firebase Cloud Messaging (FCM)** using a high-priority Android notification channel (`vincydriver`).
3. **In-App Notification Center:** Stores persistent notifications with read/unread statuses.

---

## 📋 Notification Types & Event Triggers

| Category | Trigger Event | Priority | Action On Tap |
|----------|---------------|:--------:|---------------|
| **Passenger Booked** | Commuter purchases or reserves a seat on active route | High | Opens Home Screen manifest |
| **Departure Countdown** | Scheduled bus countdown reaches 5-minute warning | High | Triggers departure horn alert |
| **Ticket Refund** | Admin or automated refund processed | Normal | Navigates to Earnings Statement |
| **Payout Dispatched** | Bank transfer or mobile wallet withdrawal approved | Normal | Opens Earnings Payout log |
| **Document Expiring** | Commercial license or insurance renewal due in 14 days | Urgent | Opens Documents Portal |

---

## 💻 Controller Implementation (`NotificationController`)

```dart
class NotificationController extends GetxController {
  bool isLoading = false;
  List<NotificationItem> notifications = [];

  Future<void> fetchNotifications() async {
    isLoading = true;
    update();

    final res = await ApiRepo.get(ApiEndPoints.notification);
    isLoading = false;
    if (res.isSuccess) {
      notifications = (res.data as List)
          .map((e) => NotificationItem.fromJson(e))
          .toList();
      update();
    }
  }

  Future<void> markAllAsRead() async {
    final res = await ApiRepo.post(ApiEndPoints.notificationReadAll);
    if (res.isSuccess) {
      for (var item in notifications) {
        item.isRead = true;
      }
      update();
      // Update global unread badge on home bar
      Get.find<HomeController>().fetchNotificationCount();
    }
  }
}
```
