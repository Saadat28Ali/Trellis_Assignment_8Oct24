"use client";

// React imports
import { useEffect } from "react";

// Next imports
import Image from "next/image";

// Asset imports
import doubleQuotes from "../../public/icons/doublequote.png";
import star from "../../public/icons/star.png";
import emptyStar from "../../public/icons/emptystar.png";

export default function TestimonialCard(
    {
        name, 
        designation, 
        stars, 
        reviewPara, 
        image
    }: 
    {
        name: string, 
        designation?: string, 
        stars?: number, 
        reviewPara: string, 
        image: any
    }
) {

    let starsArray: Array<any> = []

    if (stars !== undefined) {
        for (let index=0; index<5; index++) {
            if (index < stars) {
                starsArray.push(star);
            } else {
                starsArray.push(emptyStar);
            }
        }    
    }

    // console.log(starsArray);
    
    return (
        <div className="
        TestimonialCard
        bg-fadedBlackDark
        p-10
        w-screen
        lg:w-5/12
        lg:min-h-64
        gap-10
        relative
        lg:rounded-xl
        items-start
        ">
            <div className="
            TestimonialCard_Left
            w-full
            ">
                <Image src={image} alt={name} 
                style={{
                    width: "200%", 
                    height: "200%", 
                    objectFit: "cover", 
                    borderRadius: "100vw", 
                }} />
            </div>
            
            <div className="
            TestimonialCard_Right
            flex-col
            items-start
            ">
                <p className="
                font-PoppinsSemiBold
                text-xl
                text-pretty
                
                h-64
                ">
                    {reviewPara}
                </p>

                <h1 className="
                font-PoppinsSemiBold
                text-4xl
                text-altAmber
                my-1
                "> {name} </h1>

                <p className="
                font-Poppins
                text-2xl
                my-1
                "> {designation} </p>

                <div className="
                my-1
                text-2xl
                "> 
                {starsArray.map((item, index) => {
                        return (

                        <Image key={index} src={item} alt={"star"}
                        style={{
                            width: 20, 
                            height: 20, 
                            margin: 2
                        }}
                        />
                    );
                })} </div>

            </div>
            
            <Image src={doubleQuotes} alt="" 
            style={{
                width: "6em", 
                height: "6em", 
                objectFit: "contain", 
                position: "absolute", 
                right: "2em", 
                bottom: "1em",
                transform: "rotate(180deg)"
            }}
            />
        </div>
    );
}