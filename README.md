# Landing Page - Tennis

## Overview
A landing page for tennis lessons, featuring a registration form with full validation that submits data to Airtable via API.

---

## Technologies
- **Next.js**
- **React**
- **CSS**
- **Air Table API**

---

## Data Table : Contacts
### Fields :
- **Full Name** (Single Text)
- **Email** (Email)
- **Message** (Long Text)
- **Phone Number** (Phone Number)
- **Status** (Single Select - Todo, In Process, Done)

---

## Features
-  Responsive design — works on mobile and desktop
-  Registration form 
-  Form Validation
-  Airtable API integration 
-  Success/Error feedback 
-  Back to Top button
-  Secure environment variables - API token stored in .env.local
-  Component - based architecture

---

## Validation
- Full Name - Required
- Phone Number - Required (starts with 05 and must contain 10 digits)
- Email - Required (Must contain @ . and characters before and after each sign)
- Message - Not Required

---

## API Request :
- **Method :** POST
- **URL :** https://api.airtable.com/v0/${process.env.NEXT_PUBLIC_BASE_ID}/Contacts
- **Headers :**
  
  Authorization : Bearer ${process.env.NEXT_PUBLIC_API_TOKEN}
  
  Content-Type : application/json
  
- **Body :**
  
  {
          
      "fields":
          
         {
          
           "Full Name": "ישראל ישראלי",
                  
           "Phone Number": "0501234567",
                          
           "Email": "israel@example.com",
                        
           "Message": "שלום, אני מעוניין בשיעורי טניס"
                          
        }
  
  }

**Response:**
- 201 Created (Success)
- 422 Unprocessable (Error Data)
- 401 Unauthorized (Error Token)

---
## UX
- Back to Top button
- Auto focus
- Tab navigation
- Smooth scroll
- Cursor pointer
  
---

## Environment Variables
- NEXT_PUBLIC_BASE_ID
- NEXT_PUBLIC_API_TOKEN

---

## Installation

git clone https://github.com/OshratC/landing-page-next

cd landing-page-next

npm install

npm run dev
