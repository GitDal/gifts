import Image from "next/image";

export function DrinksCard() {
    return (
        <div className="w-[750px] h-[500px] relative rounded-md bg-white">
            <div className="h-full flex flex-col justify-center items-center">
                <div className="grow w-full h-full flex justify-center items-center rounded-t-md">
                    <Image className="w-auto" alt="apotek" src={"/drinks/apotek.gif"} width={100} height={100} />
                </div>
                <div className="grow w-full h-full flex justify-center items-center rounded-b-md bg-[#241f20]">
                    <Image className="w-auto" alt="gedulgt" src={"/drinks/gedulgt.png"} width={100} height={100} />
                </div>
            </div>
        </div>
    );
}
