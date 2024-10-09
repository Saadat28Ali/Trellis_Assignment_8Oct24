// Component imports
import Button from "@/components/Button/Button";

export default function Appointment() {
    return (
        <div className="
        Appointment
        bg-[url('../public/images/appointment/appointmentbg.jpeg')]
        w-screen
        min-h-[761px]
        bg-cover
        ">
          
          <div className="
          bg-black
          bg-opacity-30
          w-screen
          min-h-[inherit]
          flex-col
          py-10
          ">
            
            <p className="
            font-Roboto
            text-4xl
            text-mainAmber
            my-10
            "> BEST BARBERSHOP IN THE CITY  </p>
            
            <h1 className="
            font-Prata
            text-8xl
            text-center
            my-10
            w-10/12
            leading-snug
            "> Making You Look Good Is In Our Heritage. </h1>
            
            <p className="
            font-Poppins
            text-4xl
            w-10/12
            text-center
            my-10
            "> 
              Barber is a person whose occupation is 
              mainly to cut dress groome style and 
              shave men’s and boy’s hair 
            </p>
  
            <Button text="MAKE AN APPOINTMENT" />
  
          </div>
  
        </div>
    );
}