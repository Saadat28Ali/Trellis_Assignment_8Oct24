// Next imports
import Image from "next/image";

// Asset imports
import example_1 from "@/public/images/examples/example_1.jpeg";
import example_2 from "@/public/images/examples/example_2.jpeg";
import example_3 from "@/public/images/examples/example_3.jpeg";
import example_4 from "@/public/images/examples/example_4.jpeg";
import example_5 from "@/public/images/examples/example_5.jpeg";
import example_6 from "@/public/images/examples/example_6.png";

// Component imports
import SectionHeader from "@/components/SectionHeader/SectionHeader";

export default function Examples() {
    return (
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
    );
}