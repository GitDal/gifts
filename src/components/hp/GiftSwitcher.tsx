"use client";
import Image from "next/image";
import { FamilyDinnerCard } from "../gift-cards/FamilyDinnerCard";
import { useEffect, useState } from "react";
import { ArrowUturnDownIcon } from "@heroicons/react/16/solid";
import { FamilySummerCard } from "../gift-cards/FamilySummerCard";

export function GiftSwitcher() {
    const [visible, setVisible] = useState<"restaurant" | "nordsminde">("nordsminde");
    const [handleChangeTrigger, setHandleChangeTrigger] = useState<boolean>(false);

    useEffect(() => {
        if (handleChangeTrigger) {
            setHandleChangeTrigger(() => false);
            setTimeout(() => setVisible(() => visible === "restaurant" ? "nordsminde" : "restaurant"), 100);
        }

    }, [handleChangeTrigger, visible]);

    return (
        <div>
            <div className={`flex items-center transition-all duration-[400ms] ease-in-out ${visible === "nordsminde" ? "" : "translate-y-[1000px]"}`}>
                <Image src={"/reactions/jeppe1.png"} width={100} height={100} alt="reaction" className="absolute z-10 -left-24 -scale-x-100 -animate-wiggle-medium" />
                <div className="block"><FamilySummerCard /></div>
                <Image src={"/reactions/signe1.png"} width={100} height={100} alt="reaction" className="absolute z-10 left-full animate-wiggle-medium" />
            </div>

            <div className={`absolute top-0 flex items-center transition-all duration-[400ms] ease-in-out ${visible === "restaurant" ? "" : "translate-y-[1000px]"}`}>
                <Image src={"/reactions/jeppe2.png"} width={100} height={100} alt="reaction" className="absolute z-10 -left-24 -scale-x-100 -animate-wiggle-fast" />
                <div className="block"><FamilyDinnerCard /></div>
                <Image src={"/reactions/signe2.png"} width={100} height={100} alt="reaction" className="absolute z-10 left-full animate-wiggle-fast" />
            </div>

            <ArrowUturnDownIcon
                className="absolute top-full left-full text-white cursor-pointer w-16"
                onClick={() => setHandleChangeTrigger(() => true)}
            />
        </div>
    );
}