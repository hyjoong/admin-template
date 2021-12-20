import styled from "styled-components";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Question from "./pages/Home/Question";
const App = () => {
  return (
    <Router>
      <Header />
      <MainContainer>
        <Sidebar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route exact path="/question" element={<Question />}></Route>
        </Routes>
      </MainContainer>
    </Router>
  );
};

const MainContainer = styled.div`
  display: flex;
`;

export default App;
