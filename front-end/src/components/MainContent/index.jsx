import { Outlet } from "react-router-dom";
import Header from "../Header";
import { MainContentWrapper } from "./styles";

function MainContent() {
  return (
    <>
      <Header />

      <MainContentWrapper>
        <nav>
          <li aria-label="main-nav-item">
            Teste
          </li>
          <li aria-label="main-nav-item">
            Teste
          </li>
          <li aria-label="main-nav-item">
            Teste
          </li>
          <li aria-label="main-nav-item">
            Teste
          </li>
        </nav>
        <Outlet />
      </MainContentWrapper>
    </>
  );
}

export default MainContent;

