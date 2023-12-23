import { GiftBox } from "@/components/gift-box/GiftBox";
import { GiftSwitcher } from "@/components/hp/GiftSwitcher";
import { Snow } from "@/components/snow/Snow";

export default function Home() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-rose-700 overflow-hidden">
            <Snow />
            <GiftBox boxColor="#ff9400" wrapperColor="#ffffff">
                <GiftSwitcher />
            </GiftBox>
        </main>
    );
}

