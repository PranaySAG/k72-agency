import React from 'react'

function Footer() {
  const heading = [
    { platform: "FB", link: "https://www.facebook.com/K72.ca/" },
    { platform: "IG", link: "https://www.instagram.com/k72_creation/" },
    { platform: "IN", link: "https://www.linkedin.com/company/k72/" },
    { platform: "BE", link: "https://www.behance.net/agenceK72" }
  ];

  const handleNavigation = (path) => {
    window.location.href = path;
  };

  return (
    <div className="h-screen w-full flex flex-col justify-between p-10 bg-black relative">
      <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
        <div className="flex gap-6">
          {heading.map((item, index) => (
            <div
              key={index}
              className="rounded-full lg:h-24 lg:w-35 h-12 w-18 border-2 border-white flex items-center justify-center cursor-pointer hover:bg-[#D3FD50]"
              onClick={() => window.open(item.link, "_blank")}
            >
              <span className="text-white lg:text-7xl text-3xl font-[lausanne500]">
                {item.platform}
              </span>
            </div>
          ))}
        </div>

        <span
          className="text-white lg:text-7xl text-3xl font-[lausanne500] border-2 border-white transition-all p-2 rounded-[50px] mx-10 hover:bg-[#D3FD50] cursor-pointer"
          onClick={() => handleNavigation("/contact")}
        >
          Contact
        </span>
      </div>

      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex flex-wrap items-center justify-center gap-6 lg:gap-10 cursor-pointer text-center">
        <p className="uppercase text-sm font-[lausanne500]">privacy policy</p>
        <p className="uppercase text-sm font-[lausanne500]">privacy notice</p>
        <p className="uppercase text-sm font-[lausanne500]">ethics report</p>
        <p className="uppercase text-sm font-[lausanne500]">consent choices</p>
      </div>
    </div>
  );
}

export default Footer
