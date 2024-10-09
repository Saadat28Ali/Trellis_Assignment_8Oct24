// Next imports
import Image from "next/image";

// Asset imports ------------------------------------------
import example1 from "@/public/images/brief_aboutus/briefaboutus_1.jpeg";
import example2 from "@/public/images/brief_aboutus/briefaboutus_2.jpeg";
import example3 from "@/public/images/brief_aboutus/briefaboutus_3.jpeg";
import barber from "@/public/images/brief_aboutus/barber.png";

// --------------------------------------------------------

// Component imports 
import Button from "@/components/Button/Button";

export default function BriefAboutUs() {
    return (
        <div className="
            Brief_Aboutus
            bg-white
            text-fadedBlack
            flex-col
            md:flex-row
            min-h-screen
            py-10
            ">

            <div className="
            Brief_Aboutus_Left
            flex-col
            w-screen
            md:w-5/12
            ">
                <p
                className="
                text-mainAmber
                text-2xl
                font-Roboto
                font-bold
                first-letter:text-3xl

                "> INTRODUCING </p>

                <h2 className="
                Brief_Aboutus_Heading
                text-fadedBlack
                font-PoppinsSemiBold
                text-5xl
                text-center
                leading-normal
                my-5
                "> 
                BARBERZ... The Barbershop Since 
                1990
                </h2>

                <Image src={barber} alt="Barber Image" />

                <p className="
                Brief_Aboutus_Para
                text-fadedBlack
                font-Roboto
                text-2xl
                text-center
                leading-tight
                m-5
                ">
                Barber is a person whose occupation 
                is mainly to cut dress groom style 
                and shave men&apos;s and boys&apos; hair. 
                A barber&apos;s place of work is known as 
                a &quot;barbershop&quot; or a &quot;barber&apos;s&quot;. 
                Barbershops are also places of social 
                interaction and public discourse. 
                In some instances, barbershops are 
                also public forums.
                </p>

                <Button text="MORE ABOUT US" />

            </div>
            
            <div className="
            Brief_Aboutus_Right
            flex-col
            items-center
            justify-start
            w-screen
            md:w-6/12
            relative
            
            py-10
            md:py-0
            ">

                <Image className="
                Brief_Aboutus_Image3
                md:absolute
                bottom-8
                right-5

                w-7/12
                md:w-[353px]
                md:h-[301px]
                object-cover

                my-2

                rounded-md
                shadow-[0px_8px_20px_2px_rgba(0,0,0,0.4)]
                "
                src={example3} alt="Example 3 Image" />
                
                <Image className="
                md:absolute
                -bottom-72

                w-7/12
                md:w-[370px]
                md:h-[366px]
                object-cover

                my-2

                rounded-md
                shadow-[0px_8px_20px_2px_rgba(0,0,0,0.4)]
                "
                src={example2} alt="Example 2 Image" />
                
                <Image className="
                md:absolute
                -bottom-96
                right-5
                
                w-7/12
                md:w-[276px]
                md:h-[231px]
                object-cover

                my-2

                rounded-md
                shadow-[0px_8px_20px_2px_rgba(0,0,0,0.4)]
                " 
                src={example1} alt="Example 1 Image" />
            </div>
        </div>
    );
}