// Next imports
import Image from "next/image";

// Asset imports
import client_1 from "@/public/images/clients/client_1.jpeg";
import client_2 from "@/public/images/clients/client_2.jpeg";
import client_3 from "@/public/images/clients/client_3.jpeg";
import client_4 from "@/public/images/clients/client_4.jpeg";

// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";

export default function Clients() {
    return (
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
    );
}