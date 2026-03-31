import { SettingsForm } from '@/components/theme-settings';

const SettingsPage = () => {
  return (
    <div className="bg-warm-bg flex">
      <main className="flex-1 overflow-auto">
        <SettingsForm />
      </main>
    </div>
  );
};

export default SettingsPage;
