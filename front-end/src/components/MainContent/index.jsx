import { Outlet } from "react-router-dom";
import { MainContentWrapper } from "./styles";

function MainContent() {
  return (
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
  );
}

export default MainContent;

