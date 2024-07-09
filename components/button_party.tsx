"use client";
import { Button } from "@nextui-org/button";
import { FaArrowDown } from "react-icons/fa6";

export default function ButtonParty() {
    return (
        <Button
            variant="shadow"
            color="danger"
            className="mt-5 p-5 text-[15px] font-[600] text-white regular"
            onClick={() => {
                const formSection = document.getElementById("formSection");
                formSection?.scrollIntoView({ behavior: "smooth" });
            }}
        >
            GARANTA JÁ SEU INGRESSO
            <FaArrowDown />
        </Button>
    );
}
