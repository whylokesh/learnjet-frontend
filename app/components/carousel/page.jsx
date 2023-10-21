"use client"
import { Carousel } from "@material-tailwind/react";

export function CarouselCustomNavigation() {
    return (
        <div className="bg-blue-gray-50/50 p-4 py-2 lg:p-4 md:p-3">
            <Carousel
                className="rounded-xl  w-fit h-3/4"
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
                    src="https://64.media.tumblr.com/a628671585da20ab6277e7fe036e16d7/tumblr_pfhsg9Opc91uibr8q_1280.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://64.media.tumblr.com/a628671585da20ab6277e7fe036e16d7/tumblr_pfhsg9Opc91uibr8q_1280.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src="https://64.media.tumblr.com/a628671585da20ab6277e7fe036e16d7/tumblr_pfhsg9Opc91uibr8q_1280.png"
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    );
}