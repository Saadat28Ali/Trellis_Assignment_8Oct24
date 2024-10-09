export default function Sidebar(
    {
        items
    }: {
        items: Array<string>
    }
) {
    return (
        <div className="
        Sidebar
        h-screen
        w-screen
        bg-fadedBlackDark
        text-white
        font-PoppinsSemiBold
        gap-10
        ">
            {items.map((item: string, index: number) => {
                return (
                    <p key={index} className="
                    "> {item} </p>
                );
            })}
        </div>
    );
}