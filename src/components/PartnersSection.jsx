import React, { useRef } from "react";
{/*import "../styles/PartnersSection.css";*/}
import icon1 from "../assets/images/iconimage1.png";
import icon2 from "../assets/images/iconimage2.jpg";
import icon3 from "../assets/images/iconimage3.png";
import icon4 from "../assets/images/iconimage4.png";
import icon5 from "../assets/images/iconimage.png";  // New Image
import icon6 from "../assets/images/iconimage5.png"; // New Image
import borderImage from "../assets/images/bottomvector.png";
import { IoIosArrowBack } from "react-icons/io";
/*import { MdKeyboardArrowRight } from "react-icons/md";*/
import { IoIosArrowForward } from "react-icons/io";
const partners = [
  {
    logo: icon1,
    title: "U.S. Black ...",
    description:
      "Affectionately known as the 'National Voice of Black Businesses,' the USBC provides committed, visionary leadership, and advocacy in the realization of economic empowerment.",
    link: "#",
  },
  {
    logo: icon2,
    title: "City of Atla...",
    description:
      "Atlanta, Georgia, is a major transportation hub with Hartsfield-Jackson Atlanta International Airport, hosting over 1,000 international businesses and consulates, and is home to 13 Fortune 500 companies.",
    link: "#",
  },
  {
    logo: icon3,
    title: "Congressiona...",
    description:
      "CBC is committed to using the full Constitutional power, statutory authority & financial resources of the federal government to ensure that African Americans and other marginalized communities in the U.S. have the opportunity to achieve the American Dream.",
    link: "#",
  },
  {
    logo: icon4,
    title: "SLDC - St...",
    description:
      "SLDC is the incubator for development agencies in St. Louis, MO. It's an organization that exists to empower St. Louis through a vibrant economy where all people thrive.",
    link: "#",
  },
  {
    logo: icon5,
    title: "NYSBBA",
    description:
      "The New York State Black Business Alliance (NYSBBA) was created to empower and sustain Black businesses and the communities where they are domiciled through entrepreneurship and capitalistic initiatives across the State.",
    link: "#",
  },
  {
    logo: icon6,
    title: "NFBPA",
    description:
      "The National Forum for Black Public Administrators (NFBPA), a 501(c)(3) nonprofit organization, is the principal and most progressive organization dedicated to the advancement of black public leadership in local and state governments.",
    link: "#",
  },
];

const PartnersSection = () => {
  const scrollRef = useRef(null);
  

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -350, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 350, behavior: "smooth" });
  };
  

  

  return (
    <section className="partners-section">
      <h2 className="partners-title">Collaborative Partners</h2>
      <p className="partners-description">
      Business Boost! Society is proud to collaborate with industry-leading partners who share our vision for innovation and excellence. These strategic partnerships allow us to combine our expertise and resources to deliver exceptional solutions to our clients. Here are some of our valued collaborative partners.
      </p>
      <div className="partners-container">
        {/*<button className="scroll-btn left" onClick={scrollLeft}>
          &#x2B9C;
  </button>*/}
        <button className="scroll-btn left" onClick={scrollLeft}><IoIosArrowBack/></button>
        

        <div className="partners-list" ref={scrollRef}>
          {partners.map((partner, index) => (
            <div className="partner-card" key={index}>
              <div className="bottom-image">
                <img src={borderImage} alt="Bottom Vector" className="bottom-vector" />
              </div>
              <div className="">
              <img src={partner.logo} alt={partner.title} className="partner-logo" />
              </div>
              <h3 className="partner-title">{partner.title}</h3>
              <p className="partner-description">{partner.description}</p>
              <a href={partner.link} className="partner-link">
                Learn more →
              </a>
            </div>
          ))}
        </div>
        {/*<button className="scroll-btn right" onClick={scrollRight}>
          &#x2B9E;
          </button>*/}
          <button className="scroll-btn right" onClick={scrollRight}><IoIosArrowForward /> 
</button>
      </div>
    </section>
  );
};

export default PartnersSection; 