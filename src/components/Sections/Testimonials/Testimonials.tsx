// Asset imports
import testimonial_1 from "@/public/images/testimonials/testimonial_1.jpeg";
import testimonial_2 from "@/public/images/testimonials/testimonial_2.png";

// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import TestimonialCard from "@/components/TestimonialCard/TestimonialCard";

export default function Testimonials() {
    return (
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
    );
}