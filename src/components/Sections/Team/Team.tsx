// Asset imports
import team1 from "@/public/images/team/team_1.png";
import team2 from "@/public/images/team/team_2.jpeg";
import team3 from "@/public/images/team/team_3.jpeg";
import team4 from "@/public/images/team/team_4.jpeg";
import team5 from "@/public/images/team/team_5.jpeg";

// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import PhotoCard from "@/components/PhotoCard/PhotoCard";

export default function Team() {
    return (
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
    );
}