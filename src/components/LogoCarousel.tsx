import Image from "next/image";

const logos = [
  { src: "/logos/scotts.png", alt: "Scotts" },
  { src: "/logos/sofistadium.png", alt: "SoFi Stadium" },
  { src: "/logos/spurs.png", alt: "San Antonio Spurs" },
  { src: "/logos/texashospital.png", alt: "Texas Children's Hospital" },
  { src: "/logos/harvard.png", alt: "Harvard" },
  { src: "/logos/rocketRoute.svg", alt: "RocketRoute" },
  { src: "/logos/michigan.png", alt: "Michigan State University" },
  { src: "/logos/das-keyboard.png", alt: "Das Keyboard" },
  { src: "/logos/abc.svg", alt: "Associated Builders and Contractors" },
  {
    src: "/logos/dcs.png",
    alt: "Georgia's Department of Community Supervision",
  },
  { src: "/logos/LACMA.png", alt: "Los Angeles County Museum of Arts" },

  // { src: "/logosteam.webp", alt: "ABC Contractors" },
  // { src: "/logos/georgia.png", alt: "State of Georgia" },
  // { src: "/logos/lacma.png", alt: "LACMA" },
  // { src: "/logos/scotts.png", alt: "Scotts" },
];

export default function LogoCarousel() {
  return (
    <section>
      <div className="max-w-screen-xl mx-auto text-center mb-8">
        <h2 className="text-xl font-semibold">
          Trusted by over 2.5 million users
        </h2>
      </div>

      {/* Carousel wrapper */}
      <div className="overflow-hidden relative">
        <div className="flex animate-marquee">
          {logos.map((logo, i) => (
            <div key={i} className="mx-5 flex flex-shrink-0 items-center justify-center w-[130px] h-[100px] relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale"
              />
            </div>
          ))}

          {/* Duplicate logos for infinite loop effect */}
          {logos.map((logo, i) => (
            <div key={`dup-${i}`} className="mx-5 flex flex-shrink-0 items-center justify-center w-[130px] h-[100px] relative">
              <Image
                src={logo.src}
                alt={logo.alt}
                fill
                className="object-contain grayscale"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
