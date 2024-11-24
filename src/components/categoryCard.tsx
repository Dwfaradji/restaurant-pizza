import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import imagesHeader from '@/images/pexels-nano-erdozain-120534369-29021737.jpg';

interface CategoryCardProps {
  href: string;
  image: string;
  title: string;
  description: string;
  base: string;
}

const CategoryCard = ({
  href,
  title,
  description,
  base,
}: CategoryCardProps) => {
  console.log(href + base);

  return (
    <Link
      href={{
        pathname: href + base,
      }}
      className="group relative block overflow-hidden rounded-lg bg-white shadow-md transition-all hover:shadow-lg"
    >
      <Image
        src={imagesHeader}
        alt={title}
        width={400}
        height={300}
        className="h-64 w-full rounded-t-lg object-cover transition-transform group-hover:scale-105"
      />
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500">
          {title}
        </h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </Link>
  );
};

export default CategoryCard;
