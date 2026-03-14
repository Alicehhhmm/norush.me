import { SettingsForm } from '@/components/theme-settings';

export default function SettingsPage() {
  return (
    <div className="bg-warm-bg flex">
      <main className="flex-1 overflow-auto">
        <SettingsForm />
      </main>
    </div>
  );
}
