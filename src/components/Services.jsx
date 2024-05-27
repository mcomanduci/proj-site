import img1 from "../assets/img1.jpg";
import ServicesImg from "./helper/ServicesImg";

function Services() {
  return (
    <div className="bg-[#282A2D]">
      <section className="max-w-[1200px] mx-auto" id="servicos">
        <h2 className="text-3xl text-white text-right -mt-6 relative font-poppins z-10 font-semibold before:w-8 before:h-8 before:bg-[#6B34B2] before:absolute before:-z-10 before:-top-2 before:right-60">
          Conheça nossos <br /> serviços
        </h2>
        <div className="mt-24 pb-[160px] grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-x-20 gap-y-12 w-[900px] mx-auto relative">
          <ServicesImg img={img1} alt="imagem" />
          <div className="h-[890px] w-[1px] bg-[#d9d9d9] opacity-10 left-[286px] absolute"></div>
          <ServicesImg img={img1} alt="imagem" />
          <ServicesImg img={img1} alt="imagem" />
          <div className="h-[1px] w-[900px] bg-[#d9d9d9] opacity-10 top-[440px] absolute"></div>
          <ServicesImg img={img1} alt="imagem" />
          <div className="h-[890px] w-[1px] bg-[#d9d9d9] opacity-10 right-[286px] absolute"></div>
          <ServicesImg img={img1} alt="imagem" />
          <ServicesImg img={img1} alt="imagem" />
        </div>
      </section>
    </div>
  );
}

export default Services;
