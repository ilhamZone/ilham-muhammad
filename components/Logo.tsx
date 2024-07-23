import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="w-14 h-14 relative">
      <Image src="/logo.png" alt="logo" fill className="rounded-xl" priority />
    </Link>
  );
};
export default Logo;
