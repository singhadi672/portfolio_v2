import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import ImageKitWrapper from "../commonComponent/Imagekit";

export default function PortfolioSection({ reverse = false, projectName, projectSubHeading, projectDescription, projectLink, codeLink, projectImg }) {
    return (
        <div className={`flex justify-between ${reverse && 'flex-row-reverse'} items-center mt-20`}>
            <div className="w-[50%] text-left">
                <h3 className="text-hero_highlight-dark text-2xl mb-4">{projectName}</h3>
                <a className="text-3xl font-semibold" href={projectLink} target="_blank">{projectSubHeading}</a>
                <p className="text-hero_text-dark mt-5">{projectDescription}</p>
                <div className="flex justify-start items-center mt-5">
                    <FontAwesomeIcon icon={faArrowRight} className="mr-5 mt-2" />
                    <a href={codeLink}>view source</a>
                </div>
            </div>
            <div className="relative">
                <div className="relative rounded-2xl" style={{ zIndex: 2 }}>
                    <ImageKitWrapper className="rounded-2xl" path={projectImg} width={450} height={400} />
                </div>
                <div className="absolute w-full h-full bg-hero_dark border-8 border-hero_highlight-dark top-10 right-10 rounded-2xl">
                </div>
            </div>
        </div>
    )
}