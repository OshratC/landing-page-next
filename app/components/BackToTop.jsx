"use client";
import { useState, useEffect } from "react";
import "./BackToTop.css";


function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    visible && (
      <button className="back-to-top" onClick={scrollToTop}>
        ↑
      </button>
    )
  );
}

export default BackToTop;