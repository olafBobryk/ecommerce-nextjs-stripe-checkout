import Link from 'next/link';
import { useShoppingCart } from '@/hooks/use-shopping-cart';
import { formatCurrency } from '@/lib/utils';
import { Logo } from '@/components/index';
import { ShoppingCartIcon } from '@heroicons/react/solid';

const Header = () => {
  const { totalPrice, cartCount } = useShoppingCart();

  return (
    <header className="top-0">
      <div className="container xl:max-w-screen-xl mx-auto p-6 flex justify-between">
        <Logo />
        <Link href="/cart">
          <a className="flex items-center space-x-1 text-gray-700 hover:text-gray-900">
            <div className="relative">
              <svg viewBox="0 0 120 120"  className='flex-shrink-0 w-7 h-7' xmlns="http://www.w3.org/2000/svg">
                <svg viewBox="0 0 120 120" x="0">
                  <ShoppingCartIcon className='flex-shrink-0'/>
                </svg>
              {/* <circle cx="100" cy="20" r="15" fill="white"></circle> */}
              <text text-anchor="middle" x="120" y="35" fill="white" fontSize={50}>{cartCount}</text>
              {/* <span className="text-sm text-gray-500 top-right absolute">({cartCount})</span> */}
              </svg>
            </div>
            {/* <p className="text-lg">
              {formatCurrency(totalPrice)}{' '}
              <span className="text-sm text-gray-500">({cartCount})</span>
            </p> */}
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
