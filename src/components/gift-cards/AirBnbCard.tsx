/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export function AirBnbCard() {
    return (
        <div className="flex items-center">
            <img src={"/reactions/jeppe1.png"} alt="reaction" className="absolute z-10 -left-32 -scale-x-100 -animate-wiggle-medium" />

            <div className="w-[750px] h-[500px] relative rounded-md bg-room bg-cover">
                <div className="absolute bg-black w-full h-full opacity-65 rounded-md"></div>
                <div className="absolute text-white w-full h-full flex flex-col justify-center items-center">
                    <div className="mb-12" style={{ fontSize: "75px" }}>1 Airbnb værelse</div>
                    <div style={{ fontSize: "25px" }}>Til en Skrubbe i nød</div>
                    <div style={{ fontSize: "25px" }}>Hvis hostel køjesengen ikke lever op til behovet</div>
                    <Link
                        href={"https://www.airbnb.dk/s/Kiev--Ukraine/homes?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2024-01-01&monthly_length=3&price_filter_input_type=0&channel=EXPLORE&query=Kiev%2C%20Ukraine&place_id=ChIJ94pF_F3O1EARB10ge68K4KY&date_picker_type=calendar&checkin=2024-03-08&checkout=2024-03-09&adults=1&source=structured_search_input_header&search_type=filter_change&price_filter_num_nights=1&room_types%5B%5D=Private%20room"}
                        className="bg-[#c39d63] hover:bg-[#dbbd90] active:bg-[#dbbd90]
                                px-5 py-3 my-6 text-2xl cursor-pointer">
                        Book nu
                    </Link>
                </div>
            </div>
            <img src={"/skrub/Ana.png"} alt="reaction" className="absolute z-10 left-full -animate-wiggle-medium" />
        </div>
    );
}