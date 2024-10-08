"use client"

export default function Button({
    text, 
    callback
}: {
    text: string, 
    callback?: Function
}) {
    return (
        <button className="
        Button
        bg-mainAmber
        px-20
        py-6
        my-10
        text-2xl
        text-white
        " onClick={(event) => {
            (callback !== undefined) ? callback(event) : {}
        }}>
            {text}
        </button>
    );
}