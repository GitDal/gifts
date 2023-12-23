import Link from "next/link";

export function FamilyDinnerCard() {
    return (
        <div className="w-[750px] h-[500px] relative rounded-md
                        bg-white bg-nogen-restaurant bg-cover"
            style={{ fontFamily: "\"Playfair Display\"" }}>
            <div className="absolute bg-black w-full h-full opacity-65 rounded-md"></div>
            <div className="absolute text-white w-full h-full flex flex-col justify-center items-center">
                <div className="mb-12" style={{ fontSize: "75px" }}>Restaurant Nögen</div>
                <div style={{ fontSize: "25px" }}>HEL NÖGEN</div>
                <div style={{ fontSize: "25px" }}>10 små serveringer ad fire omgange</div>
                <Link
                    href={"https://www.restaurantnoegen.dk/menu/"}
                    className="bg-[#c39d63] hover:bg-[#dbbd90] active:bg-[#dbbd90]
                                px-5 py-3 my-6 text-2xl cursor-pointer">
                    Se Menu
                </Link>
            </div>
        </div>
    );
}
