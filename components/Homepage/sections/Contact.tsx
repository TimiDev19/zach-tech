"use client"
import React, { useState } from "react";
import emailjs from '@emailjs/browser';
emailjs.init('vniYYZ7cQTr3doimy');
import { Goldman } from "next/font/google";
import Image from "next/image";
import techstack from "@/helpers/helpers";
import CallIcon from "@mui/icons-material/Call";
import MailIcon from "@mui/icons-material/Mail";
import BusinessIcon from "@mui/icons-material/Business";
import Link from "next/link";
import toast from "react-hot-toast";
import Footer from "./Footer";

const goldman = Goldman({
    subsets: ["latin"],
    weight: ["400", "700"], // Available weights
    display: "swap",
});

const Contact = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [message, setMessage] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false);

    const sendEmail = async () => {
        if (!email) {
            setError("Please enter your mail")
            return;
        }
        if (!name) {
            setError("Please enter your name")
            return;
        }
        if (!phone) {
            setError("Please enter your phone")
            return;
        }
        if (!message) {
            setError("Please enter your message")
            return;
        }
        const templatePrams = {
            name: name,
            from_email: email,
            message: message
        };

        setError("")
        setIsLoading(true)
        const serviceID = "service_u4blwtz";
        const templateID = "template_gtkgxyn";
        const userID = "vniYYZ7cQTr3doimy";
        console.log("Email Params:", templatePrams);

        try {
            const res = await emailjs.send(serviceID, templateID, templatePrams, userID);
            if (res.status === 200) {
                console.log("Email sent successfully!");
                toast.success("✅ Email sent successfully!");
                setIsLoading(false)
            }
        } catch (error) {
            console.error("Failed to send email:", error);

            setIsLoading(false)
        }
    }
    return (
        <>
            <div id="contact" className={` bg-white pt-[100px] no-scrollbar`}>
                <form
                    action="" className=" min-h-[50vh] max-sm:h-auto w-[100dvw] flex max-sm:flex-col items-start justify-between no-scrollbar lg:px-[5%]">
                    <div
                        className=" flex flex-col items-center justify-between max-sm:w-[95%] w-[45%] mx-auto h-full max-sm:flex-col text-justify"
                    >
                        <div className=" w-[95%] mx-auto">
                            <div className=" bg-[#060348] py-2 rounded-full w-[140px] h-[41px] px-[10px] flex items-center justify-center text-white mb-[50px]">
                                <h1>Contact Us</h1>
                            </div>

                            <h1 className=" text-black text-[42px] mb-[50px]">Let’s Get In Touch</h1>

                            <p className=" text-black text-[16px] mb-[50px]">
                                At Zach Technologies, we are committed to providing reliable, innovative, and human-centered digital solutions that drive growth and efficiency. Whether you're looking to transform your business with modern technology, integrate smarter systems, or simply learn more about our services, our team is here to support you every step of the way. We believe in building strong, lasting partnerships by delivering exceptional value and transparent communication. <br /> <br /> If you have questions, project inquiries, or need technical assistance, we’d love to hear from you. Reach out to us through our available channels, and a member of our team will respond promptly. Your goals matter to us, and we look forward to helping you achieve them with the expertise, passion, and innovation that define Zach Technologies
                            </p>
                        </div>
                        <div className=" w-[95%] h-[50vh] contact-bg"></div>
                    </div>

                    <div

                        className=" flex flex-col items-center justify-center max-sm:w-[95%] w-[45%] mx-auto h-full max-sm:flex-col"
                    >
                        <div className=" h-fit w-[95%] flex-col items-center justify-center max-sm:w-full ">
                            <label htmlFor="name" className=" text-black text-[14px]">Full Name</label>
                            <input
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                type="text"
                                placeholder="Name"
                                className=" w-full border border-[#00000080] text-black bg-white placeholder:font-light h-[50px] focus:outline-none rounded-full p-2 text-[14px] mb-[20px]"
                            />

                            <label htmlFor="name" className=" text-black text-[14px]">Email Address</label>
                            <input
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                type="email"
                                placeholder="Email"
                                className=" w-full border border-[#00000080] text-black bg-white placeholder:font-light h-[50px] focus:outline-none rounded-full p-2 text-[14px] mb-[20px]"
                            />

                            <label htmlFor="name" className=" text-black text-[14px]">Phone Number</label>
                            <input
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                type="text"
                                placeholder="Phone"
                                className=" w-full border border-[#00000080] text-black bg-white placeholder:font-light h-[50px] focus:outline-none rounded-full p-2 text-[14px] mb-[20px]"
                            />
                        </div>
                        <div className=" h-full w-[95%] flex-col items-center  max-sm:w-full justify-between ">
                            <textarea
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                className="w-full min-h-[167px] resize-none p-2 rounded-xl bg-white placeholder:font-light border border-[#00000080] focus:outline-none"
                                placeholder="Leave message..."
                            />
                        </div>
                        <div className=" w-[95%] mx-auto mt-[10px]">
                            <button
                                onClick={sendEmail}
                                disabled={isLoading}
                                className={`relative text-white w-full text-2xl px-4 py-2 rounded-md bg-[#060348] flex items-center justify-center ${isLoading ? 'bg-[#060348]/50 cursor-not-allowed' : 'hover:bg-[#060348]'
                                    }`}
                            >
                                {isLoading ? (
                                    <span className="loading-spinner w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin"></span>
                                ) : (
                                    "Send Email"
                                )}
                            </button>
                        </div>
                    </div>
                </form>
            </div>
            <div className=" h-[100px] w-full bg-white"></div>
            {/* <Footer /> */}
        </>
    );
};

export default Contact;
