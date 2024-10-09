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
import team2 from "../public/images/team/team_2.jpeg";
import team3 from "../public/images/team/team_3.jpeg";
import team4 from "../public/images/team/team_4.jpeg";
import team5 from "../public/images/team/team_5.jpeg";

// Testimonials
import testimonial_1 from "../public/images/testimonials/testimonial_1.jpeg";
import testimonial_2 from "../public/images/testimonials/testimonial_2.png";

// Blog
import blog_1 from "../public/images/blog/blog_1.jpeg";
import blog_2 from "../public/images/blog/blog_2.jpeg";
import blog_3 from "../public/images/blog/blog_3.jpeg";

// Clients
import client_1 from "../public/images/clients/client_1.jpeg";
import client_2 from "../public/images/clients/client_2.jpeg";
import client_3 from "../public/images/clients/client_3.jpeg";
import client_4 from "../public/images/clients/client_4.jpeg";

// Examples 
import example_1 from "../public/images/examples/example_1.jpeg";
import example_2 from "../public/images/examples/example_2.jpeg";
import example_3 from "../public/images/examples/example_3.jpeg";
import example_4 from "../public/images/examples/example_4.jpeg";
import example_5 from "../public/images/examples/example_5.jpeg";
import example_6 from "../public/images/examples/example_6.png";

// Footer
import phoneIcon_2 from  "../public/icons/phone_2.png";
import mailIcon_2 from "../public/icons/mail_2.png";
import locationIcon from "../public/icons/location.png";
import facebookIcon from "../public/icons/facebook.png";
import twitterIcon from "../public/icons/twitter.png";
import youtubeIcon from "../public/icons/youtube.png";
import instagramIcon from "../public/icons/instagram.png";

// ----------------------------------------------------------------

// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import Button from "@/components/Button/Button";
import CardWithText from "@/components/CardWithText/CardWithText";
import TextInput from "@/components/TextInput/TextInput";
import Select from "@/components/Select/Select";
import QuickStat from "@/components/QuickStat/QuickStat";
import PhotoCard from "@/components/PhotoCard/PhotoCard";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";
import PricePlanItem from "@/components/PricePlanItem/PricePlanItem";
import BlogItem from "@/components/BlogItem/BlogItem";
import FooterListHeader from "@/components/FooterListHeader/FooterListHeader";
import FooterListItem from "@/components/FooterListItem/FooterListItem";

