import Image from "next/image";

export function DrinksCard() {
    return (
        <div className="w-[750px] h-[500px] relative rounded-md bg-white">
            <div className="h-full flex flex-col justify-center items-center">
                <div className="grow w-full flex justify-center items-center rounded-t-md">
                    <Image className="w-auto" alt="apotek" src={"https://stpaulsapothek.dk/wp-content/themes/base/img/logo.gif"} width={100} height={100} />
                </div>
                <div className="grow w-full flex justify-center items-center rounded-b-md bg-[#241f20]">
                    <Image className="w-auto h-24" alt="apotek" src={"https://images.squarespace-cdn.com/content/v1/58221cac5016e1c5e048d5ef/0f168989-c8a1-4202-9333-625b712b8232/gedulgt+logo+m%C3%B8rkt.png"} width={100} height={100} />
                </div>
            </div>
        </div>
    );
}
