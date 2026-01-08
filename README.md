# PharmIntel – Agentic AI for Pharmaceutical Innovation

PharmIntel is an application built for an Agentic AI–powered pharmaceutical research platform.  
It enables users to explore drug repurposing opportunities, analyze clinical and market intelligence, and generate structured research reports through an intuitive interface.

---

## ✨ Key Features

- 🧠 **Agentic AI Workflow Visualization**
  - Displays master agent orchestration and worker agent execution flow
- 📊 **Research Workspace**
  - Prompt-based research input
  - Live agent workflow tracking
  - Intelligence summary, opportunity score, and insights
- 📈 **Data Visualization**
  - Clinical phase distribution charts
  - Structured insights and evidence panels
- 💾 **Save & Archive**
  - Save reports locally for later review
  - Persistent archive of past analyses
- 📤 **Export Reports**
  - Download full analysis as JSON
- 🧭 **Clean Navigation**
  - Landing Page
  - Workspace
  - Archive
- 🎨 **Modern UI/UX**
  - Built with Tailwind CSS and shadcn/ui
  - Responsive and demo-ready design

---


## Tech stack
- Framework: React + Vite
- Language: TypeScript
- Styling: Tailwind CSS
- UI components: shadcn/ui
- Charts: Recharts
- Icons: Lucide React
- State management: React hooks
- Storage: Browser LocalStorage (for saved reports)

## Project structure
```
src/
├── components/
│   ├── LandingPage.tsx
│   ├── WorkspacePage.tsx
│   ├── ArchivePage.tsx
│   ├── Navigation.tsx
│   └── ui/               # shadcn/ui components
│
├── services/
│   └── agentApi.ts       # backend integration (or mock)
│
├── mocks/
│   └── agentMock.ts      # mock agent responses for demo mode
│
├── App.tsx
└── main.tsx
```

## Running locally

Prerequisites
- Node.js (16+ recommended) and npm

Install dependencies
```bash
npm install
```

Start development server
```bash
npm run dev
```

Open the app in your browser:
```text
http://localhost:5173
```

Build for production
```bash
npm run build
```
