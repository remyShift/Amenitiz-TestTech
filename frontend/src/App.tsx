import Catalog from '@/components/Catalog';
import { Toaster } from 'sonner';

export default function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <Catalog />
      <Toaster />
    </div>
  )
}
