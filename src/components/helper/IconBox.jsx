function IconBox({ icon }) {
  return (
    <div className="flex flex-col items-center">
      {icon}
      <h3 className="text-white text-2xl font-medium font-poppins leading-normal">Lorem ipsum dolor sit consectetur.</h3>
      <p className="text-[#b0b2b3] text-center font-roboto">
        Lorem ipsum dolor sit amet consectetur. Eleifend ornare orci habitasse
        felis venenatis erat libero sodales eleifend.
      </p>
    </div>
  );
}

export default IconBox;
