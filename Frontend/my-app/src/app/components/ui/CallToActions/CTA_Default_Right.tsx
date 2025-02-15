import React, { ReactNode } from "react";


interface CTASectionProps {
  Title?: string;
  subTitle?: string;
  display?: ReactNode;
  linkComponent?: ReactNode; // Renamed to avoid conflict with import `Link`
}

const CTASection: React.FC<CTASectionProps> = ({
  Title, 
  subTitle,
  display ,
  linkComponent
}) => {
  return (
    <section className="  px-8">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
            {Title}
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            {subTitle}
          </p>
          {linkComponent}
        </div>
        <div className="lg:col-span-5">{display}</div>
      </div>
    </section>
  );
};

export { CTASection }
