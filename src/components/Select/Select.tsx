export default function Select(
    {
        placeholder, 
        options
    }:
    {
        placeholder: string, 
        options: Array<string>
    }
) {
    return (
        <select className="        
        Select
        bg-[rgba(0,0,0,0)]
        border-2
        border-white
        font-PoppinsSemiBold
        text-lg
        py-4
        px-2
        placeholder:text-white
        w-6/12
        ">
            <option 
            className="Select_Option"
            key={-1}
            value=""
            >
                {placeholder}
            </option>
            {options.map((item: string, index: number) => {
                return (
                    <option 
                    className="Select_Option"
                    key={index}
                    value={item}>
                        {item}
                    </option>
                );
            })}
        </select>
    );
}