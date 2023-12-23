import Link from "next/link";

export function FamilySummerCard() {
    return (
        <div className="w-[750px] h-[500px] relative rounded-md
                        bg-white bg-nordsminde-restaurant bg-cover">
            <div className="absolute bg-black w-full h-full opacity-65 rounded-md"></div>
            <div className="absolute text-white w-full h-full flex flex-col justify-center items-center p-10">
                <div style={{ fontSize: "56px" }}>Nordsminde</div>
                <div className="mb-12" style={{ fontSize: "20px" }}>En tur til nostalgiske Nordsminde med tvillingerne</div>
                <div style={{ fontSize: "20px" }}>En sommmerdag i 2024</div>
                <div style={{ fontSize: "20px" }}>Inviteres i på mad ved Fiskehuset Norsminde</div>
                {/* <div className="grow flex justify-center items-center"> */}
                <Link
                    className="bg-[#688881] hover:bg-[#8fbbb1] active:bg-bg-[#8fbbb1]
                    px-5 py-3 mt-6 text-2xl cursor-pointer"
                    href={"https://www.google.com/maps/dir/Trank%C3%A6r+V%C3%A6nge+2,+Tranbjerg/Annettevej+22,+Brabrand/Regenburgsgade+12,+Aarhus/8340+Norsminde/@56.0903266,10.1092311,12z/data=!3m1!4b1!4m26!4m25!1m5!1m1!1s0x464c6a766670ec7d:0x2bc4e18102dd81a5!2m2!1d10.1348296!2d56.0851089!1m5!1m1!1s0x464c15358dcee375:0xd2c02e0f18adb5b7!2m2!1d10.1296257!2d56.1503984!1m5!1m1!1s0x464c3fef66878ebb:0xef6829a0ad9b1957!2m2!1d10.1832463!2d56.157172!1m5!1m1!1s0x464c440d68cb9a59:0x8a40bf88ec8d461c!2m2!1d10.26077!2d56.0233506!3e0?entry=ttu"}
                >
                    Rute
                </Link>
                {/* </div> */}
            </div>
        </div>
    );
}
