import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";
import PortfolioSection from "./portfolioSection";


export default function Portfolio() {
    return (
        <div className="mt-28">
            <h2 className="font-semibold text-3xl">Portfolio</h2>
            <div className="mt-20 relative">
                <BackgroundRadialDrop radial_class={"w-r5 h-r4 absolute top-[20%] right-[50%]"} />
                <PortfolioSection
                    projectName={"PROJECT 1"}
                    projectSubHeading={"Ecox.in - Ecommerce Shop"}
                    projectDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, velit eos exercitationem nulla, ad repellendus qui aspernatur eius est animi sint enim! Inventore obcaecati soluta ex facilis rem quasi provident!"}
                    projectLink={"asa"}
                    codeLink={"as"}
                />
                <PortfolioSection
                    projectName={"PROJECT 2"}
                    projectSubHeading={"Wandr View"}
                    projectDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, velit eos exercitationem nulla, ad repellendus qui aspernatur eius est animi sint enim! Inventore obcaecati soluta ex facilis rem quasi provident!"}
                    projectLink={"asa"}
                    codeLink={"as"}
                    reverse
                />
                <PortfolioSection
                    projectName={"PROJECT 3"}
                    projectSubHeading={"Rambler"}
                    projectDescription={"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, velit eos exercitationem nulla, ad repellendus qui aspernatur eius est animi sint enim! Inventore obcaecati soluta ex facilis rem quasi provident!"}
                    projectLink={"asa"}
                    codeLink={"as"}
                />
            </div>
        </div>
    )
}