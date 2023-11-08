import { useState } from "react";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";
import PortfolioSection from "./portfolioSection";
import { useEffect } from "react";
import { portfolio } from "../../apiServices/apiService";
import axios from "axios";


export default function Portfolio({ portfolioRef }) {

    const [portfolioData, setportfolioData] = useState([])

    useEffect(() => {
        getPortfolio();
    }, [])

    async function getPortfolio() {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL + portfolio())
            if (response?.data?.success) {
                setportfolioData(response?.data?.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className="lg:mt-28 mt-16" ref={portfolioRef}>
            <h2 className="font-semibold lg:text-3xl text-4xl">Portfolio</h2>
            <div className="lg:mt-20 mt-10 relative">
                <BackgroundRadialDrop radial_class={"w-r5 h-r4 absolute top-[20%] right-[50%]"} />
                {portfolioData?.length > 0 && portfolioData?.map((item, idx) =>
                    <PortfolioSection
                        projectName={`PROJECT ${idx + 1}`}
                        projectSubHeading={item?.project_name}
                        projectDescription={item?.project_description}
                        projectLink={item?.project_link}
                        codeLink={item?.source_link}
                        reverse={idx % 2 != 0}
                        projectImg={item?.project_image}
                    />)}
            </div>
        </div>
    )
}