import TestimonialCard from "./helper/TestimonialCard";
import profile1 from "../assets/profile-1.png";
import profile2 from "../assets/profile-2.png";
import profile3 from "../assets/profile-3.png";
import quotesStart from "../assets/quotes-start.svg";
import quotesEnd from "../assets/quotes-end.svg";

function Testimonial() {
  return (
    <div className="bg-[#282A2D]">
      <section className="w-[1200px] mx-auto flex gap-8 py-20 px-4 relative">
        <img className="absolute top-10 -left-6" src={quotesStart} alt="" />
        <TestimonialCard
          img={profile1}
          alt="picture of patel"
          name="Satish Patel"
          pos="Founder & CEO. Huddle"
        />
        <TestimonialCard
          img={profile2}
          alt="picture of bruce"
          name="Bruce McKenzie"
          pos="Founder & CEO. Fuddle"
        />
        <TestimonialCard
          img={profile3}
          alt="picture of patel"
          name="Satish Patel"
          pos="Founder & CEO. Hubble"
        />
        <img className="absolute bottom-10 -right-6" src={quotesEnd} alt="" />
      </section>
    </div>
  );
}

export default Testimonial;
