// Next imports
import Image, { StaticImageData } from "next/image";

export default function CardWithText(
    {
        icon,
        altText, 
        title, 
        paragraph
    }:
    {
        icon?: StaticImageData, 
        altText: string, 
        title: string, 
        paragraph: string
    }
) {
    return (
        <div className="
        CardWithText
        bg-white
        text-fadedBlack
        flex-col
        w-screen
        md:w-80
        rounded-xl
        p-5
        text-center
        my-5
        ">
            {
                (icon !== undefined) ? (
                    (<Image src={icon} alt={altText} />)
                ) : <></>
            }
            
            <h2 className="
            font-bold
            font-Roboto
            text-3xl
            my-5
            "> {title} </h2>

            <p className="
            font-light
            font-Roboto
            text-lg
            leading-tight
            "> {paragraph} </p>

            <button className="
            text-altAmber
            font-Roboto
            font-bold
            text-2xl
            border-[3px]
            border-altAmber
            px-4
            py-3
            rounded-xl
            m-5
            ">
                READ MORE
            </button>
        </div>
    );
}