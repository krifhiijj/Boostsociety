import React from "react";
import "./Testimonials.css";
import monial1 from "../assets/images/monial.jpeg";
import monial2 from "../assets/images/monial2.png";
import monial3 from "../assets/images/monial3.jpg";

const testimonials = [
  {
    image: monial1,
    text: "This cohort has been amazing! I am so more confident about myself as a leader and the direction of my business. Thank you, Business BOOST Society!!!",
    name: "Nathaniel, Owner",
  },
  {
    image: monial2,
    text: "Taking over my late father’s construction business as a woman in a male-dominated industry is tough. This cohort provided me with the knowledge, connections & confidence needed to navigate city contracts which my father wanted to pursue. Thanks, BOOST!",
    name: "Beatriz W., Owner",
  },
  {
    image: monial3,
    text: "Being part of the 'BOOST Your Business' cohort has been incredible. The guidance and support from my BSA and others were invaluable in helping me achieve several business goals. Thanks to BOOST, my CemiY Care products are now on Amazon!",
    name: "Ta’Nesha Justice, Owner",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="title">You Are The Center Of Our Universe</h2>
      <h3 className="subtitle">Testimonials</h3>

      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.image} alt="User" className="user-image" />
            <p className="testimonial-text">{testimonial.text}</p>
            <p className="testimonial-name">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
