import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
        <div className={`relative w-[80%] text-left`}>
            <div className={`absolute w-[90%] border-hero_highlight-dark border-4 rounded-3xl h-full ${getBorderPosition(idx)}`}></div>
            <div className="bg-hero_dark mx-5 py-5 px-10 rounded-3xl z-10 relative ">
                <h3 className="text-2xl font-bold mb-5">{blogHeading}</h3>
                <p className="text-hero_text-dark mb-5">{blogContent}</p>
                <div>
                    <FontAwesomeIcon icon={faArrowRight} className="mr-5 mt-2" />
                    <a href={blogLink}>view blog</a>
                </div>
            </div>
        </div>
    )
}