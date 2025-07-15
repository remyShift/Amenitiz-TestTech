import Catalog from '@/components/Catalog';
import Navbar from '@/components/Navbar';
import { CartProvider } from '@/context/CartContext';

export default function App() {
  return (
    <CartProvider>
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="flex items-center justify-center p-8">
          <Catalog />
        </div>
      </div>
    </CartProvider>
  )
}
