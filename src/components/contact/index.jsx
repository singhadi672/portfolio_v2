import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageKitWrapper from '../commonComponent/Imagekit'
import './index.css'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHashnode, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'

export default function Contact() {
    return (
        <div className="mt-3 bg-hero_actions-dark rounded-t-[5rem] px-16 pb-10">
            <h2 className="text-3xl font-semibold p-2 pt-5">Contact</h2>
            <div className="flex justify-between items-center mt-8">
                <div className="w-1/2 text-left">
                    <h5 className="text-xl font-semibold mb-5">Drop Me a Message!</h5>
                    <p className="mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sapiente facilis nisi hic iure consequuntur esse mollitia enim alias magnam explicabo odit maxime minus? Soluta nostrum vel explicabo unde modi!</p>
                    <div className='flex justify-start items-center mt-10'>
                        <div className=' flex justify-between items-center mx-2 self-end'>
                            <div className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faPhone} /></div>
                        </div>
                        <div className=' flex justify-between items-center mx-2 self-end'>
                            <div className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faEnvelope} /></div>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <div className="bg-hero_dark rounded-xl w-2/3 p-4">
                        <input type="text" name="" id="" placeholder="Name" className="w-10/12 p-1 rounded my-3  text_black" />
                        <input type="text" name="" id="" placeholder="Email" className="w-10/12 p-1 rounded my-3  text_black" />
                        <textarea name="" id="" cols="30" rows="5" className='w-10/12 p-1 rounded my-3  text_black' placeholder='Message..'></textarea>
                        <div className='text-left ml-10 pb-3'>
                            <button className="bg-hero_actions-dark p-1 w-[6rem] rounded text-lg">Send</button>
                        </div>
                    </div>
                </div>
            </div>
            <hr className='mt-16' />
            <div className='flex justify-between items-center flex-row-reverse relative pb-8 w-full'>
                <div className="absolute -left-12 top-4">
                    <ImageKitWrapper className="rounded-2xl" path={"/portfolio_logo_white.svg?updatedAt=1692091652768"} width={150} height={150} />
                </div>
                <div className='mt-12 flex justify-between items-center'>

                    <div className=' flex justify-between items-center mx-2 self-end'>
                        <div className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faLinkedin} /></div>
                    </div>
                    <div className=' flex justify-between items-center mx-2 self-end'>
                        <div className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faGithub} /></div>
                    </div>
                    <div className=' flex justify-between items-center mx-2 self-end'>
                        <div className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faHashnode} /></div>
                    </div>
                    <div className=' flex justify-between items-center mx-2 self-end'>
                        <div className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faMedium} /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}