import Link from "next/link";
import Image from "next/image";
import React from "react";
import imagesHeader from "@/images/pexels-nano-erdozain-120534369-29021737.jpg";

interface CategoryCardProps {
    href: string;
    image: string;
    title: string;
    description: string;
    base: string;
}

const CategoryCard = ({ href, image, title, description, base }: CategoryCardProps) => {
    return (
        <Link
            href={{
                pathname: href,
                query: { base }, // Passe la base dans la query
            }}
            className="group block relative overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-all bg-white"
        >
            <Image
                src={imagesHeader}

                alt={title}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform rounded-t-lg"
            />
            <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 group-hover:text-orange-500">
                    {title}
                </h3>
                <p className="text-gray-600 mt-2">{description}</p>
            </div>
        </Link>
    );
};

export default CategoryCard;

