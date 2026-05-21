"use client";
import { useState } from "react";
import "./ContactForm.css";


function ContactForm(props) {
    // איפוס הטופס
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(null); // זיכרון שמכיל את מצב השליחה 
  const [errors, setErrors] = useState({}); // זיכרון שמכיל את שגיאות הולידציה

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value })); // prev שומר על שאר השדות ומעדן רק את הנוכחי
  };

  const validate = () => {
    const newErrors = {}; // אובייקט לאיסוף שגיאות

    if (!formData.name.trim()) // מסיר רווחים מיותרים
      newErrors.name = "שדה חובה";

    if (!formData.phone.trim())
        newErrors.phone = "שדה חובה";
        else if (!/^05\d{8}$/.test(formData.phone.replace(/-/g, ""))) // חייב להתחיל ב 05 ואז 8 ספרות, נתעלם ממקפים
        newErrors.phone = "יש להזין מספר תקין";

    if (!formData.email.trim())
      newErrors.email = "שדה חובה";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "יש להזין מייל תקין";

    setErrors(newErrors); // מחזיר שגיאות למשתמש
    return newErrors; // מחזיר שגיאות לקוד שנדע אם לשלוח את הטופס
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // מונע מהדפדפן לרענן את הדף "שלח" שזו ברירת המחדל של טופס

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setStatus("loading");

    try {
      const response = await fetch(
        `https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE_ID}/Contacts`,
        {
          method: "POST",
          headers: {
            Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fields: {
              "Full Name": formData.name,
              "Phone Number": formData.phone,
              Email: formData.email,
              Message: formData.message,
            },
          }),
        }
      );

      if (response.ok) {
        props.onSuccess();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.log("Error:", error);
      setStatus("error");
    }
  };

  return (
    <div className="form-wrapper">
      <h1 className="form-title">לפרטים נוספים</h1>
      {status === "error" ? (
        <div className="status-message error">
          <p>שגיאה בשליחה, נסי שוב</p>
          <button onClick={() => setStatus(null)} className="reset-btn">
            נסי שוב
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="form">
          <div className="input-group">
            <input
              type="text"
              id="name"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
            />
            <label htmlFor="name">שם מלא</label>
            {errors.name && <span className="error-msg">{errors.name}</span>} 
          </div>

          <div className="input-group">
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder=" "
              value={formData.phone}
              onChange={handleChange}
            />
            <label htmlFor="phone">מספר טלפון</label>
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          <div className="input-group">
            <input
              type="text"
              id="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
            />
            <label htmlFor="email">אימייל</label>
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="input-group">
            <textarea
              id="message"
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
            />
            <label htmlFor="message">הודעה</label>
          </div>

          <button
            type="submit"
            className="submit-btn"
            disabled={status === "loading"}
          >
            {status === "loading" ? "שולח..." : "שלח הודעה"}
          </button>
        </form>
      )}
    </div>
  );
}

export default ContactForm;