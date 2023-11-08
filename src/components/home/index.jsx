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
        <div className="flex lg:justify-between justify-center items-center lg:mt-12 relative flex-col lg:flex-row" ref={homeRef}>
            <BackgroundRadialDrop radial_class={"lg:w-r6 lg:h-r6 absolute lg:-top-24 lg:-left-[20%] -top-30 left-0 animate_rotation_c w-r7 h-r7"} />
            <div className="lg:self-start lg:mt-12 mt-20 text-left lg:w-[60%] w-[100%]">
                <h4 className="text-gray-100 lg:text-4xl text-2xl mb-3">I'm a</h4>
                <h2 className="font-bold lg:text-7xl text-3xl">
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
            <div className="mr-12 flex justify-center items-center lg:w-[40%] w-[80%] md:w-[70%] animate-float-mid">
                <ImageKitWrapper path={homeData?.hero_image} width={650} height={650} />
            </div>
        </div>
    )
}