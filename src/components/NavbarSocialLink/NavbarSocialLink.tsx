// Next imports
import Image, { StaticImageData } from "next/image";

export default function NavbarSocialLink(
    {
        image, text
    }:
    {
        image: StaticImageData, 
        text?: string
    }
) {
    return (
        <div className="
        NabarSocialLink
        justify-evenly
        mx-2
        ">
            <Image src={image} alt={(text)? text: "social"} style={{
                width: "2em", 
                height: "2em", 
                objectFit: "contain", 
                marginRight: "0 5 0 5", 
            }} />
            <p className="
            font-PoppinsSemiBold
            text-md
            "> {text} </p>
        </div>
    );
}