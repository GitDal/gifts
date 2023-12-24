import { GiftBox } from "@/components/gift-box/GiftBox";
import { GiftSwitcher } from "@/components/s/GiftSwitcher";
import { Snow } from "@/components/snow/Snow";

export default function S() {
    return (
        <main className="flex flex-col justify-center items-center h-screen bg-emerald-800 overflow-hidden">
            <Snow />
            <GiftBox boxColor="#ff549d" wrapperColor="#eac750">
                <GiftSwitcher />
            </GiftBox>
        </main>
    );
}

