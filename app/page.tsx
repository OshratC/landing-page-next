"use client"; // הקובץ רץ בדפדפן ולא בשרת (ברירת המחדל)

import { useState, useEffect } from "react"; // בדף זה משהו ישתנה בדף, יקרו שינויים בזמן אמת
// ייבוא קומפוננטות
import HeroSection from "./components/HeroSection";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function Home() {
  const [submitted, setSubmitted] = useState(false); // ברירת מחדל הטופס לא נשלח

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  // עמוד החיווי בעת שליחת הטופס בהצלחה
  if (submitted) {
    return (
      <div
        className="success-screen"
      >
        <div className="success-overlay">
          <div className="success-content">
            <h1> הטופס נשלח בהצלחה</h1>
          </div>
        </div>
      </div>
    );
  }

  //העמוד הרגיל
  return (
    <main>
      <HeroSection />
      <ContactForm onSuccess={() => setSubmitted(true)} /> 
      <Footer />
      <BackToTop />
    </main>
  );
}