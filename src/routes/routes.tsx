import { BrowserRouter, Route, Routes } from "react-router-dom";

import CardDetails from "../pages/CardDetails";
import HomePage from "../pages/HomePage";
import QuestionsPage from "../pages/QuestionsPage";

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/questions" Component={QuestionsPage} />
        <Route path="/questions/:questionId" Component={CardDetails} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
