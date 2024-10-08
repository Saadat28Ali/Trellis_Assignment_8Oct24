// React imports
import React, { ReactElement } from "react";

// Next imports
import Image from "next/image";

// Asset imports
import mustache from "../../public/icons/mustache.png";


export default function SectionHeader(
    {
        preheading, 
        heading, 
        children, 
        darkBg, 
        leftAlign
    }: 
    {
        preheading: string, 
        heading: string, 
        children?: Array<ReactElement> | string | undefined, 
        darkBg?: boolean, 
        leftAlign?: boolean
    }
) {
    return (
        <div className={"SectionHeader flex-col " + ((leftAlign) ? "items-start" : "")}>
            <p
            className="
            text-mainAmber
            text-2xl
            font-Roboto
            font-bold
            first-letter:text-3xl

            "> {preheading} </p>

            {
                (!darkBg) ? 
                    <h2 className="
                    Brief_Aboutus_Heading
                    text-fadedBlack
                    font-PoppinsSemiBold
                    text-5xl
                    text-center
                    leading-normal
                    -my-3
                    "> {heading} </h2>
                :
                    <h2 className="
                    Brief_Aboutus_Heading
                    text-white
                    font-PoppinsSemiBold
                    text-5xl
                    text-center
                    leading-normal
                    -my-3
                    "> {heading} </h2>
                
            }
            

            {/* Mustache ornament */}
            <div className="
            Mustache_Row
            ">
                <div className="
                min-w-36
                min-h-0.5
                bg-altAmber
                rounded-full
                "></div>

                <Image className="
                mx-3
                " src={mustache} alt="Mustache Image" />

                <div className="
                min-w-36
                min-h-0.5
                bg-altAmber
                rounded-full
                "></div>

            </div>

            {(children !== undefined) ? children : ""}
        </div>
    );
}