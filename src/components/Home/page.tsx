import Image from 'next/image';
import React from 'react';
import imagesHeader from '../../images/pexels-nano-erdozain-120534369-29021737.jpg';

const HomeCoverSection = () => {
  return (
    <div className="inline-block w-full">
      <article className="relative mx-5 flex h-[60vh] flex-col items-start justify-end sm:mx-10 sm:h-[85vh]">
        <div className="to-dark/90 absolute inset-0 z-0 h-full rounded-3xl bg-gradient-to-b from-transparent from-0%" />
        <Image
          src={imagesHeader}
          placeholder="blur"
          alt={''}
          fill
          className="-z-10 size-full rounded-3xl object-cover object-center"
          sizes="100vw"
          priority
        />

        <div className="text-light z-0 flex w-full flex-col items-start justify-center p-6 sm:p-8 md:p-12 lg:w-3/4 lg:p-16">
          {/*<Tag link={`/categories/${slug(blog.tags[0])}`} name={blog.tags[0]} />*/}
          <div className="mt-6">
            <h1 className="text-lg font-bold capitalize sm:text-xl md:text-3xl lg:text-4xl">
              <span className="from-accent to-accent dark:from-accentDark/50 dark:to-accentDark/50 bg-gradient-to-r bg-[length:0px_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_6px]">
                Gouter a nos pizza
              </span>
            </h1>
          </div>
          <p className="font-in mt-4 hidden sm:inline-block md:text-lg lg:text-xl">
            {/*{blog.description}*/}
          </p>
        </div>
      </article>
    </div>
  );
};

export default HomeCoverSection;
