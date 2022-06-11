import Category from "./components/Category";
import Pages from "./pages/Pages";
import { BrowserRouter as Router, Link } from "react-router-dom";
import Search from "./components/Search";
import styled from "styled-components";
import { GiKnifeFork } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav>
          <GiKnifeFork />
          <Logo to="/">Recipe App</Logo>
        </Nav>
        <Search />
        <Category />
        <Pages />
      </Router>
    </div>
  );
}

const Logo = styled(Link)`
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: "Consolas", sans-serif;
  padding-left: 1rem;
`;

const Nav = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  svg {
    color: var(--gray-600);
    font-size: 2rem;
  }
`;

export default App;
