import { useState } from "react";
import ImageKitWrapper from "../commonComponent/Imagekit";
import './index.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
    const [focusedElement, setFocusedElement] = useState(null)
    const logoData = [
        {
            imgLink: '/html_logo.svg?updatedAt=1692271404154',
            name: 'HTML',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/css_logo.svg?updatedAt=1692271404448',
            name: 'CSS',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/javascript_logo.svg?updatedAt=1692271404191',
            name: 'Javascript',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/nodejs_logo.svg?updatedAt=1692271404481',
            name: 'Node.Js',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/download-removebg-preview.png?updatedAt=1692271361727',
            name: 'Mongo DB',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/download-removebg-preview%20(1).png?updatedAt=1692271361554',
            name: 'Express.Js',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/download-removebg-preview%20(5).png?updatedAt=1692271361717',
            name: 'React.Js',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/download-removebg-preview%20(3).png?updatedAt=1692271361818',
            name: 'Next.Js',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/download-removebg-preview%20(4).png?updatedAt=1692271361536',
            name: 'GraphQl',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/download-removebg-preview%20(6).png?updatedAt=1692271361617',
            name: 'TailwindCSS',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/seal-color-removebg-preview.png?updatedAt=1692271361603',
            name: 'Sass',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
        {
            imgLink: '/download-removebg-preview%20(2).png?updatedAt=1692271361682',
            name: 'GitHub',
            description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ipsum suscipit assumenda, pariatur dolore totam nemo quaerat molestiae quae optio voluptas. Sint nobis quo dolor quibusdam quidem corporis distinctio soluta pariatur aperiam?"
        },
    ]

    console.log(focusedElement)

    return (
        <div className="mt-20">
            <h2 className="font-semibold text-3xl">Experience</h2>
            <div className="grid grid-cols-4 gap-y-10 place-content-center mt-10" onClick={() => setFocusedElement(null)}>
                {logoData?.map((logo, idx) =>
                    <div className="flex flex-col justify-center items-center relative">
                        <ImageKitWrapper className="rounded-2xl cursor-pointer" path={logo?.imgLink} width={100} height={100} />
                        <p className="text-hero_text-dark mt-5 cursor-pointer" onMouseOver={() => setFocusedElement(idx)} >{logo?.name}</p>
                        {focusedElement == idx && <div className={`z-10 animate-data w-[20rem] p-2 bg-hero_dark-100 rounded-3xl absolute ${idx % 4 <= 2 ? "-top-12 left-2/3" : "-top-12 right-2/3"} ${focusedElement === idx && "active"}`}>
                            <FontAwesomeIcon icon={faTimes} className="absolute right-4 top-3 cursor-pointer" onClick={() => setFocusedElement(null)} />
                            <p className="text-hero_text-dark p-2 mt-4" >{logo?.description}</p>
                        </div>}
                    </div>
                )}

            </div>
        </div>
    )
}