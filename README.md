PharmIntel – Agentic AI for Pharmaceutical Intelligence

PharmIntel is a web-based frontend for an Agentic AI system designed to accelerate pharmaceutical research and drug repurposing workflows.
The platform enables researchers to run complex multi-agent analyses, visualize insights, and archive intelligence reports in a clean, demo-ready interface.

This repository contains the frontend application, built to be backend-agnostic, schema-driven, and hackathon-stable.

🚀 Key Capabilities

Agentic Research Workspace

Submit research prompts

Visualize multi-agent execution (market, clinical trials, patents, etc.)

View synthesized intelligence and opportunity scoring

Results Dashboard

Executive summary

Clinical phase distribution charts

Evidence and citations view

Report Management

Save analysis reports locally

Export reports as structured JSON

Archive and revisit past analyses

Professional UI/UX

Clean, enterprise-style design

Clear separation of Landing, Workspace, and Archive

Built for demos and judge evaluation

🧠 System Architecture (Frontend Perspective)

The frontend is designed around a Master Agent orchestration model:

The UI sends a single research prompt

The backend (or mock layer) returns a structured JSON response

The frontend maps response sections to:

Agent workflow visualization

Intelligence summaries

Charts and metrics

Report storage and export

The frontend does not depend on backend state and can operate fully in mock mode for testing and demos.

🛠 Tech Stack

Framework: React + Vite

Language: TypeScript

Styling: Tailwind CSS

UI Components: shadcn/ui

Charts: Recharts

Icons: Lucide React

State Management: React Hooks

Storage: Browser LocalStorage (for saved reports)

📁 Project Structure

src/
├── components/
│   ├── LandingPage.tsx
│   ├── WorkspacePage.tsx
│   ├── ArchivePage.tsx
│   ├── Navigation.tsx
│   └── ui/               # shadcn/ui components
│
├── services/
│   └── agentApi.ts       # backend 
│
├── mocks/
│   └── agentMock.ts      # mock agent response
│
├── App.tsx
└── main.tsx

▶️ Running the Project Locally
1️⃣ Install dependencies
npm install

2️⃣ Start development server
npm run dev


The app will run at:
http://localhost:5173