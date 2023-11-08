import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import './blogs.css'

export default function BlogSection({ blogHeading, blogContent, blogLink, idx }) {
    function getBorderPosition(idx) {
        switch (idx % 4) {
            case 0:
                return '-top-8 -left-4'
                break;
            case 1:
                return "-top-8 -right-4"
                break;
            case 2:
                return '-bottom-8 -left-4'
                break;
            case 3:
                return "-bottom-8 -right-4"
                break;
            default:
                return '-top-8 -left-4'
                break;
        }
    }
    return (
        <div className={`relative lg:w-[80%] w-[100%] text-left`}>
            <div className={`absolute w-[90%] border-hero_highlight-dark border-4 hidden sm:inline rounded-3xl h-full ${getBorderPosition(idx)}`}></div>
            <div className="bg-hero_dark lg:mx-5 lg:py-5 lg:px-10 sm:mx-5 sm:py-5 sm:px-10 mx-2 pl-4 pt-4 rounded-3xl z-10 relative lg:h-[30rem] h-[28rem] overflow-y-auto">
                <h3 className="lg:text-2xl text-xl font-bold mb-5">{blogHeading}</h3>
                <p className="text-hero_text-dark text-sm lg:text-md mb-5">{blogContent}</p>
                <div>
                    <FontAwesomeIcon icon={faArrowRight} className="mr-5 mt-2" />
                    <a href={blogLink} target="_blank">view blog</a>
                </div>
            </div>
        </div>
    )
}