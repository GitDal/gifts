"use client";
import { ArrowUturnDownIcon } from "@heroicons/react/16/solid";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DrinksCard } from "../gift-cards/DrinksCard";
import { RestaurantStampCard } from "../gift-cards/RestaurantStampCard";

export function GiftSwitcher() {
    const [visible, setVisible] = useState<"restaurant" | "drinks">("restaurant");
    const [handleChangeTrigger, setHandleChangeTrigger] = useState<boolean>(false);

    useEffect(() => {
        if (handleChangeTrigger) {
            setHandleChangeTrigger(() => false);
            setTimeout(() => setVisible(() => visible === "restaurant" ? "drinks" : "restaurant"), 100);
        }

    }, [handleChangeTrigger, visible]);

    return (
        <div>
            <div className={`flex items-center transition-all duration-[400ms] ease-in-out ${visible === "restaurant" ? "" : "translate-y-[2000px]"}`}>
                <Image src={"/reactions/jeppe1.png"} width={100} height={100} alt="reaction" className="absolute z-10 -left-24 -scale-x-100 -animate-wiggle-medium" />
                <div className="block"><RestaurantStampCard /></div>
            </div>

            <div className={`absolute top-0 flex items-center transition-all duration-[400ms] ease-in-out ${visible === "drinks" ? "" : "translate-y-[2000px]"}`}>
                <div className="block"><DrinksCard /></div>
                <Image src={"/reactions/jeppe2.png"} width={100} height={100} alt="reaction" className="absolute z-10 left-full animate-wiggle-medium" />
            </div>

            <ArrowUturnDownIcon
                className="absolute top-full left-full text-white cursor-pointer w-16"
                onClick={() => setHandleChangeTrigger(() => true)}
            />
        </div>
    );
}