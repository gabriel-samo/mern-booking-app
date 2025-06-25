const Hero = () => {
  return (
    <div className="pt-8 pb-16">
      <div className="container mx-auto flex flex-col gap-2">
        <p className="text-2xl leading-none tracking-tight text-center text-dark font-medium">
          Search low prices for hotels for your dream vacation
        </p>
        <h1 className="text-[15vw] text-dark font-normal leading-none tracking-tight text-center whitespace-nowrap">
          dream stay
        </h1>
        <div className="container mx-auto bg-accent/5 h-[500px] rounded-[4rem] backdrop-blur-lg relative -top-12" />
      </div>
    </div>
  );
};

export default Hero;
