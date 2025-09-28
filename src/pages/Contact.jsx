import React from "react";

function Contact() {
  const heading = [
    {
      platform : "FB",
      link: "https://www.facebook.com/K72.ca/",
    },
    {
      platform : "IG",
      link : "https://www.instagram.com/k72_creation/"
    },
    {
      platform : "IN",
      link : "https://www.linkedin.com/company/k72/"
    },
    {
      platform : "BE",
      link : "https://www.behance.net/agenceK72"
    }
  ];

  return (
    <div className="bg-black h-full w-full relative lg:pt-0 pt-20 flex flex-col">
      <div className="font-[lausanne300] lg:mt-0 pt-4 text-center leading-[8.5vw]">
        <div className="lg:text-[10vw] text-[12vw] flex justify-center items-center uppercase">
          Pour
        </div>
        <div className="lg:text-[10vw] text-[12vw] flex justify-center items-center uppercase">
          parler de
        </div>
        <div className="lg:text-[10vw] text-[12vw] flex justify-center items-center uppercase">
          votre
        </div>
        <div className="lg:text-[10vw] text-[12vw] flex justify-center items-center uppercase">
          projet
        </div>
        <div className="flex flex-col">
          <p className="absolute p-5 top-110 leading-6 left-20 font-[lausanne500] text-2">
          Dans un écran ou un bureau. <br />
          Chez vous. Chez nous. <br /> Partout.
        </p>
        <p className="absolute lg:p-0 lg:mt-5 p-10 mt-15 top-110 leading-6 right-20 font-[lausanne500] text-2">
          525 Av. Viger O - Suite 400 <br />
          Montréal, QC H2Z 1G6 →
        </p>
        </div>
      </div>

      <div className="link origin-top relative rotate-5 mt-30">
        <div className="moveLinkContact absolute text-black flex top-0 bg-[#D3FD50] hover:bg-white">
          <div className="moveXContact flex items-center">
            <h2 className="whitespace-nowrap font-[lausanne500] lg:text-[11vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase">
              bonjour@k72
            </h2>
            <img
              className="lg:h-32  h-10 rounded-full shrink-0 lg:w-25 w-10 mx-10 object-cover"
              src="https://static.thenounproject.com/png/heart-icon-10659-512.png"
              alt=""
            />
            <h2 className="whitespace-nowrap font-[lausanne500] lg:text-[11vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase">
              bonjour@k72
            </h2>
            <img
              className="lg:h-32  h-10 rounded-full shrink-0 lg:w-25 w-10 mx-10 object-cover"
              src="https://static.thenounproject.com/png/heart-icon-10659-512.png"
              alt=""
            />
          </div>
          <div className="moveXContact flex items-center">
            <h2 className="whitespace-nowrap font-[lausanne500] lg:text-[11vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase">
              bonjour@k72
            </h2>
            <img
              className="lg:h-32  h-10 rounded-full shrink-0 lg:w-25 w-10 mx-10 object-cover"
              src="https://static.thenounproject.com/png/heart-icon-10659-512.png"
              alt=""
            />
            <h2 className="whitespace-nowrap font-[lausanne500] lg:text-[11vw] text-5xl text-center lg:leading-[0.8] lg:pt-5 pt-2 uppercase">
              bonjour@k72
            </h2>
            <img
              className="lg:h-32  h-10 rounded-full shrink-0 lg:w-25 w-10 mx-10 object-cover"
              src="https://static.thenounproject.com/png/heart-icon-10659-512.png"
              alt=""
            />
          </div>
        </div>
      </div>

       <div className="h-screen w-full bg-black flex flex-col justify-center items-center">
      <p className="font-[lausanne500] text-sm text-white tracking-widest mb-8">
        SUIVEZ-NOUS
      </p>

      <div className="flex gap-6">
        {heading.map((item, index) => (
          <div
            key={index}
            className="rounded-full lg:h-24 lg:w-35 h-12 w-18 mb-0 border-2 border-white flex items-center justify-center cursor-pointer hover:bg-[#D3FD50]"
            onClick={() => window.open(item.link, "_blank")}
          >
            <span className="text-white lg:text-7xl text-3xl font-[lausanne500]">
              {item.platform}
            </span>
          </div>
        ))}
      </div>
    </div>

    </div>
  );
}

export default Contact;
