import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import ImageKitWrapper from '../commonComponent/Imagekit'
import './index.css'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faHashnode, faLinkedin, faMedium } from '@fortawesome/free-brands-svg-icons'
import axios from 'axios'
import { useState } from 'react'
import { contact } from '../../apiServices/apiService'
import { useEffect } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Contact({ contactsRef }) {

    const [contactsData, setContactsData] = useState(null)
    const formRef = useRef()
    const [formValues, setFormValues] = useState({
        name: "",
        email: "",
        message: "",
    })

    useEffect(() => {
        getExperience();
    }, [])

    async function getExperience() {
        try {
            const response = await axios.get(process.env.REACT_APP_BASE_URL + contact())
            if (response?.data?.success) {
                setContactsData(response?.data?.data)
            }

        } catch (error) {
            console.log(error)
        }
    }

    const sendEmail = (e) => {
        if (formValues?.email?.length > 0 && formValues?.name?.length > 0 && formValues?.message?.length > 0) {

            e.preventDefault();

            emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, formRef.current, process.env.REACT_APP_PUBLIC_KEY)
                .then((result) => {
                    toast.success("Notification sent!")
                    setFormValues({
                        email: "",
                        message: "",
                        name: ""
                    })
                }, (error) => {
                    toast.error("something went wrong...please try again later")
                });
        } else {
            toast.warn("Please fill all the values!")
        }
    };

    return (
        <div className="mt-3 bg-hero_actions-dark rounded-t-[5rem] px-16 pb-10" ref={contactsRef}>
            <ToastContainer />
            <h2 className="text-3xl font-semibold p-2 pt-5">Contact</h2>
            <div className="flex justify-between items-center mt-8">
                <div className="w-1/2 text-left">
                    <h5 className="text-xl font-semibold mb-5">Drop Me a Message!</h5>
                    <p className="mb-5">{contactsData?.contact_description}</p>
                    <div className='flex justify-start items-center mt-10'>
                        <div className=' flex justify-between items-center mx-2 self-end'>
                            <a href={`tel:${contactsData?.contact_number}`} className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faPhone} /></a>
                        </div>
                        <div className=' flex justify-between items-center mx-2 self-end'>
                            <a href={`mailto:${contactsData?.contact_email}`} className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faEnvelope} /></a>
                        </div>
                    </div>
                </div>
                <div className="w-1/2 flex justify-center items-center">
                    <div className="bg-hero_dark rounded-xl w-2/3 p-4">
                        <form ref={formRef} onSubmit={sendEmail}>
                            <input type="text" name="from_name" id="" placeholder="Name" value={formValues?.name} onChange={(e) => setFormValues(prev => ({ ...prev, name: e?.target?.value }))} className="w-10/12 p-1 rounded my-3  text_black" />
                            <input type="text" name="from_email" value={formValues?.email} onChange={(e) => setFormValues(prev => ({ ...prev, email: e?.target?.value }))} id="" placeholder="Email" className="w-10/12 p-1 rounded my-3  text_black" />
                            <textarea name="message" value={formValues?.message} onChange={(e) => setFormValues(prev => ({ ...prev, message: e?.target?.value }))} id="" cols="30" rows="5" className='w-10/12 p-1 rounded my-3  text_black' placeholder='Message..'></textarea>
                            <div className='text-left ml-10 pb-3'>
                                <button onClick={(e) => sendEmail(e)} className="bg-hero_actions-dark p-1 w-[6rem] rounded text-lg">Send</button>
                            </div>
                        </form>
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
                        <a href={contactsData?.contact_link[0]?.link_data} target='_blank' className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faLinkedin} /></a>
                    </div>
                    <div className=' flex justify-between items-center mx-2 self-end'>
                        <a href={contactsData?.contact_link[3]?.link_data} className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faGithub} /></a>
                    </div>
                    <div className=' flex justify-between items-center mx-2 self-end'>
                        <a href={contactsData?.contact_link[2]?.link_data} className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faHashnode} /></a>
                    </div>
                    <div className=' flex justify-between items-center mx-2 self-end'>
                        <a href={contactsData?.contact_link[1]?.link_data} className='bg-hero_dark py-2 px-3 rounded'><FontAwesomeIcon icon={faMedium} /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}