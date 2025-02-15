"use client";
import { useRef, useEffect, useState } from "react";
import { motion, useTransform, useScroll } from "framer-motion";
import { ReviewCard } from "./ReviewCard";
import { cn } from "@/app/lib/utils";

export const ParallaxScroll = ({
    reviews,
    className,
}: {
    reviews: { title: string; description: string }[];
    className?: string;
}) => {
    const gridRef = useRef<any>(null);
    const [allReviews, setAllReviews] = useState(reviews);

    // Scroll the grid automatically
    useEffect(() => {
        const gridElement = gridRef.current;

        const scrollInterval = setInterval(() => {
            if (gridElement) {
                if (gridElement.scrollTop + gridElement.clientHeight >= gridElement.scrollHeight) {
                    gridElement.scrollTop = 0; // Reset scroll to top
                } else {
                    gridElement.scrollTop += 1; // Scroll by 1 pixel
                }
            }
        }, 10); // Adjust the interval for desired scroll speed

        return () => {
            clearInterval(scrollInterval);
        };
    }, []);

    // Infinite scrolling logic to load more reviews
    useEffect(() => {
        const handleScroll = () => {
            if (gridRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = gridRef.current;
                if (scrollTop + clientHeight >= scrollHeight - 5) {
                    setAllReviews((prevReviews) => [...prevReviews, ...reviews]);
                }
            }
        };

        const gridElement = gridRef.current;
        if (gridElement) {
            gridElement.addEventListener("scroll", handleScroll);
        }

        return () => {
            if (gridElement) {
                gridElement.removeEventListener("scroll", handleScroll);
            }
        };
    }, [reviews]);

    const { scrollYProgress } = useScroll({
        container: gridRef,
        offset: ["start start", "end start"],
    });

    const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

    const third = Math.ceil(allReviews.length / 3);
    const firstPart = allReviews.slice(0, third);
    const secondPart = allReviews.slice(third, 2 * third);
    const thirdPart = allReviews.slice(2 * third);

    return (
        <div
            className={cn("h-[40rem] items-start overflow-y-auto overflow-hidden w-full", className)}
            ref={gridRef}
        >
            <div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-start max-w-5xl mx-auto gap-10 py-40 px-10"
            >
                <div className="grid gap-10">
                    {firstPart.map((review, idx) => (
                        <motion.div
                            style={{ y: translateFirst }}
                            key={"grid-1" + idx}
                        >
                            <ReviewCard review={review} />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {secondPart.map((review, idx) => (
                        <motion.div style={{ y: translateSecond }} key={"grid-2" + idx}>
                            <ReviewCard review={review} />
                        </motion.div>
                    ))}
                </div>
                <div className="grid gap-10">
                    {thirdPart.map((review, idx) => (
                        <motion.div style={{ y: translateThird }} key={"grid-3" + idx}>
                            <ReviewCard review={review} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};
