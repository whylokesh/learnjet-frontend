"use client"
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
    return (
            <Carousel
            className="rounded-xl m-1 w-fit h-3/4"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <img
                src="https://cdn.pixabay.com/photo/2015/10/29/14/39/web-1012469_1280.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                src="https://cdn.pixabay.com/photo/2015/10/29/14/39/web-1012469_1280.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                src="https://cdn.pixabay.com/photo/2015/10/29/14/39/web-1012469_1280.jpg"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
            </Carousel>
    );
}