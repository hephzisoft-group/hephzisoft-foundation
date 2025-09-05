import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Programs from "./pages/Programs";
import "./index.css";
import GetInvolved from "./pages/GetInvolved";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Layout>
          <Routes>
            {/* English Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/our-story" element={<OurStory />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/get-involved" element={<GetInvolved />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />

            {/* Korean Routes */}
            <Route path="/kr" element={<Home />} />
            <Route path="/kr/our-story" element={<OurStory />} />
            <Route path="/kr/programs" element={<Programs />} />
            <Route path="/kr/get-involved" element={<GetInvolved />} />
            <Route path="/kr/blog" element={<Blog />} />
            <Route path="/kr/contact" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </LanguageProvider>
  );
}

export default App;
