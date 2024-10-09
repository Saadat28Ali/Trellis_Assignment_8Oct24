// Asset imports
import scissorIcon from "@/public/icons/scissor.png";

// Component imports
import QuickStat from "@/components/QuickStat/QuickStat";
import Image from "next/image";

export default function QuickStats() {
    return (
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
    );
}