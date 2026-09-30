import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'doc',
      id: 'index',
      label: '🚐 Driver App Overview',
    },
    {
      type: 'category',
      label: '🚀 Getting Started',
      collapsed: false,
      items: [
        { type: 'doc', id: 'onboarding', label: '📱 Splash & Onboarding' },
        { type: 'doc', id: 'auth', label: '🔐 Login, Register & Setup' },
      ],
    },
    {
      type: 'category',
      label: '📱 Core Operations',
      collapsed: false,
      items: [
        { type: 'doc', id: 'home', label: '🏠 Home & Departures' },
        { type: 'doc', id: 'qr-scanner', label: '📷 QR Scanner & Boarding' },
        { type: 'doc', id: 'refund', label: '🔄 Refund Management' },
        { type: 'doc', id: 'earnings', label: '💰 Earnings & Payouts' },
      ],
    },
    {
      type: 'category',
      label: '🚐 Vehicle & Services',
      collapsed: false,
      items: [
        { type: 'doc', id: 'vehicle', label: '🚗 Vehicle Profile & Update' },
        { type: 'doc', id: 'documents', label: '📄 Driver Documents' },
        { type: 'doc', id: 'tracking', label: '📍 Live GPS Tracking' },
      ],
    },
    {
      type: 'category',
      label: '⚙️ Settings & Support',
      collapsed: false,
      items: [
        { type: 'doc', id: 'notifications', label: '🔔 Notifications' },
        { type: 'doc', id: 'security-settings', label: '🔒 Security Settings' },
        { type: 'doc', id: 'profile', label: '👤 Driver Profile' },
        { type: 'doc', id: 'legal-support', label: '📜 Legal, Policies & Support' },
      ],
    },
  ],
};

export default sidebars;
