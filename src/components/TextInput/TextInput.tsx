export default function TextInput(
    {
        placeholder, 
    }:
    {
        placeholder?: string
    }
) {
    return (
        <input className="
        TextInput
        bg-[rgba(0,0,0,0)]
        border-2
        border-white
        font-PoppinsSemiBold
        text-lg
        py-4
        px-2
        placeholder:text-white
        w-6/12
        " type="text"
        placeholder={(placeholder)?placeholder:""} />
    );
}