import { navbarTitles } from "../../constants";
import ImageKitWrapper from "../commonComponent/Imagekit";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";
import './navbar.css'

export default function Navbar({ contactsRef, homeRef, experienceRef, blogsRef, portfolioRef, aboutMeRef }) {
    const refmap = (title) => {
        switch (title) {
            case "Home":
                homeRef.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case "About Me":
                aboutMeRef.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case "Experience":
                experienceRef.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case "Portfolio":
                portfolioRef.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case "Blogs":
                blogsRef.current.scrollIntoView({ behavior: 'smooth' })
                break;
            case "Contact":
                contactsRef.current.scrollIntoView({ behavior: 'smooth' })
                break;

            default:
                break;
        }
    }
    return (
        <div className="text-white flex justify-end items-center relative">
            <BackgroundRadialDrop radial_class={"w-r2 h-r2 absolute top-0 -right-[10%] animate_rotation_ac_small"} />
            <div className="absolute -left-12 -top-4">
                <ImageKitWrapper path={"/portfolio_logo_colour.svg"} width={150} />
            </div>
            <div className="flex justify-between items-center w-[60%] mt-3 z-10">
                {navbarTitles?.map(title => <h6 className="mx-3 cursor-pointer hover:text-hero_highlight-dark mb-2" onClick={() => refmap(title)} >{title}</h6>)}
            </div>
        </div >
    )
}