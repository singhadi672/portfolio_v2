import { useEffect, useState } from "react";
import ImageKitWrapper from "../commonComponent/Imagekit";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";
import './home.css'
import { home } from "../../apiServices/apiService";
import axios from "axios";
import Typewriter from 'typewriter-effect'

export default function Homepage({ homeRef }) {

    const [homeData, setHomeData] = useState(null)

    useEffect(() => {
        getHome();
    }, [])

    async function getHome() {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL + home())
            if (response?.data?.success) {
                setHomeData(response?.data?.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="flex justify-between items-center mt-12 relative" ref={homeRef}>
            <BackgroundRadialDrop radial_class={"w-r6 h-r6 absolute -top-24 -left-[20%] animate_rotation_c"} />
            <div className="self-start mt-12 text-left w-[60%]">
                <h4 className="text-gray-100 text-4xl mb-3">I'm a</h4>
                {/* <h2 className="font-bold text-7xl">Full-Stack</h2>
                <h2 className="font-bold text-7xl"> Software</h2>
                <h2 className="font-bold text-7xl"> Developer.</h2> */}
                <h2 className="font-bold text-7xl">
                    <Typewriter
                        options={{
                            strings: homeData?.title,
                            autoStart: true,
                            loop: true,
                            pauseFor: 2000
                        }}
                    />
                </h2>
            </div>
            <div className="mr-12 flex justify-center items-center w-[40%] animate-float-mid">
                <ImageKitWrapper path={homeData?.hero_image} width={650} height={650} />
            </div>
        </div>
    )
}