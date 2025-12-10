# Autonomous Insurance Claims Processing Agent (MERN Stack)

This project processes FNOL (First Notice of Loss) insurance documents and extracts:

- Policy Information  
- Incident Information  
- Involved Parties  
- Asset Details  
- Mandatory Fields  

It then applies routing rules:

- Fast-track if damage < 25,000  
- Manual review if any field missing  
- Investigation flag for fraud words  
- Specialist queue for injury claims  

---

## 🚀 Tech Stack

- MongoDB  
- Express.js  
- React.js  
- Node.js  
- pdf-parse  
- Multer  
- Axios  
- Nodemon  

---



##  Installation & Setup

###  Clone the repository
git clone https://github.com/SureNarendra341/autonomous-claims-agent.git




```bash
cd backend
npm install

### Install dependencies
npm install

### Run the server
npm run dev

MongoDB connected
Server running on port 5000


### 1. Frontend

```bash
cd frontend
npm install

### Install dependencies
npm install

### Run the server
npm run dev

### 📤 Upload FNOL Document
1.Open the frontend application.
2.Go to the upload section.
3.Upload a PDF FNOL document.
4.Click "Process".
5.The backend extracts information and outputs JSON with routing.

### 📦 Output Format
{
  "message": "Claim processed successfully",
  "data": {
    "extractedFields": {
      "policyInformation": {
        "policyNumber": null,
        "policyholderName": null,
        "effectiveDates": null
      },
      "incidentInformation": {
        "date": null,
        "time": null,
        "location": null,
        "description": null
      },
      "involvedParties": {
        "claimant": null,
        "thirdParties": null,
        "contactDetails": null
      },
      "assetDetails": {
        "assetType": null,
        "assetId": null,
        "estimatedDamage": null
      },
      "otherMandatoryFields": {
        "claimType": null,
        "attachments": null,
        "initialEstimate": null
      }
    },
    "missingFields": [
      "policyNumber",
      "policyholderName",
      "effectiveDates",
      "date",
      "time",
      "location",
      "description",
      "claimant",
      "thirdParties",
      "contactDetails",
      "assetType",
      "assetId",
      "estimatedDamage",
      "claimType",
      "attachments",
      "initialEstimate"
    ],
    "recommendedRoute": "Manual Review",
    "reasoning": "Missing mandatory fields.",
    "_id": "69396c5059f93a31033f709c",
    "createdAt": "2025-12-10T12:49:20.312Z",
    "__v": 0
  }
}



