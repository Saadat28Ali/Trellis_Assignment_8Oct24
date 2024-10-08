// Next imports
import Image from "next/image";

export default function PhotoCard(
    {
        image,
        altText,  
        name, 
        designation
    }: 
    {
        image: any, 
        altText: string
        name: string, 
        designation: string, 

    }
) {
    return (
        <div className="
        PhotoCard
        flex-col
        bg-mainAmber
        min-w-[367px]
        m-10
        ">
            <Image src={image} alt={altText} />
            <div className="
            PhotoCard_Caption
            flex-col
            p-8
            ">
                <h2 className="
                font-PoppinsSemiBold
                text-4xl
                "> {name} </h2>

                <p className="
                font-Poppins
                text-xl
                "> {designation} </p>
            </div>
            
        </div>
    );
}