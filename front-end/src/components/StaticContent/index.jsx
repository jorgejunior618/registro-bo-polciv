import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import { MainContentWrapper } from "./styles";
import MenuBookRoundedIcon from '@mui/icons-material/MenuBookRounded';

function MainContent() {
  const [ url, setUrl ] = useState('/');
  const navigateTo = useNavigate();
  useEffect(() => {
    setUrl('/registroBO');
  }, []);
  useEffect(() => {
    navigateTo(url);
  }, [url, navigateTo]);

  function handleActivateTab(event) {
    const { name } = event.currentTarget;
    setUrl(name);
  }
  
  return (
    <>
      <Header />

      <MainContentWrapper>
        <nav>
          <button name="/registroBO" onClick={(event) => handleActivateTab(event)}>
            <li
              className={url === '/registroBO' ? 'active' : ''}
              aria-label="main-nav-item"
              >
              <MenuBookRoundedIcon sx={{ fontSize: 32}} />
            </li>
          </button> 
          <button name="/default1" onClick={(event) => handleActivateTab(event)}>
            <li
              className={url === '/default1' ? 'active' : ''}
              aria-label="main-nav-item"
              >
              Teste
            </li>
          </button> 
          <button name="/default2" onClick={(event) => handleActivateTab(event)}>
            <li
              className={url === '/default2' ? 'active' : ''}
              aria-label="main-nav-item"
              >
              Teste
            </li>
          </button> 
          <button name="/default3" onClick={(event) => handleActivateTab(event)}>
            <li
              className={url === '/default3' ? 'active' : ''}
              aria-label="main-nav-item"
              >
              Teste
            </li>
          </button> 
          <button name="/default4" onClick={(event) => handleActivateTab(event)}>
            <li
              className={url === '/default4' ? 'active' : ''}
              aria-label="main-nav-item"
              >
              Teste
            </li>
          </button> 
          <button name="/default5" onClick={(event) => handleActivateTab(event)}>
            <li
              className={url === '/default5' ? 'active' : ''}
              aria-label="main-nav-item"
              >
              Teste
            </li>
          </button> 
          <button name="/default6" onClick={(event) => handleActivateTab(event)}>
            <li
              className={url === '/default6' ? 'active' : ''}
              aria-label="main-nav-item"
              >
              Teste
            </li>
          </button> 
          <button name="/default7" onClick={(event) => handleActivateTab(event)}>
            <li
              className={url === '/default7' ? 'active' : ''}
              aria-label="main-nav-item"
              >
              Teste
            </li>
          </button> 
          <button name="/default8" onClick={(event) => handleActivateTab(event)}>
            <li
              className={url === '/default8' ? 'active' : ''}
              aria-label="main-nav-item"
              >
              Teste
            </li>
          </button> 
        </nav>
        <Outlet />
      </MainContentWrapper>
    </>
  );
}

export default MainContent;

