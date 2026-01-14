import FloatingCircles from "./components/FloatingCircles";

export default function Home() {
  return (
    <main className="relative w-full flex flex-col md:flex-row items-center justify-center px-6 md:px-20 gap-10 overflow-hidden flex-1">
      {/* Background layer */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <FloatingCircles />
      </div>

      {/* Left side: text */}
      <div className="md:w-1/2 flex flex-col justify-center z-10 text-center md:text-left">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow font-serif transition-transform duration-200 hover:scale-110 cursor-default">
          I am Harsimar Singh
        </h1>
        <p className="text-lg md:text-2xl text-gray-700 drop-shadow semibold text-left font-serif transition-transform duration-200 hover:scale-110 cursor-default">
          Based in Davao City, I am currently a 2nd-year Computer Science
          student at Ateneo de Davao University.
        </p>
      </div>

      {/* Right side: image */}
      <div className="md:w-1/2 flex justify-center z-10">
        <div className="flex-none w-[350px] h-[350px] md:w-[600px] md:h-[600px] rounded-full overflow-hidden border-4 border-gray-300">
          <img
            src="https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-6/605720315_1921858428759232_2045225773848376136_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i9fQk1SyR3sQ7kNvwEjoWaf&_nc_oc=AdkRqdG4-kgc3VePFAR3PZA0ZrJ9ANWSKRidCQi7pBRxo9K8hCi3OKw_2IaeAPutIR8&_nc_zt=23&_nc_ht=scontent-mnl3-3.xx&_nc_gid=OsuzI96cPagjBTNZRpG1Ig&oh=00_AfozWXxq1tMmdgg1TIDv1qAGv1xSqE5Onm8inZiCw-v97g&oe=696ABCE3"
            alt="Harsimar Singh"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </main>
  );
}

{
  /*
FONT WEIGHT OPTIONS  
font-thin

font-extralight

font-light

font-normal

font-medium

font-semibold

font-bold

font-extrabold

font-black */
}

{
  /* font size scale
        text-xs

text-sm

text-base

text-lg

text-xl

text-2xl

text-3xl

text-4xl

up to text-9xl */
}
