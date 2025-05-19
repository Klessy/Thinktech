import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes";

import {
  About,
  Contact,
  Courses,
  Gallery,
  Home,
  NotFound,
  Team,
  CourseDetail,
  HowItWorksPage,
  Payment,
  LocationPage,
} from "./pages";
import { Navbar, Footer, ScrollToTop } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path={routes.about} element={<About />} />
        {/* <Route path={routes.contact} element={<Contact />} /> */}
        {/* <Route path={routes.locations} element={<Locations />} /> */}
        <Route path={routes.locationDelta} element={<LocationPage />} />
        <Route path={routes.enroll} element={<Payment />} />
        <Route path={routes.courses} element={<Courses />} />
        <Route path={routes.how_it_works} element={<HowItWorksPage />} />
        <Route path={routes.courseId} element={<CourseDetail />} />
        <Route path={routes.project} element={<Gallery />} />
        <Route path={routes.team} element={<Team />} />
        <Route path={routes.notFound} element={<NotFound />} />
      </Routes>
      <ScrollToTop />
      <Footer />
    </BrowserRouter>
  );
};

export default App;
