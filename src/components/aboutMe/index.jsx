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
        <div className="flex lg:justify-between lg:flex-row flex-col items-center -mt-10 relative" ref={aboutMeRef}>
            <div className="hidden lg:inline relative ">
                <div className="relative" style={{ zIndex: 2 }}>
                    <ImageKitWrapper path={userData?.imgLink} width={450} height={450} />
                </div>
                <div className="bg-hero_actions-dark w-[75%] h-[70%] absolute left-16 bottom-0 rounded-t-full z-0"></div>
            </div>
            <div className="lg:w-[55%] w-[100%] lg:text-left text-center self-center lg:self-start lg:mt-40 mt-16">
                <h2 className="font-semibold lg:text-3xl text-4xl lg:mb-0 mb-8">About Me</h2>
                <div className="relative lg:hidden flex justify-center align-center">
                    <div className="relative w-[70%] h-[70%]" style={{ zIndex: 2 }}>
                        <ImageKitWrapper path={userData?.imgLink} width={450} height={450} />
                    </div>
                    <div className="bg-hero_actions-dark w-[60%] md:w-[50%] h-[70%] absolute  bottom-0 rounded-t-full z-0"></div>
                </div>
                <p className="text-hero_text-dark mt-10 lg:w-[90%] w-[100%] lg:text-lg md:text-lg text-sm">{userData?.description}</p>
                <div className="flex lg:justify-between justify-center items-center lg:w-5/12 w-[100%]  mt-10">
                    <button className="bg-hero_actions-dark p-2 w-[8rem] rounded text-lg lg:mx-0 mx-4"
                        onClick={() => contactsRef?.current?.scrollIntoView({ behavior: 'smooth' })}
                    >
                        HIRE ME
                    </button>
                    <a href={userData?.resume} download={true} target="_blank" className="lg:mx-0 mx-4 border text-center border-hero_actions-dark p-2 w-[8rem] rounded text-lg text-hero_actions-dark">RESUME</a>
                </div>
            </div>
            <BackgroundRadialDrop radial_class={"lg:w-r7 lg:h-r7 absolute top-10 -right-[30%] animate_rotation_c w-r5 h-r5"} />
        </div>
    )
}