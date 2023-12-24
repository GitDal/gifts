import { GiftBox } from "@/components/gift-box/GiftBox";
import { AirBnbCard } from "@/components/gift-cards/AirBnbCard";
import { Snow } from "@/components/snow/Snow";

export default function Skrub() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-slate-800 overflow-hidden">
            <Snow />
            <GiftBox boxColor="#23B5D3" wrapperColor="#ffffff">
                <AirBnbCard />
            </GiftBox>
        </main>
    );
}
