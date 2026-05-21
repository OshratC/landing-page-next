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
- 201 Created (הצלחה)
- 422 Unprocessable (שגיאה בנתונים)
- 401 Unauthorized (שגיאת Token)


## Installation

git clone https://github.com/OshratC/landing-page-next

cd landing-page-next

npm install

npm run dev

## Environment Variables
- NEXT_PUBLIC_BASE_ID
- NEXT_PUBLIC_API_TOKEN

## Validation
- Full Name - שדה חובה
- Phone Number - שדה חובה, חייב להתחיל ב-05 ולהכיל 10 ספרות
- Email - שדה חובה, חייב להכיל @ ונקודה
- Message - לא חובה

## Features
-  responsive design — works on mobile and desktop
-  Registration form 
-  Form Validation
-  Airtable API integration 
-  Success/Error feedback 
-  Back to Top button
-  Secure environment variables - API token stored in .env.local
-  Component-based architecture 
