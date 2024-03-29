import logo from "../../assets/images/site-logo.png";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { services, quickLinks, about, helps } from "./footerData";

const socialIcons = [
    {
        id: 1,
        icon: <FaFacebookF />,
        title: "Facebook",
        link: "https://www.facebook.com"
    },
    {
        id: 2,
        icon: <FaInstagram />,
        title: "Instagram",
        link: "https://www.instagram.com"
    },
    {
        id: 3,
        icon: <FaTwitter />,
        title: "Twitter",
        link: "https://twitter.com"
    },
    {
        id: 4,
        icon: <FaYoutube />,
        title: "Youtube",
        link: "https://youtube.com"
    }
]

const Footer = () => {
    return (
        <div className="bg-stone">
            <div className="py-14 ml-4 md:mx-20 font-rubik">
                <img src={logo} alt="logo" className="w-40 mb-2" />

                <hr className="border-gray mb-12" />

                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                    <div className="mb-6">
                        <p className="font-righteous text-2xl">Subscribe Our <br /> Newsletter</p>
                        <div className="my-3">
                            <div className="flex items-center">
                                <input className="bg-stone border-b border-black p-1 focus:outline-none w-3/5" type="text" name="" id="" placeholder="Enter you email" />
                                <button className="ml-3 text-3xl bg-yellow border border-black rounded-full p-1 hover:border-white text-amber">
                                    <IoIosArrowRoundForward />
                                </button>
                            </div>
                            <div className="mt-4 flex gap-4">
                                {socialIcons.map((icon) =>
                                    <a key={icon.id} href="" target="_blank">
                                        <button className="p-2.5 text-xl text-amber border border-black rounded-full hover:bg-yellow hover:border-white ease-in duration-300" title={icon.title}>
                                            {icon.icon}
                                        </button>
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="mb-6 xl:ml-20">
                        <p className="font-righteous text-2xl mb-3">Service</p>
                        <div className="flex flex-col gap-2">
                            {
                                services.map((service, idx) =>
                                    <a className="cursor-pointer text-gray hover:text-black hover:underline" key={idx} href="">
                                        {service.title}
                                    </a>
                                )}
                        </div>
                    </div>

                    <div className="mb-6 xl:ml-20">
                        <p className="font-righteous text-2xl mb-3">Quick Links</p>
                        <div className="flex flex-col">
                            {quickLinks.map((link, idx) =>
                                <a className="cursor-pointer text-gray hover:text-black hover:underline" key={idx} href="">{link.title}</a>
                            )}
                        </div>
                    </div>

                    <div className="mb-6 xl:ml-20">
                        <p className="font-righteous text-2xl mb-3">About</p>
                        <div className="flex flex-col">
                            {about.map((about, idx) =>
                                <a className="cursor-pointer text-gray hover:text-black hover:underline" key={idx} href="">{about.title}</a>
                            )}
                        </div>
                    </div>

                    <div className="mb-6 xl:ml-20">
                        <p className="font-righteous text-2xl mb-3">Help</p>
                        <div className="flex flex-col">
                            {helps.map((help, idx) =>
                                <a className="cursor-pointer text-gray hover:text-black hover:underline" key={idx} href="">{help.title}</a>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
