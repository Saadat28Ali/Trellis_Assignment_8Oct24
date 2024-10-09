// Next imports
import Image, { StaticImageData } from "next/image";

// Asset imports
import scissorIcon from "../../public/icons/scissor.png";

export default function FooterListItem(
    {
        text, bulletIcon, rotate
    }: 
    {
        text: string, 
        bulletIcon?: StaticImageData, 
        rotate?: number
    }
) {
    return (
        <div className="
        FooterListItem
        gap-5
        my-5
        ">
            <Image src={(bulletIcon) ? bulletIcon : scissorIcon} alt=">" 
            style={{
                width: 30, 
                height: 30, 
                transform: (rotate) ? "rotate(" + rotate + "deg)" : "", 
            }} />

            <p className="
            font-PoppinsSemiBold
            mx-3
            text-xl
            "> {text} </p>
        </div>
    );
}