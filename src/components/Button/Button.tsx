"use client"

export default function Button({
    text, 
    callback
}: {
    text: string, 
    callback?: (...args) => void
}) {
    return (
        <button className="
        Button
        bg-mainAmber
        px-16
        py-8
        my-20
        text-3xl
        text-white
        " onClick={(event) => {
            if (callback !== undefined) {
                callback(event);
            }
            // (callback !== undefined) ? callback(event) : {}
        }}>
            {text}
        </button>
    );
}