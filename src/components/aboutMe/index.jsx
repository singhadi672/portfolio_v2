import ImageKitWrapper from "../commonComponent/Imagekit";
import BackgroundRadialDrop from "../commonComponent/backgroundRadialDrop";

export default function AboutMe() {
    return (
        <div className="flex justify-between items-center -mt-10 relative">
            <div className="relative">
                <div className="relative" style={{ zIndex: 2 }}>
                    <ImageKitWrapper path={"/WhatsApp_Image_2022-12-29_at_7.19.05_PM-removebg-preview.png?updatedAt=1692091304574"} width={450} height={450} />
                </div>
                <div className="bg-hero_actions-dark w-[75%] h-[70%] absolute left-16 bottom-0 rounded-t-full z-0"></div>
            </div>
            <div className="w-[55%] text-left self-start mt-40">
                <h2 className="font-semibold text-3xl">About Me</h2>
                <p className="text-hero_text-dark mt-10 w-[90%] text-lg">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore reprehenderit eligendi harum vel odio, molestias laborum voluptatum totam iusto quasi recusandae nam molestiae velit consequuntur corrupti impedit mollitia autem veniam?</p>
                <div className="flex justify-between items-center w-5/12 mt-10">
                    <button className="bg-hero_actions-dark p-2 w-[8rem] rounded text-lg">HIRE ME</button>
                    <button className="border border-hero_actions-dark p-2 w-[8rem] rounded text-lg text-hero_actions-dark">RESUME</button>
                </div>
            </div>
            <BackgroundRadialDrop radial_class={"w-r7 h-r7 absolute top-10 -right-[30%] animate_rotation_c"} />
        </div>
    )
}