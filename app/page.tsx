// "use client";
// import React from "react";
// import { Button } from "@nextui-org/button";
// import { title } from "@/components/primitives";
// import { Image } from "@nextui-org/image";
// import Gallery from "@/components/gallery";
// import AboutUs from "@/components/about_us";
// import FormIngresso from "@/components/form";
// import { FaArrowDown } from "react-icons/fa6";
// import { motion, useAnimation } from "framer-motion";

// import { fontSans, oswald, fontMono, orbitron } from "@/config/fonts";
// import ButtonParty from "@/components/button_party";

// export default function Home() {
//     const controls = useAnimation();

//     React.useEffect(() => {
//         const handleScroll = () => {
//             const formSection = document.getElementById("formSection");
//             const formPosition = formSection?.getBoundingClientRect().top;
//             const screenPosition = window.innerHeight / 1.3;

//             if (formPosition && formPosition < screenPosition) {
//                 controls.start({ opacity: 1, y: 0 });
//             }
//         };

//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, [controls]);
//     return (
//         <>
//             <div className="absolute inset-0 z-0">
//                 <img
//                     src="/images/party/1.jpg" // Substitua pelo caminho da sua imagem de fundo
//                     alt="Background"
//                     className="w-full h-full object-cover blur-[5px]"
//                 />
//             </div>
//             <div className="absolute inset-0 -bottom-5 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>

//             <section className="relative container mx-auto flex flex-col items-center justify-center gap-4 py-8 md:py-10 ">
//                 <div className="relative z-10 inline-block max-w-lg text-center justify-center">
//                     <Image isBlurred src="/images/logo_rb.png" alt="SuperSabado" className="w-full" />

//                     {/* <Image isBlurred src="/images/logoR.png" alt="SuperSabado" className="w-full" /> */}
//                     {/* <Image src="./giphy.gif" alt="SuperSabado" /> */}

//                     <br />
//                     <h1 className={title() + " " + orbitron.className}>10 - August</h1>

//                     <div className={"mt-2" + " " + orbitron.className}>Do Techno ao Tech House, mantendo a essência verdadeira da House Music</div>
//                     <div className={"mt-4"}>LOCAL A SER DIVULGADO! </div>

//                     <ButtonParty />
//                 </div>

//                 <Gallery />

//                 <motion.div id="formSection" className="relative z-10 mt-10 w-full" initial={{ opacity: 0, y: 50 }} animate={controls} transition={{ duration: 0.5 }}>
//                     <FormIngresso />
//                 </motion.div>

//                 <div className="relative z-10 mt-10 w-full">
//                     <AboutUs />
//                 </div>
//             </section>
//         </>
//     );
// }

"use client";
import React from "react";
import { Button } from "@nextui-org/button";
import { title } from "@/components/primitives";
import { Image } from "@nextui-org/image";
import Gallery from "@/components/gallery";
import AboutUs from "@/components/about_us";
import FormIngresso from "@/components/form";
import { FaArrowDown } from "react-icons/fa6";
import { motion, useAnimation } from "framer-motion";

import { fontSans, oswald, fontMono, orbitron } from "@/config/fonts";
import ButtonParty from "@/components/button_party";

export default function Home() {
    const controls = useAnimation();

    React.useEffect(() => {
        const handleScroll = () => {
            const formSection = document.getElementById("formSection");
            const formPosition = formSection?.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;

            if (formPosition && formPosition < screenPosition) {
                controls.start({ opacity: 1, y: 0 });
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [controls]);

    return (
        <>
            <div className="absolute inset-0 z-0">
                <img
                    src="/images/party/1.jpg" // Substitua pelo caminho da sua imagem de fundo
                    alt="Background"
                    className="w-full h-full object-cover blur-[5px]"
                />
            </div>
            <div className="absolute inset-0 -bottom-5 bg-gradient-to-b from-black/90 via-black/50 to-black/90"></div>

            <section className="relative container mx-auto flex flex-col items-center justify-center gap-4 py-8 md:py-10">
                {/* Layout Desktop */}
                <div className="hidden md:block z-10 w-full">
                    <div className="flex items-end justify-between w-full">
                        <div className="w-5/12">
                            <Image isBlurred src="/images/logo_rb.png" alt="SuperSabado" className="w-full" />
                        </div>
                        <div className="w-6/12 text-right pb-16">
                            <h1 className={`${title()} ${orbitron.className}`}>10 - August</h1>
                        </div>
                    </div>
                    <div className="flex items-start justify-between mt-4">
                        <div className="w-4/12 flex flex-col pl-12">
                            <ButtonParty />
                            <div className="mt-3 text-center">LOCAL A SER DIVULGADO!</div>
                        </div>
                        <div className="w-5/12 text-right">
                            <div className={`${orbitron.className} mt-2 text-[20px] font-[600]`}>Do Techno ao Tech House, mantendo a essência verdadeira da House Music</div>
                        </div>
                    </div>
                </div>

                {/* Layout Mobile */}
                <div className="block md:hidden relative z-10 inline-block max-w-lg text-center justify-center">
                    <Image isBlurred src="/images/logo_rb.png" alt="SuperSabado" className="w-full" />
                    <br />
                    <h1 className={title() + " " + orbitron.className}>10 - August</h1>
                    <div className={"mt-2 " + orbitron.className}>Do Techno ao Tech House, mantendo a essência verdadeira da House Music</div>
                    <div className={"mt-4"}>LOCAL A SER DIVULGADO!</div>
                    <ButtonParty />
                </div>

                <Gallery />

                <motion.div id="formSection" className="relative z-10 mt-10 w-full" initial={{ opacity: 0, y: 50 }} animate={controls} transition={{ duration: 0.5 }}>
                    <FormIngresso />
                </motion.div>

                <div className="relative z-10 mt-10 w-full">
                    <AboutUs />
                </div>
            </section>
        </>
    );
}

