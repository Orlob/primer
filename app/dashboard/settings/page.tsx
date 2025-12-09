import { User, Mail, CreditCard, Bell, Shield } from "lucide-react";

// Dummy-Daten für Settings
const dummyUser = {
  name: "John Doe",
  email: "john.doe@example.com",
  plan: "Team",
  planStatus: "active",
  nextBilling: "2024-02-15",
};

export const dynamic = "force-dynamic";

export default function SettingsPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-8 py-12">
        <div className="mb-12">
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account settings and preferences</p>
        </div>

        {/* Account Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center">
              <User size={20} className="text-[#3A5AFE]" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Account</h2>
          </div>

          <div className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Name</label>
              <input
                type="text"
                defaultValue={dummyUser.name}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5AFE] focus:border-transparent"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                defaultValue={dummyUser.email}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#3A5AFE] focus:border-transparent"
              />
            </div>
          </div>
        </section>

        {/* Subscription Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center">
              <CreditCard size={20} className="text-[#3A5AFE]" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Subscription</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div>
                <div className="font-semibold text-gray-900">{dummyUser.plan} Plan</div>
                <div className="text-sm text-gray-600 mt-1">
                  Starts at $149/month (billed annually)
                </div>
                <div className="text-sm text-gray-600 mt-1">
                  Next billing: {dummyUser.nextBilling}
                </div>
              </div>
              <span className="px-3 py-1 text-xs font-medium bg-green-50 text-green-700 rounded-full">
                {dummyUser.planStatus}
              </span>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm font-medium text-gray-900 mb-2">Seats</div>
              <div className="text-sm text-gray-600">
                {dummyUser.plan === "Team" ? "2 team members" : "1 team member"}
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Pricing is based on usage. Add more seats anytime.
              </div>
            </div>
            <button className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              Manage Subscription
            </button>
          </div>
        </section>

        {/* Notifications Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-8 mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center">
              <Bell size={20} className="text-[#3A5AFE]" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Notifications</h2>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Email Notifications</div>
                <div className="text-sm text-gray-600">Receive email updates about your meetings</div>
              </div>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Meeting Reminders</div>
                <div className="text-sm text-gray-600">Get reminded 15 minutes before meetings</div>
              </div>
              <input type="checkbox" className="toggle toggle-primary" defaultChecked />
            </div>
            <div className="flex items-center justify-between">
              <div>
                <div className="font-medium text-gray-900">Weekly Summary</div>
                <div className="text-sm text-gray-600">Receive a weekly summary of your meetings</div>
              </div>
              <input type="checkbox" className="toggle toggle-primary" />
            </div>
          </div>
        </section>

        {/* Security Section */}
        <section className="bg-white border border-gray-200 rounded-xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-[#E8EDFF] flex items-center justify-center">
              <Shield size={20} className="text-[#3A5AFE]" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Security</h2>
          </div>

          <div className="space-y-4">
            <button className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
              Change Password
            </button>
            <button className="w-full px-4 py-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-left">
              Two-Factor Authentication
            </button>
            <div className="pt-4 border-t border-gray-200">
              <button className="px-4 py-2 text-sm font-medium text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition-colors">
                Delete Account
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
