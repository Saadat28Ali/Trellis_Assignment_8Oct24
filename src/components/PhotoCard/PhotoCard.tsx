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
        md:min-w-[300px]
        min-h-[300px]
        justify-start
        m-5
        ">
            <Image 
            src={image} 
            alt={altText} 
            style={{
                objectFit:"cover",
                width: 300, 
                height: 300, 
            }}
            />
            <div className="
            PhotoCard_Caption
            flex-col
            p-8
            ">
                <h2 className="
                font-PoppinsSemiBold
                text-5xl
                "> {name} </h2>

                <p className="
                font-Poppins
                text-2xl
                my-2
                "> {designation} </p>
            </div>
            
        </div>
    );
}