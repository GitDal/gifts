/* eslint-disable @next/next/no-img-element */

export function RestaurantStampCard() {
    return (
        <div className="w-[750px] h-[500px] relative rounded-md bg-stamp-card bg-cover">
            <div className="absolute text-gray-600 w-full h-full flex flex-col justify-center items-center p-10">
                <div style={{ fontSize: "50px" }}>Restaurant 2024</div>
                <div className="flex">
                    <Stamp imgUrl="/stamps/spring.png" text="Forår" />
                    <Stamp imgUrl="/stamps/summer.png" text="Sommer" />
                    <Stamp imgUrl="/stamps/autumn.png" text="Efterår" />
                    <Stamp imgUrl="/stamps/winter.png" text="Vinter" />
                </div>
            </div>
        </div>
    );
}

function Stamp({ imgUrl, text, className }: { imgUrl: string; text: string; className?: string; }) {
    return (
        <div className={`${className} border-2 m-4 text-gray-600 border-gray-600 p-2 w-[100px] h-[100px] flex flex-col justify-center items-center`}>
            <img src={imgUrl} className="h-16 w-auto" alt="stamp" />
            <p>{text}</p>
        </div>
    );
}