import { useEffect, useState } from "react";
import ImageKitWrapper from "../commonComponent/Imagekit";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";
import axios from 'axios'
import { aboutMe, home } from "../../apiServices/apiService";

export default function AboutMe({ aboutMeRef, contactsRef }) {

    const [userData, setUserData] = useState(null)

    useEffect(() => {
        getAboutMe();
    }, [])

    async function getAboutMe() {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL + aboutMe())
            if (response?.data?.success) {
                setUserData(response?.data?.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-between items-center -mt-10 relative" ref={aboutMeRef}>
            <div className="relative">
                <div className="relative" style={{ zIndex: 2 }}>
                    <ImageKitWrapper path={userData?.imgLink} width={450} height={450} />
                </div>
                <div className="bg-hero_actions-dark w-[75%] h-[70%] absolute left-16 bottom-0 rounded-t-full z-0"></div>
            </div>
            <div className="w-[55%] text-left self-start mt-40">
                <h2 className="font-semibold text-3xl">About Me</h2>
                <p className="text-hero_text-dark mt-10 w-[90%] text-lg">{userData?.description}</p>
                <div className="flex justify-between items-center w-5/12 mt-10">
                    <button className="bg-hero_actions-dark p-2 w-[8rem] rounded text-lg"
                        onClick={() => contactsRef?.current?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        HIRE ME
                    </button>
                    <a href={userData?.resume} download={true} target="_blank" className="border text-center border-hero_actions-dark p-2 w-[8rem] rounded text-lg text-hero_actions-dark">RESUME</a>
                </div>
            </div>
            <BackgroundRadialDrop radial_class={"w-r7 h-r7 absolute top-10 -right-[30%] animate_rotation_c"} />
        </div>
    )
}