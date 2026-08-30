import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import PageLayout from "./components/layout/PageLayout";
import Profile from "./pages/Profile";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Interests from "./pages/Interests";
import Bookmarks from "./pages/Bookmarks";

function App() {
  return (
    <BrowserRouter>
      <PageLayout>
        <Routes>
          {/* default route lands on Profile, not Dashboard */}
          <Route path="/" element={<Navigate to="/profile" replace />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/interests" element={<Interests />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  );
}

export default App;
