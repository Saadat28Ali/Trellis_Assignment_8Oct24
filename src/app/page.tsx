import Link from "next/link";
import Image from "next/image";

// Asset imports --------------------------------------------------

// Navbar
import navbarLogo from "../public/logos/navbar/navbarlogo_1.png"

// Brief About Us
import example1 from "../public/images/brief_aboutus/briefaboutus_1.jpeg";
import example2 from "../public/images/brief_aboutus/briefaboutus_2.jpeg";
import example3 from "../public/images/brief_aboutus/briefaboutus_3.jpeg";
import barber from "../public/images/brief_aboutus/barber.png";

// Services
import scissorIcon from "../public/icons/scissor.png";
import shavingIcon from "../public/icons/shaving.png";
import hairdyeIcon from "../public/icons/hairdye.png";
import trimmerIcon from "../public/icons/trimmer.png";

// Team
import team1 from "../public/images/team/team_1.png";
import team2 from "../public/images/team/team_2.png";
import team3 from "../public/images/team/team_3.png";
import team4 from "../public/images/team/team_4.png";
import team5 from "../public/images/team/team_5.png";

// ----------------------------------------------------------------

// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Button from "@/components/Button/Button";
import CardWithText from "@/components/CardWithText/CardWithText";
import TextInput from "@/components/TextInput/TextInput";
import Select from "@/components/Select/Select";
import QuickStat from "@/components/QuickStat/QuickStat";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

export default function Home() {

  return (
    <div className="
    Home
    w-screen
    text-white
    font-Roboto
    flex-col
    ">

      {/* Landing */}
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
          bg-[#292727B2]
          bg-opacity-70

          justify-evenly
          items-center
          min-h-24
          w-screen
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
            "> Our Hairstyle Enhances Your Smile!! </h1>

            <p className="
            Landing_Lead_Para
            text-3xl
            mx-16
            md:mx-64
            ">
              Our barbershop is the territory created purely 
              for males who appreciate premium quality, time 
              and flawless look.
            </p>

            <Button text="MAKE AN APPOINTMENT"/>
            {/* <button className="
            Landing_Appointment_Button
            bg-mainAmber
            px-20
            py-6
            my-20
            text-2xl
            ">
              MAKE AN APPOINTMENT
            </button> */}
          </div>
        </div>
      </div>

      {/* Brief About Us */}
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
              my-5
              ">
                Barber is a person whose occupation 
                is mainly to cut dress groom style 
                and shave men's and boys' hair. 
                A barber's place of work is known as 
                a "barbershop" or a "barber's". 
                Barbershops are also places of social 
                interaction and public discourse. 
                In some instances, barbershops are 
                also public forums.
              </p>

              <Button text="MORE ABOUT US" />
              {/* <button className="
              Brief_Aboutus_More_Button
              bg-mainAmber
              px-20
              py-6
              my-10
              text-2xl
              text-white
              ">
                MORE ABOUT US
              </button> */}

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

      {/* Services */}
      <div className="
      Services
      min-h-[994px]
      w-screen
      bg-lightAmber
      py-10

      flex-col
      ">
        {/* Heading */}
        <div className="
        Services_Heading
        w-screen
        h-2/5
        flex-col
        ">

          <SectionHeader 
          preheading="SERVICES"
          heading="Our Services"
          />
          
        </div>
        
        {/* Gallery */}
        <div className="
        Services_Gallery
        w-screen
        justify-around
        flex-col
        md:flex-row
        flex-wrap
        ">
          <CardWithText 
          icon={scissorIcon} 
          altText="Scissor_icon"
          title="Hair Cut"
          paragraph="
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna 
            aliqua. Risus feugiat in ante metus dictum 
            at. Dolor sit amet consectetur adipiscing. 
            Et malesuada fames ac turpis egestas. 
            Neque viverra justo nec ultrices dui sapien.
          "
          />

          <CardWithText 
          icon={shavingIcon} 
          altText="Shaving_icon"
          title="Shaving"
          paragraph="
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna 
            aliqua. Risus feugiat in ante metus dictum 
            at. Dolor sit amet consectetur adipiscing. 
            Et malesuada fames ac turpis egestas. 
            Neque viverra justo nec ultrices dui sapien.
          "
          />

          <CardWithText 
          icon={hairdyeIcon} 
          altText="Hairdye_icon"
          title="Hair Color"
          paragraph="
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna 
            aliqua. Risus feugiat in ante metus dictum 
            at. Dolor sit amet consectetur adipiscing. 
            Et malesuada fames ac turpis egestas. 
            Neque viverra justo nec ultrices dui sapien.
          "
          />

          <CardWithText 
          icon={trimmerIcon} 
          altText="Trimmer_icon"
          title="Beard Trim"
          paragraph="
            Lorem ipsum dolor sit amet, consectetur 
            adipiscing elit, sed do eiusmod tempor 
            incididunt ut labore et dolore magna 
            aliqua. Risus feugiat in ante metus dictum 
            at. Dolor sit amet consectetur adipiscing. 
            Et malesuada fames ac turpis egestas. 
            Neque viverra justo nec ultrices dui sapien.
          "
          />
        </div>
      
      </div>
      
      {/* Contact Form */}
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
            <SectionHeader
            preheading="CONTACT" 
            heading="Get In Touch"
            darkBg
            leftAlign
            />
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
          md:w-7/12
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
              "> Make an Appointment </h2>

              <p className="
              text-white
              font-roboto
              text-3xl

              mb-20
              ">
                Barber is a person whose occupation 
                is mainly to cut dress groom
              </p>

              <form className="
              Appointment_Form
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
                ">
                  <Select placeholder="Services" options={[]} />
                  <Select placeholder="Choose Barber" options={[]} />
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="
      Quick_Stats
      bg-lightAmber
      w-screen
      min-h-[344px]
      justify-evenly

      lg:flex-row
      flex-col
      ">
        <QuickStat heading="2000+" subheading="HAPPY CLIENTS" />
        <Image src={scissorIcon} alt="Scissor_icon" width={93} height={93} />
        <QuickStat heading="500" subheading="HAIR CUTS" />
        <Image src={scissorIcon} alt="Scissor_icon" width={93} height={93} />
        <QuickStat heading="150" subheading="STYLERS" />
        <Image src={scissorIcon} alt="Scissor_icon" width={93} height={93} />
        <QuickStat heading="35" subheading="BRANCHES" />
      </div>

      <div className="
      Team
      flex-col
      items-center
      w-screen
      min-h-screen
      ">
        <SectionHeader preheading="SPECIALISTS" heading="Our Team" />
        
        <div className="
        Team_Gallery
        w-11/12
        overflow-x-scroll
        justify-start
        bg-neutral-100
        my-10
        ">

          <PhotoCard 
          image={team1} 
          altText="David_image"
          name="DAVID" 
          designation="Hair Cut Specialist"/>

          <PhotoCard 
          image={team1} 
          altText="David_image"
          name="DAVID" 
          designation="Hair Cut Specialist"/>

          <PhotoCard 
          image={team1} 
          altText="David_image"
          name="DAVID" 
          designation="Hair Cut Specialist"/>

          <PhotoCard 
          image={team1} 
          altText="David_image"
          name="DAVID" 
          designation="Hair Cut Specialist"/>

          <PhotoCard 
          image={team1} 
          altText="David_image"
          name="DAVID" 
          designation="Hair Cut Specialist"/>

        </div>
      </div>
    </div>
  );
}
