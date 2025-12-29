const HeroSection = () => {
  return (
    <main className="w-full h-208 bg-[url(/public/hgghh-min.jpg)] object-cover bg-center bg-cover  
    flex items-center justify-end ">
      <div className=" container max-w-2xl">
        <div className="p-7.5 flex w-120.25 h-172.5 flex-col justify-center border-2 border-white text-white ">
          <h1 className="text-[60px] font-bold">Interior Renovation</h1>
          <p className="text-xl mt-5">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
            cupidatat non proident.
          </p>
          <button className="border-white border-2 w-50 p-4 rounded-2xl mt-5 font-medium tracking-[2px]">
            LEARN MORE
          </button>
          <p className="mt-5">
            Image from <a href="#"> Freepik</a>
          </p>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
