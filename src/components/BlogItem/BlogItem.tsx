import Image from "next/image";

export default function BlogItem(
    {
        image, 
        date, 
        category, 
        author, 
        title, 
        description
    }: 
    {
        image: any, 
        date?: string, 
        category?: string, 
        author?: string,
        title: string, 
        description: string
    }
) {
    return (
        <div className="
        BlogItem
        flex-col
        relative
        w-[25em]
        m-5
        ">
            <Image src={image} alt="thumbnail"
            style={{
                width: "25em", 
                height: "16em",
                objectFit: "cover"
            }}
            />
            
            <p className="
            bg-mainAmber
            text-black
            font-PoppinsSemiBold
            flex
            justify-center
            items-center
            w-16
            h-16
            absolute
            text-xl
            text-center
            right-0
            "> {date} </p>
            
            <div className="
            p-5
            border-l-4
            border-l-mainAmber
            flex-col
            items-start
            my-2
            ">
                <p className="
                font-Poppins
                font-bold
                text-fadedBlack
                text-xl
                "> {category?.toUpperCase()} / BY {author?.toUpperCase()} </p>
                
                <h2 className="
                font-PoppinsSemiBold
                text-black
                text-3xl
                "> {title} </h2>

            </div>

            <p className="
            font-Poppins
            font-light
            text-fadedBlackDark
            text-xl
            leading-tight
            "> {description} </p>

        </div>
    );
}