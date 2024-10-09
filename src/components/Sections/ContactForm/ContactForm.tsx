"use client"

// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import TextInput from "@/components/TextInput/TextInput";
import Select from "@/components/Select/Select";
import Button from "@/components/Button/Button";

export default function ContactForm() {
    return (
        <div className="
        Contact_Form
        bg-[url('../public/images/contact_form/contactformbg.jpeg')]
        w-screen
        min-h-[769px]
        bg-cover
        ">
            <div className="
            Contact_Form_Black_Backdrop
            bg-black
            bg-opacity-70
            min-h-[inherit]
            w-screen
            flex-col
            md:flex-row
            justify-start

            ">

            <div className="
            Contact_Form_Left
            flex-col
            w-screen
            grow
            my-10
            ">
                <div className="
                justify-start
                w-full
                h-full
                px-16
                ">
                    <SectionHeader
                    preheading="CONTACT" 
                    heading="Get In Touch"
                    darkBg
                    leftAlign={window.innerWidth > 768}
                    />
                </div>
                
                <p className="
                font-Roboto
                text-white
                text-xl
                mx-16
                ">
                Suspendisse pretium felis dolor, sed 
                placerat diam blandit vitae. Sed eu 
                nisl massa. Phasellus vehicula 
                tristique orci ut ultrices. Duis eu 
                libero augue. In vulputate sodales 
                tempus. Phasellus dolor orci, 
                consectetur in tincidunt eget, 
                consectetur non orci. 
                </p>
            </div>

            <div className="
            Contact_Form_Right
            bg-[url('../public/images/contact_form/worldmap.png')]
            bg-cover
            md:w-9/12
            min-h-[769px]
            ">
                <div className="
                Contact_Form_Right_Black_Backdrop
                flex-col
                min-h-[769px]
                bg-black
                bg-opacity-50
                px-10
                ">
                <h2 className="
                text-mainAmber
                font-PoppinsSemiBold
                text-5xl
                my-5
                text-center
                "> Make an Appointment </h2>

                <p className="
                text-white
                font-roboto
                text-3xl
                text-center

                mb-20
                ">
                    Barber is a person whose occupation 
                    is mainly to cut dress groom
                </p>

                <form className="
                Appointment_Form
                flex
                flex-col
                items-center
                ">
                    <div className="
                    Appointment_Form_Row
                    gap-5
                    my-5
                    ">
                    <TextInput placeholder="Name"/>
                    <TextInput placeholder="Email"/>
                    </div>

                    <div className="
                    Appointment_Form_Row
                    gap-5
                    my-5
                    ">
                    <TextInput placeholder="Phone"/>
                    <TextInput placeholder="Time"/>
                    </div>

                    <div className="
                    Appointment_Form_Row
                    gap-5
                    my-5
                    w-full
                    ">
                    <Select placeholder="Services" options={[]} />
                    <Select placeholder="Choose Barber" options={[]} />
                    </div>

                    <Button text="MAKE AN APPOINTMENT" />
                </form>
                </div>
            </div>
            </div>
        </div>
    );
}