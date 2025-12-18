import { SettingsForm } from '@/components/theme-settings'

export default function SettingsPage() {
    return (
        <div className='flex bg-warm-bg'>
            <main className='flex-1 overflow-auto'>
                <SettingsForm />
            </main>
        </div>
    )
}
