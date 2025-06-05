import React from "react";
import { Monitor, Settings, Download, Network, Wrench } from "lucide-react";

const WhatWeOffer = () => {
  const services = [
    {
      id: 1,
      icon: <Monitor />,
      title: "Computers & Accessories",
      description:
        "Explore our wide selection of laptops, desktops, monitors, keyboards, mice, and other essential accessories. Our products are known for their performance and durability, ensuring you get the best value for your investment. Whether you're looking for everyday use, high-performance gaming, or professional-grade setups, we have something for everyone.",
    },
    {
      id: 2,
      icon: <Settings />,
      title: "Technical Support & Repairs",
      description:
        "Our certified technicians are ready to help you with diagnostics, hardware repairs, software troubleshooting, system upgrades, and virus removal. We prioritize quick turnaround times and transparent communication so you're never left in the dark about the status of your device.",
    },
    {
      id: 3,
      icon: <Download />,
      title: "Genuine Software Solutions",
      description:
        "We provide licensed and original software including operating systems, office productivity suites, antivirus programs, and specialized industry tools. From individual users to enterprise clients, we ensure that your systems run securely and legally.",
    },
    {
      id: 4,
      icon: <Network />,
      title: "Networking & Cybersecurity",
      description:
        "We offer complete networking solutions for homes and offices, including router setups, Wi-Fi wireless configuration, network security, and troubleshooting. We also provide comprehensive cybersecurity to keep your data safe from cyber threats, ensuring peace of mind in a connected world.",
    },
    {
      id: 5,
      icon: <Wrench />,
      title: "Custom PC Builds",
      description:
        "Need a PC that meets specific performance needs? Our custom PC building service is perfect for gamers, video editors, designers, engineers, and professionals who need high-performance systems. We work and consult with you on components, budget, and performance goals to create a system that fits perfectly.",
    },
  ];

  return (
    <section
      className='w-full py-12'
      style={{
        background: "linear-gradient(180deg, #4D94FF 0%, #FFFFFF 100%)",
      }}>
      <div className='max-w-7xl mx-auto px-4'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h2 className='text-4xl font-bold text-white mb-4'>What We Offer</h2>
          <p className='text-white/90 max-w-3xl mx-auto text-lg leading-relaxed'>
            At Computer Durbar, we offer a comprehensive range of products and
            services to meet your every computing need—whether you're buying
            your first laptop or managing a growing business network.
          </p>
        </div>

        {/* Top Row: 3 Cards */}
        <div className='flex flex-wrap justify-center gap-10 mb-10'>
          {services.slice(0, 3).map((service) => (
            <div
              key={service.id}
              className='w-[300px] md:w-[315px] h-[374px] bg-gradient-to-br from-[#559EFF] to-[#006BF8] rounded-lg p-5 text-white flex flex-col items-center text-center shadow-lg'>
              <div className='mb-4 bg-white rounded-full p-4'>
                {React.cloneElement(service.icon, {
                  className: "w-10 h-10 text-blue-600",
                })}
              </div>
              <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
              <p className='text-sm text-white/90'>{service.description}</p>
            </div>
          ))}
        </div>

        {/* Bottom Row: 2 Cards Centered */}
        <div className='flex flex-wrap justify-center gap-10'>
          {services.slice(3).map((service) => (
            <div
              key={service.id}
              className='w-[300px] md:w-[315px] h-[374px] bg-gradient-to-br from-[#559EFF] to-[#006BF8] rounded-lg p-5 text-white flex flex-col items-center text-center shadow-lg'>
              <div className='mb-4 bg-white rounded-full p-4'>
                {React.cloneElement(service.icon, {
                  className: "w-10 h-10 text-blue-600",
                })}
              </div>
              <h3 className='text-xl font-bold mb-3'>{service.title}</h3>
              <p className='text-sm text-white/90'>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;
