import infoPic from "../assets/info-pic.jpg";

function Info() {
  return (
    <div className="bg-[#1B1D20]">
      <section className="max-w-[1200px] mx-auto grid grid-cols-3 py-20 gap-7" id="info">
        <h3 className="text-[#ddd] font-poppins text-4xl font-semibold leading-snug col-span-2 py-10 pr-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. {" "}
          <span className="text-[#9932F8]">Lorem</span> ipsum dolor sit amet,
          consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
          <span className="text-[#9932F8]"> adipiscing</span> elit. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit.
        </h3>
        <div>
          <img src={infoPic} alt="foto de um laptop em cima de uma mesa" />
        </div>
      </section>
    </div>
  );
}

export default Info;
