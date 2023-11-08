import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { navbarTitles } from "../../constants";
import ImageKitWrapper from "../commonComponent/Imagekit";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";
import './navbar.css'
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function Navbar({ contactsRef, homeRef, experienceRef, blogsRef, portfolioRef, aboutMeRef }) {

    const [sidebar, setSidebar] = useState(false)
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
            <div className="absolute lg:-left-12 lg:-top-4 -top-1 -left-10 w-[5.5rem] lg:w-auto">
                <ImageKitWrapper path={"/portfolio_logo_colour.svg"} width={150} />
            </div>
            <div className="flex hidden lg:flex justify-between items-center w-[60%] mt-3 z-10">
                {navbarTitles?.map(title => <h6 className="mx-3 cursor-pointer hover:text-hero_highlight-dark mb-2" onClick={() => refmap(title)} >{title}</h6>)}
            </div>
            {!sidebar && <div className="lg:hidden z-20">
                <FontAwesomeIcon icon={faBars} onClick={() => setSidebar(prev => !prev)} />
            </div>}
            <div className={`fixed lg:hidden opacity-95 top-0 ${sidebar ? "right-0" : "-right-full"} w-full h-full pt-16 text-right pr-5 z-20 bg-hero_dark ease-in-out duration-500`} >
                <FontAwesomeIcon icon={faTimes} className="absolute top-4 right-5" onClick={() => setSidebar(prev => !prev)} />
                {navbarTitles?.map(title => <h6 className="mx-3 cursor-pointer hover:text-hero_highlight-dark mb-2 text-xl" onClick={() => refmap(title)} >{title}</h6>)}
            </div>
        </div >
    )
}