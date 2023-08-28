import { navbarTitles } from "../../constants";
import ImageKitWrapper from "../commonComponent/Imagekit";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";
import './navbar.css'

export default function Navbar() {
    return (
        <div className="text-white flex justify-end items-center relative">
            <BackgroundRadialDrop radial_class={"w-r2 h-r2 absolute top-0 -right-[10%] animate_rotation_ac_small"} />
            <div className="absolute -left-12 -top-4">
                <ImageKitWrapper path={"/portfolio_logo_colour.svg"} width={150} />
            </div>
            <div className="flex justify-between items-center w-[60%] mt-3 z-10">
                {navbarTitles?.map(title => <h6 className="mx-3 cursor-pointer hover:text-hero_highlight-dark mb-2">{title}</h6>)}
            </div>
        </div>
    )
}