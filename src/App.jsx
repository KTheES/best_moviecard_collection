import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import './App.css'


function App() {

  return(
    <Router basename="/best_moviecard_collection">
      <Routes>
      {/* 루트 경로 */}
      <Route path="/" element={<Home />} />
      
      {/* 영화 상세 정보 */}
      <Route path="/movie/:id" element={<Detail />} />

      </Routes>
    </Router>
  );
}

export default App;




















