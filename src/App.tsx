import { Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { WorkspacePage } from "./pages/WorkspacePage";
import { ArchivePage } from "./pages/ArchivePage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/workspace" element={<WorkspacePage />} />
        <Route path="/archive" element={<ArchivePage />} />
      </Routes>
    </>
  );
}

export default App;
