import FloatingCircles from "./components/FloatingCircles";

export default function Home() {
  return (
    <main className="relative flex flex-col md:flex-row items-center justify-center min-h-[70vh] px-6 md:px-20 gap-10 overflow-hidden text-white bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500">
      {/* Floating circles */}
      <FloatingCircles />

      {/* Left side: text */}
      <div className="md:w-1/2 flex flex-col justify-center z-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-lg">
          I am Harsimar Singh
        </h1>
        <p className="text-lg md:text-xl text-gray-100 drop-shadow">
          Based in Davao City, I am currently a 2nd-year Computer Science
          student at Ateneo de Davao University.
        </p>
      </div>

      {/* Right side: image */}
      <div className="md:w-1/2 flex justify-center z-10">
        <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-gray-300">
          <img
            src="https://scontent-mnl3-3.xx.fbcdn.net/v/t39.30808-6/605720315_1921858428759232_2045225773848376136_n.jpg?stp=cp6_dst-jpg_tt6&_nc_cat=101&ccb=1-7&_nc_sid=127cfc&_nc_ohc=i9fQk1SyR3sQ7kNvwEjoWaf&_nc_oc=AdkRqdG4-kgc3VePFAR3PZA0ZrJ9ANWSKRidCQi7pBRxo9K8hCi3OKw_2IaeAPutIR8&_nc_zt=23&_nc_ht=scontent-mnl3-3.xx&_nc_gid=qnnBQ2VztEI7EsfBQtbwvA&oh=00_AfrjTYu8T5p-rHFREPuOhh68J95DYGV6dwJL42BmisbpOA&oe=696A4C63"
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
