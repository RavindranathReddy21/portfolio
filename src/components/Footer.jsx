import { logo, linkedin } from "../assets";
import { styles } from '../styles';
import { motion } from 'framer-motion';
import { useState } from "react";
const Footer = () => {
    const [active, setActive] = useState('');
    const repo = "https://github.com/RavindranathReddy21";
    const linkedinURL = "https://www.linkedin.com/in/kravindranathreddy/";
    return (
        <div className="bg-slate-100 flex items-center h-[60px]">
            <div className="sm:text-slate-850 sm:text-[25px] 
                text-eerieBlack text-[10px] font-mova
                font-extrabold uppercase ml-8">
                Lets Connect
            </div>
            <div onClick={() => {
                setActive('');
                window.open(repo, '_blank');
            }}>
                <img
                    src={logo} // your logo comes here
                    alt="logo"
                    className="sm:w-[50px] sm:h-[40px] w-[45px] h-[45px] object-contain hover:opacity-[0.9] transition ease-in-out delay-150 ml-16"

                />
            </div>

            <div onClick={() => {
                setActive('');
                window.open(linkedinURL, '_blank');
            }}>
                <img
                    src={linkedin} // your logo comes here
                    alt="logo"
                    className="sm:w-[50px] sm:h-[40px] w-[45px] h-[45px] object-contain hover:opacity-[0.9] transition ease-in-out delay-150 ml-8"
                />
            </div>

        </div>
    )

}

export default Footer;