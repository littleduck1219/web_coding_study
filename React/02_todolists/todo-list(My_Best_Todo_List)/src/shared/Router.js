import { BrowserRouter, Route, Routes } from "react-router-dom";
import Todomain from "../pages/Todomain";
import Todoexpand from "../pages/Todoexpand";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Todomain />} />
        {/* 경로는 소문자! 다음단어 첫글자 대문자! */}
        <Route path="Todo-expand/:id" element={<Todoexpand />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
