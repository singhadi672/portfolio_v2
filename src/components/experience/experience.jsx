import { useState } from "react";
import ImageKitWrapper from "../commonComponent/Imagekit";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";
import axios from "axios";
import { experience } from "../../apiServices/apiService";

export default function Experience({ experienceRef }) {
    const [focusedElement, setFocusedElement] = useState(null)
    const [logoData, setLogoData] = useState([])

    useEffect(() => {
        getExperience();
    }, [])

    async function getExperience() {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL + experience())
            if (response?.data?.success) {
                setLogoData(response?.data?.data)
            }

        } catch (error) {
            console.log(error)
        }
    }


    return (
        <div className="lg:mt-20 mt-10" ref={experienceRef}>
            <h2 className="font-semibold text-3xl">Experience</h2>
            <div className="grid lg:grid-cols-4 grid-cols-3 gap-y-10 place-content-center mt-10" onClick={() => setFocusedElement(null)}>
                {logoData?.map((logo, idx) =>
                    <div className="flex flex-col justify-center items-center relative">
                        <ImageKitWrapper className="rounded-2xl cursor-pointer w-[3rem] lg:w-[6rem]" path={logo?.technology_image} width={100} height={100} />
                        <p className="text-hero_text-dark mt-5 cursor-pointer text-xs lg:text-lg" onMouseOver={() => setFocusedElement(idx)} >{logo?.technology_name}</p>
                        {focusedElement == idx && <div className={`z-10 experiencescroll animate-data w-[20rem] p-2 bg-hero_dark-100 rounded-3xl absolute overflow-y-auto ${idx % 4 <= 2 ? "-top-12 left-2/3" : "-top-12 right-2/3"} ${focusedElement === idx && "active"}`}>
                            <FontAwesomeIcon icon={faTimes} className="absolute right-4 top-3 cursor-pointer" onClick={() => setFocusedElement(null)} />
                            <p className="text-hero_text-dark p-2 mt-4" >{logo?.technology_description}</p>
                        </div>}
                    </div>
                )}

            </div>
        </div>
    )
}