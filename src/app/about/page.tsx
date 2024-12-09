import React from "react";

const AboutPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section w-full h-auto flex flex-col md:flex-row justify-between items-center px-4 md:px-16 py-8">
        <div className="hero-text md:w-2/4 text-xl md:text-2xl text-center md:text-left text-custom-purple">
          A brand built on the love of craftsmanship, quality, and outstanding customer service
        </div>
        <div className="hero-button mt-6 md:mt-0">
          <button className="btn bg-gray-200 h-12 w-40 rounded-sm text-custom-purple">
            View our products
          </button>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section flex flex-col md:flex-row w-full h-auto items-center justify-around px-4 py-16">
        <div className="story-content bg-custom-purple w-full md:w-2/5 text-white p-8 md:p-16 mb-8 md:mb-0">
          <h1 className="story-title text-xl md:text-2xl">It started with a small idea</h1>
          <p className="story-description mt-6">
            A global brand with local beginnings, our story began in a small studio in South London in early 2014.
          </p>
          <button className="btn bg-input-bg h-12 w-40 rounded-sm mt-10 text-white">
            View Collection
          </button>
        </div>
        <div className="story-image w-full md:w-2/5">
          <img src="/images/About main.png" alt="About main" className="w-full" />
        </div>
      </section>

      {/* Service Section */}
      <section className="service-section flex flex-col md:flex-row w-full h-auto items-center px-4 py-16 space-y-8 md:space-y-0">
        <img src="/images/About sec.png" alt="Service" className="service-image w-full md:w-2/5" />
        <div className="service-content border-2 bg-slate-200 w-full md:w-3/5 p-8 md:p-20">
          <h1 className="service-title text-xl md:text-2xl text-custom-purple">
            Our service isn't just personal, it's actually hyper-personally exquisite
          </h1>
          <p className="service-description text-custom-purple mt-6">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe, and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
          <button className="btn bg-white h-12 w-40 rounded-sm mt-10 text-custom-purple">
            Get in Touch
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section w-full h-auto pb-16">
        <h1 className="features-title text-center text-custom-purple text-xl">
          What makes our brand different
        </h1>
        <div className="features-grid flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              img: "/images/Delivery.png",
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              img: "/images/check.png",
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              img: "/images/Purchase.png",
              title: "Unbeatable prices",
              desc: "For our materials and quality you won’t find better prices anywhere",
            },
            {
              img: "/images/Sprout.png",
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((feature, index) => (
            <div key={index} className="feature-card bg-gray-200 w-72 h-auto rounded-sm px-6 py-8 text-center">
              <img src={feature.img} alt={feature.title} className="mx-auto" />
              <h1 className="feature-title text-custom-purple text-lg mt-4">{feature.title}</h1>
              <p className="feature-desc text-custom-purple mt-4">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="newsletter-section w-full h-auto bg-gray-100 py-8">
        <div className="newsletter-content m-auto w-11/12 bg-white p-8 md:p-16">
          <h1 className="newsletter-title text-custom-purple text-2xl md:text-3xl text-center">
            Join the club and get the benefits
          </h1>
          <p className="newsletter-description text-custom-purple text-center mt-6 text-sm md:text-base">
            Sign up for our newsletter and receive exclusive offers on new ranges, sales, pop-up stores, and more.
          </p>
          <div className="newsletter-form flex flex-col md:flex-row justify-center items-center mt-6 space-y-4 md:space-y-0">
            <input
              type="text"
              placeholder="your@gmail.com"
              className="newsletter-input bg-gray-100 w-80 h-12 p-5 rounded-sm"
            />
            <button className="btn bg-custom-purple h-12 w-32 rounded-sm text-white">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
