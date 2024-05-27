import mainPic from "../assets/heroPic.jpg";

function Hero() {
  return (
    <div className="bg-[#1B1D20] sombra">
      <main className="flex flex-wrap max-w-[1200px] mx-auto pt-16 px-3 gap-16">
        <div data-anime className="max-w-[580px]">
          <img
            className="w-full h-auto block rounded"
            src={mainPic}
            alt="Homem desenhando em um tablet"
          />
        </div>

        <div className="pt-7 max-w-[580px]">
          <h1 className="text-[#feffff] text-3xl max-w-lg font-semibold leading-normal font-poppins">
            Lorem ipsum dolor sit amet,{" "}
            <span className="text-[#9340FF]">consectetur</span> adipiscing elit.
          </h1>
          <p className="text-[#b0b2b3] text-2xl leading-normal max-w-md pt-8 font-roboto">
            Lorem Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor
            sit amet.
          </p>
          <a
            href=""
            className="bg-gradient-to-b from-[#9340ff] to-[#6431a5] px-6 py-3 rounded text-[#f7f7f7] text-3xl leading-normal uppercase text- inline-block font-poppins mt-20 hover:opacity-90"
          >
            Entre em contato
          </a>
        </div>
      </main>
    </div>
  );
}

export default Hero;
