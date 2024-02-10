import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Header from "./components/Header";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const Home = lazy(() => import("./components/Home"));
const Result = lazy(() => import("./components/Result"));
const Learning = lazy(() => import("./components/Learning"));
const Quiz = lazy(() => import("./components/Quiz"));

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/learn" element={<Learning />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Suspense>
      </Router>
    </div>
  );
};

export default App;

// Code splitting is a technique in web development where a large JavaScript bundle, which contains the entire codebase of an application, is broken down into smaller and more manageable pieces. These smaller pieces, or "chunks," can be loaded on-demand, leading to more efficient resource utilization and faster initial load times for web applications.