export default function Home() {

  return (
    <div className="
    Home
    w-screen
    text-white
    font-Roboto
    flex-col
    overflow-x-clip
    scroll-smooth
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

      {/* Team */}
      <div className="
      Team
      flex-col
      items-center
      w-screen
      min-h-screen

      py-20
      ">
        <SectionHeader preheading="SPECIALISTS" heading="Our Team" />
        
        <div className="
        Team_Gallery
        w-11/12
        overflow-x-scroll
        justify-start
        bg-neutral-100
        scroll-smooth
        my-10
        ">

          <PhotoCard 
          image={team1} 
          altText="David_image"
          name="DAVID" 
          designation="Hair Cut Specialist"/>

          <PhotoCard 
          image={team2} 
          altText="Paul_image"
          name="PAUL" 
          designation="Beard & Trimming"/>

          <PhotoCard 
          image={team3} 
          altText="Charlie_image"
          name="CHARLIE" 
          designation="Hair Color Specialist"/>

          <PhotoCard 
          image={team4} 
          altText="Adam_image"
          name="ADAM" 
          designation="Hair Cut Specialist"/>

          <PhotoCard 
          image={team5} 
          altText="Tristan_image"
          name="TRISTAN" 
          designation="Beard & Trimming"/>

        </div>
      </div>

      {/* Testimonials */}
      <div className="
      Testimonials
      bg-[url('../public/images/testimonials/testimonialsbg.jpeg')]
      bg-cover
      min-h-[1013px]
      w-screen
      ">
        <div className="
        Testimonial_Black_Backdrop
        bg-black
        bg-opacity-70
        w-screen
        min-h-[inherit]
        flex-col
        py-10
        ">
          <SectionHeader 
          preheading="TESTIMONIALS" 
          heading="Hear From Our Customers" 
          darkBg
          />
          
          <div className="
          Testimonial_Display
          justify-evenly
          flex-col
          lg:flex-row
          gap-5
          mt-20
          ">
            <TestimonialCard 
            name="Robert Fox"
            designation="Writer"
            stars={4}
            reviewPara="Just came back to home and 
            should say that it is definitely a great 
            experience. I would recommend it for 
            everyone who needs a bike for a short 
            term or want to to"
            image={testimonial_1}
            />

            <TestimonialCard 
            name="Marvin McKinney"
            designation="Businessman"
            stars={5}
            reviewPara="Amazing service! Claire 
            helped me to reduce the shipping price a 
            little and shipped it immediately after 
            purchasing. The amethyst cave I got is a 
            beauty and I c..."
            image={testimonial_2}
            />

          </div>
        </div>
        
      </div>

      {/* Price Plan */}
      <div className="
      PricePlan
      w-screen
      min-h-[994px]
      bg-lightAmber
      text-fadedBlack
      flex-col
      py-20
      ">
        <SectionHeader
        preheading=""
        heading="Barbershop Pricing Plan" />

        <div className="
        flex-col
        lg:flex-row
        justify-evenly
        w-screen
        ">
          <div className="
          PricePlan_Left
          flex-col
          w-5/12
          justify-start
          ">

            <PricePlanItem
            heading="Hair Cut"
            price={10}
            description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint."
            />

            <PricePlanItem
            heading="Hair Styling"
            price={25}
            description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint."
            />

            <PricePlanItem
            heading="Hair Trimming"
            price={30}
            description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint."
            />

            <PricePlanItem
            heading="Kids Hair Cut"
            price={15}
            description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint."
            />

          </div>

          <div className="
          PricePlan_Right
          flex-col
          w-5/12
          justify-start
          ">

            <PricePlanItem
            heading="Shaving"
            price={40}
            description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint."
            />

            <PricePlanItem
            heading="Beard Trimming"
            price={25}
            description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint."
            />

            <PricePlanItem
            heading="Face Cleaning"
            price={60}
            description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint."
            />

            <PricePlanItem
            heading="Hair Cut"
            price={12}
            description="Amet minim mollit non deserunt 
            ullamco est sit aliqua dolor do amet sint."
            />

          </div>
        </div>

        <button className="
        bg-altAmber
        p-7
        rounded-2xl
        text-white
        font-Roboto
        text-2xl
        mt-10
        ">
          VIEW MORE
        </button>
      </div>

      {/* Appointment */}
      <div className="
      Appointment
      bg-[url('../public/images/appointment/appointmentbg.jpeg')]
      w-screen
      min-h-[761px]
      bg-cover
      ">
        
        <div className="
        bg-black
        bg-opacity-30
        w-screen
        min-h-[inherit]
        flex-col
        py-10
        ">
          
          <p className="
          font-Roboto
          text-4xl
          text-mainAmber
          my-10
          "> BEST BARBERSHOP IN THE CITY  </p>
          
          <h1 className="
          font-Prata
          text-8xl
          text-center
          my-10
          w-10/12
          leading-snug
          "> Making You Look Good Is In Our Heritage. </h1>
          
          <p className="
          font-Poppins
          text-4xl
          w-10/12
          text-center
          my-10
          "> 
            Barber is a person whose occupation is 
            mainly to cut dress groome style and 
            shave men’s and boy’s hair 
          </p>

          <Button text="MAKE AN APPOINTMENT" />

        </div>

      </div>

      {/* Blog */}
      <div className="
      Blog
      flex-col
      py-20
      ">
        <SectionHeader 
        preheading="News From Blog" 
        heading="What's On Our Mind"
        />

        <div className="
        flex-row
        justify-evenly
        flex-wrap
        ">

          <BlogItem 
          image={blog_1}
          date="Mar 20"
          category="Beard Styles"
          author="Admin"
          title="The Best Barbershop In The Town"
          description="
          Amet minim mollit non deserunt ullamco 
          est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit 
          mollit. 
          "
          />

          <BlogItem 
          image={blog_2}
          date="Apr 25"
          category="Beard Styles"
          author="Admin"
          title="The Best Barbershop In The Town"
          description="
          Amet minim mollit non deserunt ullamco 
          est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit 
          mollit. 
          "
          />

          <BlogItem 
          image={blog_3}
          date="Jun 12"
          category="Beard Styles"
          author="Admin"
          title="The Best Barbershop In The Town"
          description="
          Amet minim mollit non deserunt ullamco 
          est sit aliqua dolor do amet sint. 
          Velit officia consequat duis enim velit 
          mollit. 
          "
          />

        </div>
      </div>

      {/* Clients */}
      <div className="
      Clients
      justify-evenly
      w-screen
      py-10
      flex-col

      ">
        <SectionHeader preheading="" heading="Our Clients" />

        <div className="
        flex-wrap
        gap-2
        w-screen
        justify-evenly
        ">
          <Image src={client_1} alt={"client1"} 
          width={400} height={400}
          />
          <Image src={client_2} alt={"client2"} 
          width={400} height={400}
          />
          <Image src={client_3} alt={"client3"} 
          width={400} height={400}
          />
          <Image src={client_4} alt={"client4"} 
          width={400} height={400}
          />
        </div>
      </div>

      {/* Examples */}
      <div className="
      Examples
      py-10
      flex-col
      ">
        <SectionHeader preheading="" heading="Our Work" />

        <div className="
        ExamplesDisplay
        flex-wrap
        gap-10
        p-10
        ">

          <Image src={example_1} alt="example1"
          style={{
            width: "25em", 
            height: "25em", 
            objectFit: "cover", 
            margin: "1vw"
          }}
          />

          <Image src={example_2} alt="example1"
          style={{
            width: "25em", 
            height: "25em", 
            objectFit: "cover", 
            margin: "1vw"
          }}
          />

          <Image src={example_3} alt="example1"
          style={{
            width: "25em", 
            height: "25em", 
            objectFit: "cover", 
            margin: "1vw"
          }}
          />

          <Image src={example_4} alt="example1"
          style={{
            width: "25em", 
            height: "25em", 
            objectFit: "cover", 
            margin: "1vw"
          }}
          />

          <Image src={example_5} alt="example1"
          style={{
            width: "25em", 
            height: "25em", 
            objectFit: "cover", 
            margin: "1vw"
          }}
          />

          <Image src={example_6} alt="example1"
          style={{
            width: "25em", 
            height: "25em", 
            objectFit: "cover", 
            margin: "1vw"
          }}
          />
        </div>
      </div>

      {/* Footer */}
      <div className="
      Footer
      justify-evenly
      bg-[url('../public/images/footer/footerbg.png')]
      min-h-[490px]
      w-screen
      items-start
      py-28
      flex-col
      ">
        <div className="
        Footer_Row
        flex-col
        items-center
        lg:flex-row
        lg:items-start
        gap-20
        w-screen
        "> 
          <div className="
          Footer_Left
          w-screen
          lg:w-4/12
          flex-col
          ">
            
            <Image src={navbarLogo} alt="Logo" 
            style={{
              width: "300px", 
              height: "auto"
            }} />
            
            <p className="
            font-Poppins
            text-white
            text-xl
            w-8/12
            text-center
            my-5
            ">
              There are many variations of passages 
              of lorem ipsum available, but the 
              majority have suffered alteration in some 
              form.
            </p>
          
            <form
            className="
            flex
            flex-col
            items-center
            "
            >
              <input type="email" placeholder="Email*" 
              className="
              font-Poppins
              font-bold
              text-fadedBlackDark
              placeholder:text-fadedBlackDark
              bg-white
              text-xl
              px-5
              py-2
              my-5
              w-10/12
              "
              />
              <button className="
              bg-altAmber
              border-2
              border-white
              rounded-full
              font-Poppins
              font-bold
              text-white
              text-2xl
              w-[8em]
              py-1
              "> SUBSCRIBE </button>
            </form>
          </div>

          <div className="
          Footer_Mid
          font-PoppinsSemiBold
          w-screen
          lg:w-4/12
          items-start
          justify-evenly
          gap-20
          ">
            
            <div className="
            Footer_Mid_Left
            flex-col
            items-center
            lg:items-start
            w-6/12
            ">
              <FooterListHeader 
              preheading="" 
              heading="QUICK LINKS" 
              footer 
              darkBg
              />
              <FooterListItem text="HOME" rotate={90}/>
              <FooterListItem text="ABOUT US" rotate={90}/>
              <FooterListItem text="GALLERY" rotate={90}/>
              <FooterListItem text="CONTACT US" rotate={90}/>
            </div>
            
            <div className="
            Footer_Mid_Right
            flex-col
            items-center
            lg:items-start
            w-6/12
            ">
              <FooterListHeader 
              preheading="" 
              heading="SERVICES" 
              footer 
              darkBg
              />
              <FooterListItem text="HAIR" rotate={90}/>
              <FooterListItem text="BEAUTY" rotate={90}/>
              <FooterListItem text="SPA" rotate={90}/>
              <FooterListItem text="MASSAGE" rotate={90}/>
            </div>
          
          </div>

          <div className="
          Footer_Right
          flex-col
          items-center
          lg:items-start
          w-4/12
          justify-start
          ">
            
            <FooterListHeader 
            preheading=""
            heading="CONTACT" 
            darkBg/>
            
            <FooterListItem 
            text="+4125987645" 
            bulletIcon={phoneIcon_2} 
            rotate={0} />
            
            <FooterListItem 
            text="barberz.123@info.com" 
            bulletIcon={mailIcon_2} 
            rotate={0} />
            
            <FooterListItem 
            text="
            GOLDEN STREET, CHINATOWN, SAN FRANCISCO
            " 
            bulletIcon={locationIcon} 
            rotate={0} />

            <div className="
            Footer_Right_Socials
            justify-evenly
            gap-10
            my-10
            ">
              <Image src={facebookIcon} alt={"facebook"} 
              style={{
                backgroundColor: "#D9A536", 
                padding: "0.5em", 
                width: "3em", 
                height: "3em"
              }}
              />
              <Image src={twitterIcon} alt={"twitter"} 
              style={{
                backgroundColor: "#D9A536", 
                padding: "0.5em", 
                width: "3em", 
                height: "3em"
              }}
              />
              <Image src={youtubeIcon} alt={"youtube"} 
              style={{
                backgroundColor: "#D9A536", 
                padding: "0.5em", 
                width: "3em", 
                height: "3em"
              }}
              />
              <Image src={instagramIcon} alt={"instagram"} 
              style={{
                backgroundColor: "#D9A536", 
                padding: "0.5em", 
                width: "3em", 
                height: "3em"
              }}
              />
            </div>
          </div>
        </div>
        <div className="
          Footer_Row
          w-screen
          font-Poppins
          text-xl
          ">
          Copyright &#169; 2021 All Rights Reserved
        </div>

      </div>
    </div> 
  );
}
