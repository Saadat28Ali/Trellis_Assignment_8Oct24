// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";
import PricePlanItem from "@/components/PricePlanItem/PricePlanItem";

export default function PricePlan() {
    return (
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
    );
}