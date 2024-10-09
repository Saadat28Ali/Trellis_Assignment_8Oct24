// Asset imports
import scissorIcon from "@/public/icons/scissor.png";
import shavingIcon from "@/public/icons/shaving.png";
import hairdyeIcon from "@/public/icons/hairdye.png";
import trimmerIcon from "@/public/icons/trimmer.png";

// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import CardWithText from "@/components/CardWithText/CardWithText";


export default function Services() {
    return (
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
    );
}