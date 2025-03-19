import { BrowserRouter, Routes, Route } from "react-router-dom";

import {
  About,
  Contact,
  Courses,
  Gallery,
  Home,
  NotFound,
  Team,
  CourseDetail,
} from "./pages";
import { Navbar, Footer, ScrollToTop } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="courses" element={<Courses />} />
        {/* <Route path="courses/details" element={<CourseDetail />} /> */}
        <Route path="courses/:courseId" element={<CourseDetail />} />
        <Route path="project" element={<Gallery />} />
        <Route path="Team" element={<Team />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
