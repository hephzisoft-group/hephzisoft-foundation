import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import "./index.css";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import OurStory from "./pages/OurStory";
import Programs from "./pages/Programs";

const GetInvolved = () => (
  <div className="min-h-screen py-20 bg-gradient-to-b from-soft-grey to-soft-orchid/3">
    <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
      <div className="mb-8 text-6xl">🤝</div>
      <h1 className="mb-6 text-4xl font-bold lg:text-5xl font-sora text-charcoal-gray">
        Get <span className="text-soft-orchid">Involved</span>
      </h1>
      <p className="mb-8 text-xl text-charcoal-gray/70 font-noto-serif-kr">
        참여하기
      </p>
      <div className="p-8 bg-card rounded-2xl korean-shadow">
        <p className="text-lg leading-relaxed text-charcoal-gray/80">
          Volunteer opportunities, mentorship programs, and partnership
          information will be featured here.
        </p>
      </div>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
