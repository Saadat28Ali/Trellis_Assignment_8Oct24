export default function QuickStat(
    {
        heading, 
        subheading
    }: 
    {
        heading: string, 
        subheading: string
    }
) {
    return (
        <div className="
        QuickStat
        p-10
        flex-col
        gap-5
        text-black
        text-center
        items-center
        mx-10
        ">
            <h1 className="
            QuickStat_Heading
            font-PoppinsSemiBold
            text-7xl
            "> {heading} </h1>

            <h2 className="
            font-bold
            QuickStat_Subheading
            text-fadedBlack
            font-Poppins
            text-xl
            "> {subheading} </h2>

        </div>
    );
}