import Link from 'next/link';
import Image from 'next/image';

const Logo = () => (
  <Link href="/">
    <a className="flex items-center space-x-2">
      <Image src="/logo.png" alt="Logo" height="60" width="133" />
    </a>
  </Link>
);

export default Logo;
