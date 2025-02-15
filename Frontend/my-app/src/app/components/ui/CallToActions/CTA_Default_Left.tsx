import React, { ReactNode } from "react";
import { BackgroundGradient } from "../background-gradient";

interface CTASectionProps {
    Title?: string;
    subTitle?: string;
    display?: ReactNode;
    linkComponent?: ReactNode;
}

const CTASectionLeft: React.FC<CTASectionProps> = ({
    Title = "Default Title",
    subTitle = "Default Subtitle",
    display,
    linkComponent
}) => {
    return (
        <section className="py-8 sm:py-16">
            {/* Uncomment the BackgroundGradient wrapper if needed */}
            {/* <BackgroundGradient className="rounded-3xl p-4 sm:p-10 bg-white dark:bg-zinc-900"> */}
            <div className="flex flex-col-reverse lg:flex-row max-w-screen-xl px-4 mx-auto gap-8 lg:gap-8">
                <div className="flex-1 flex items-center justify-center ">
                    {display}
                </div>
                <div className="flex-1 flex flex-col justify-center items-center">
                    <h1 className="max-w-2xl mb-4 text-3xl font-extrabold tracking-tight leading-none sm:text-4xl md:text-5xl xl:text-6xl dark:text-white">
                        {Title}
                    </h1>
                    <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
                        {subTitle}
                    </p>
                    {linkComponent}
                </div>
            </div>
            {/* </BackgroundGradient> */}
        </section>
    );
};

export { CTASectionLeft };
