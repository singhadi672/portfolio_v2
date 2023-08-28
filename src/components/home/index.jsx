import ImageKitWrapper from "../commonComponent/Imagekit";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";
import './home.css'

export default function Homepage() {
    return (
        <div className="flex justify-between items-center mt-12 relative">
            <BackgroundRadialDrop radial_class={"w-r6 h-r6 absolute -top-24 -left-[20%] animate_rotation_c"} />
            <div className="self-start mt-12 text-left w-[60%]">
                <h4 className="text-gray-100 text-4xl mb-3">I'm a</h4>
                {/* <h2 className="font-bold text-7xl">Full-Stack</h2>
                <h2 className="font-bold text-7xl"> Software</h2>
                <h2 className="font-bold text-7xl"> Developer.</h2> */}
                <h2 className="font-bold text-7xl">Full-Stack Software Developer.</h2>
            </div>
            <div className="mr-12 flex justify-center items-center w-[40%] animate-float-mid">
                <ImageKitWrapper path={"/hero_image_portfolio.svg?updatedAt=1692091535948"} width={650} height={650} />
            </div>
        </div>
    )
}