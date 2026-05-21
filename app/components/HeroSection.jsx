import "./HeroSection.css";

function HeroSection()  {
    // חץ מפנה לטופס 
  const scrollToForm = () => {
    document.getElementById("contact-form").scrollIntoView({ behavior: "smooth" }); // instant / smooth 
  };

  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="hero-content">
          <h1 className="hero-title">שספורט ומשחק נפגשים ביחד</h1>
          <h2 className="hero-subtitle">שיעורי טניס לכל הרמות - מתחילים ועד מתקדמים</h2>
          <button className="hero-btn" onClick={scrollToForm}>
            הרשם עכשיו
          </button>
        </div>
      </div>
    </section>
  );
}

// ייצוא הקומפוננטה על מנת שיהיה נ יתן לייבא אותה
export default HeroSection;