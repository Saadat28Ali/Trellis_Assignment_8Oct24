export default function PricePlanItem(
    {
        heading, 
        description, 
        price
    }: 
    {
        heading: string, 
        description?: string, 
        price: number
    }
) {
    return (
        <div className="
        PricePlanItem
        flex-col
        w-screen
        md:w-full
        my-5
        p-10
        ">
            <div className="
            PricePlanItem_Row
            my-5
            justify-between
            w-full
            ">
                <h2 className="
                font-PoppinsSemiBold
                text-fadedBlack
                text-4xl
                mr-10
                ">
                    {heading}
                </h2>

                <div className="
                max-h-2
                w-5
                border-altAmber
                border-2
                border-dashed
                flex-grow
                ">
                </div>

                <div className="
                font-PoppinsSemiBold
                text-altAmber
                text-5xl
                ml-10
                ">
                    ${price}
                </div>

            </div>


            <div className="
            PricePlanItem_Row
            ">
                <div className="
                    font-Roboto
                    text-fadedBlack
                    text-2xl
                    ">
                        {description}
                </div>
            </div>

        </div>
    );
}