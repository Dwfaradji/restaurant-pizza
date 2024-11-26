import Image from 'next/image';
import Link from 'next/link';
import profileImg from '../../images/pexels-nano-erdozain-120534369-29039071.jpg';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center text-dark text-light dark:text-dark"
    >
      <div className="mr-2 w-12 overflow-hidden rounded-full border border-solid border-dark md:mr-4 md:w-16">
        <Image
          src={profileImg}
          alt="CodeBucks logo"
          className="h-auto w-full rounded-full"
          sizes="20vw"
          priority
        />
      </div>
      <span className="hidden text-lg font-bold sm:flex md:text-xl">
        Étoile Normande
      </span>
    </Link>
  );
};

export default Logo;
