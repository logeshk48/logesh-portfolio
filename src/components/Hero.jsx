import LightRays from "./LightRays.jsx";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-bg">
        <LightRays
          raysOrigin="top-center"
          raysColor="#ffffff"
          raysSpeed={1}
          lightSpread={0.8}
          rayLength={2.5}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0}
          distortion={0}
          className="custom-rays"
          pulsating={false}
          fadeDistance={1}
          saturation={1}
        />
      </div>

      <div className="hero-content">
        <div className="hero-badge">AI Powered Portfolio</div>
        <h1>Hello, I'm Logesh</h1>
        <p>
          AI Powered Web Developer crafting smart, modern, and interactive
          digital experiences.
        </p>

        <div className="hero-buttons">
          <button className="primary-btn">View Projects</button>
          <button className="secondary-btn">Contact Me</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;