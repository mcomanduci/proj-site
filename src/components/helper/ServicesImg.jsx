function ServicesImg({ img, alt }) {
  return (
    <div className="relative text-white hover:text-black bg-white rounded h-[420px] overflow-hidden">
      <img className="block w-full rounded bg-white transition-all duration-500 hover:opacity-60 hover:scale-105" src={img} alt={alt} />
      <h3 className="absolute bottom-6 left-6 font-medium text-3xl leading-normal max-w-48 font-poppins">
        Criação de identidade visual
      </h3>
    </div>
  );
}

export default ServicesImg;
