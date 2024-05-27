function TestimonialCard({ img, alt, name, pos }) {
  return (
    <div className="bg-[#0E1013] rounded p-6 space-y-6">
      <p className="text-white font-roboto text-lg leading-snug  max-w-80">
        Lorem ipsum dolor sit amet. Purus elementum odio diam vestibulum sapien
        risus adipiscing venenatis convallis. Quis sed tellus faucibus purus
        fermentum.
      </p>
      <div className="flex gap-2">
        <img className="max-w-12 " src={img} alt={alt} />
        <div className="flex flex-col gap-0.5 justify-center">
          <p className="text-white font-roboto text-sm font-medium">{name}</p>
          <p className="text-[#aaa] font-roboto text-xs">{pos}</p>
        </div>
      </div>
    </div>
  );
}

export default TestimonialCard;
