// Next imports
import Image from "next/image";

// Asset imports
import navbarLogo from "@/public/logos/navbar/navbarlogo_1.png"
import phoneIcon_2 from  "@/public/icons/phone_2.png";
import mailIcon_2 from "@/public/icons/mail_2.png";
import locationIcon from "@/public/icons/location.png";
import facebookIcon from "@/public/icons/facebook.png";
import twitterIcon from "@/public/icons/twitter.png";
import youtubeIcon from "@/public/icons/youtube.png";
import instagramIcon from "@/public/icons/instagram.png";

// Component imports
import FooterListHeader from "@/components/FooterListHeader/FooterListHeader";
import FooterListItem from "@/components/FooterListItem/FooterListItem";

export default function Footer() {
    return(
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
    );
}