// Next imports
import Link from "next/link";
import Image from "next/image";

// Asset imports --------------------------------------------------

// Navbar
import navbarLogo from "@/public/logos/navbar/navbarlogo_1.png"

// ----------------------------------------------------------------

// Component imports
import Button from "@/components/Button/Button";


export default function Landing() {
      {/* Landing */}
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

            justify-evenly
            items-center
            min-h-24
            w-screen
            sticky
            z-10
            top-0
            ">
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