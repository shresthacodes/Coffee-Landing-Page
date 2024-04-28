const HeroSection = () => {
  return (
    <main className="hero container">
      <div className="hero-content">
        <h1>JUST BREWED HAPPINESS IN A CUP!</h1>
        <p>
          Crafted with Passion, Brewed for Pleasure – Experience the Perfect Cup
          Every Time.
        </p>
        <div className="hero-button">
          <button>Explore</button>
          <button className="sec-btn">Shop Now</button>
        </div>
        <div className="shops">
          <p> Exclusively Available on:</p>
          <div className="shop-icon">
            <img src="./images/amazon.png" alt="amazon" />
            <img src="./images/flipkart.png" alt="flipkart" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img
          height="500px"
          width="750px"
          src="./images/hero_image.png"
          alt="Hero-image"
        />
      </div>
    </main>
  );
};
export default HeroSection;
