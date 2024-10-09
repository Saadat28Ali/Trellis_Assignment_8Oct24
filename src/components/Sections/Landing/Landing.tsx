// Next imports
import Link from "next/link";
import Image from "next/image";

// Asset imports --------------------------------------------------

// Navbar
import navbarLogo from "@/public/logos/navbar/navbarlogo_1.png";
import phoneIcon from "@/public/icons/phone.png";
import mailIcon from "@/public/icons/mail.png";
import facebookIcon from "@/public/icons/facebook.png";
import twitterIcon from "@/public/icons/twitter.png";
import globeIcon from "@/public/icons/globe.png";
import youtubeIcon from "@/public/icons/youtube.png";

// ----------------------------------------------------------------

// Component imports
import Button from "@/components/Button/Button";
import NavbarSocialLink from "@/components/NavbarSocialLink/NavbarSocialLink";


export default function Landing() {
    return (
        <div className="
        Landing
        min-h-[988px]
        bg-[url('../public/images/landing/homebg_1.png')]
        bg-cover

        flex-col
        ">
        <div className="
        Landing_Black_Backdrop
        bg-black
        bg-opacity-70
        min-h-[inherit]
        w-screen

        flex-col
        justify-start
        ">
            {/* Navbar */}
            <div className="
            Landing_Navbar
            bg-black
            bg-opacity-40

            justify-start
            items-center
            min-h-12
            w-screen
            md:sticky
            z-10
            top-0
            flex-col
            p-5
            ">
            
                <div className="
                Landing_Navbar_Socials
                w-screen
                p-2
                flex-wrap
                md:justify-between
                ">
                    <div className="
                    Landing_Navbar_Socials_Left
                    ">
                        <NavbarSocialLink image={phoneIcon} text="+123456789" />
                        <NavbarSocialLink image={mailIcon} text="barberz.123@info.com" />
                    </div>

                    <div className="
                    Landing_Navbar_Socials_Right
                    ">
                        <NavbarSocialLink image={facebookIcon} />
                        <NavbarSocialLink image={twitterIcon} />
                        <NavbarSocialLink image={globeIcon} />
                        <NavbarSocialLink image={youtubeIcon} />
                    </div>
                </div>
            
                <div className="
                Navlinks
                w-screen
                justify-evenly
                items-center
                min-h-[inherit]
                my-5
                md:flex-row
                flex-col
                gap-10
                " 
                > 
                    <Link 
                    className="
                    text-2xl
                    "
                    href="/"> Home </Link>

                    <Link 
                    className="
                    text-2xl
                    "
                    href="/aboutus"> About us </Link>
                    
                    <button 
                    className="
                    text-2xl
                    "
                    > Services </button>

                    <Image 
                    className="
                    text-2xl
                    "
                    src={navbarLogo} width={211} height={54} alt="logo" />

                    <Link 
                    className="
                    text-2xl
                    "
                    href="/team"> Team </Link>

                    <Link 
                    className="
                    text-2xl
                    "
                    href="/booking"> Booking </Link>

                    <Link 
                    className="
                    text-2xl
                    "
                    href="/contactus"> Contact Us </Link>
    
                </div>
            
            </div>

            {/* Landing area text */}
            <div className="
            Landing_Maintext
            h-screen
            flex-col
            ">
            <h1 className="
            Landing_Heading
            text-7xl
            font-PoppinsSemiBold
            font-[600]
            my-8
            mx-16
            xl:mx-0
            text-center
            "> Our Hairstyle Enhances Your Smile!! </h1>

            <p className="
            Landing_Lead_Para
            text-3xl
            mx-16
            md:mx-64
            text-center
            ">
                Our barbershop is the territory created purely 
                for males who appreciate premium quality, time 
                and flawless look.
            </p>

            <Button text="MAKE AN APPOINTMENT"/>
            </div>
        </div>

        </div>
    );
}