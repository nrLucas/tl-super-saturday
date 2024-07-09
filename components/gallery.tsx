"use client";
import { Image } from "@nextui-org/image";
import Masonry from "react-masonry-css";

export default function Gallery() {
    const breakpointColumnsObj = {
        default: 3,
        1100: 2,
        700: 1,
    };

    const galleryItems = [
        { type: "image", src: "/images/party/1.jpg" },
        { type: "image", src: "/images/party/2.jpg" },
        { type: "image", src: "/images/party/6.jpg" },
        { type: "image", src: "/images/party/4.jpg" },
        // { type: "image", src: "/images/party/5.jpg" },
        // { type: "image", src: "/images/party/3.jpg" },
        { type: "video", src: "/images/party/7.mp4" },
        { type: "video", src: "/images/party/8.mp4" },
    ];

    return (
        <div className="mt-10">
            {/* <h2 className="text-4xl text-center mb-8">Galeria</h2> */}
            <Masonry breakpointCols={breakpointColumnsObj} className="flex w-full justify-center">
                {galleryItems.map((item, index) => (
                    <div key={index} className="p-2 flex justify-center">
                        {item.type === "image" ? (
                            <Image src={item.src} alt={`Gallery item ${index + 1}`} className="w-full h-auto" />
                        ) : (
                            <video controls className="w-full h-auto">
                                <source src={item.src} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                    </div>
                ))}
            </Masonry>
        </div>
    );
}
