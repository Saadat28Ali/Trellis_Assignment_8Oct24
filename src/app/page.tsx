import dynamic from "next/dynamic";

import Landing from "@/components/Sections/Landing/Landing";
import BriefAboutUs from "@/components/Sections/BriefAboutUs/BriefAboutUs";
import Services from "@/components/Sections/Services/Services";

const ContactForm = dynamic(() => import("@/components/Sections/ContactForm/ContactForm"), {
  ssr: false
});
// import ContactForm from "@/components/Sections/ContactForm/ContactForm";
import QuickStats from "@/components/Sections/QuickStats/QuickStats";
import Team from "@/components/Sections/Team/Team";
import Testimonials from "@/components/Sections/Testimonials/Testimonials";
import PricePlan from "@/components/Sections/PricePlan/PricePlan";
import Appointment from "@/components/Sections/Appointment/Appointment";
import Blog from "@/components/Sections/Blog/Blog";
import Clients from "@/components/Sections/Clients/Clients";
import Examples from "@/components/Sections/Examples/Examples";
import Footer from "@/components/Sections/Footer/Footer";

export default function Home() {
  return (
    <div className="
    Home
    w-screen
    text-white
    font-Roboto
    flex-col
    overflow-x-clip
    scroll-smooth
    ">
      <Landing />
      <BriefAboutUs />
      <Services />
      <ContactForm />
      <QuickStats />
      <Team />
      <Testimonials />
      <PricePlan />
      <Appointment />
      <Blog />
      <Clients />
      <Examples />
      <Footer />
    </div> 
  );
}
