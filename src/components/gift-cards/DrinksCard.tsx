/* eslint-disable @next/next/no-img-element */

export function DrinksCard() {
    return (
        <div className="w-[750px] h-[500px] relative rounded-md bg-white">
            <div className="h-full flex flex-col justify-center items-center">
                <div className="grow w-full h-full flex justify-center items-center rounded-t-md">
                    <img src="/drinks/apotek.gif" alt="apotek" />
                </div>
                <div className="grow w-full h-full flex justify-center items-center rounded-b-md bg-[#241f20]">
                    <img src="/drinks/gedulgt.png" alt="gedulgt" className="h-32" />
                </div>
            </div>
        </div>
    );
}
