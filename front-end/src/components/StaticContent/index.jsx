import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import { MainContentWrapper } from "./styles";
import {
  MenuBookRounded,
  Face,
  Map,
} from '@mui/icons-material';
import TabItem from "../TabItem";

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
            <TabItem active={url === '/registroBO'}>
              <MenuBookRounded sx={{
                fontSize: 32,
                fill: url === '/registroBO' ? 'black' : 'white'
              }} />
            </TabItem>
          </button> 
          <button name="/default1" onClick={(event) => handleActivateTab(event)}>
            <TabItem active={url === '/default1'}>
              <Face sx={{
                fontSize: 32,
                fill: url === '/default1' ? 'black' : 'white'
              }} />
            </TabItem>
          </button> 
          <button name="/default2" onClick={(event) => handleActivateTab(event)}>
            <TabItem active={url === '/default2'}>
              <Map sx={{
                fontSize: 32,
                fill: url === '/default2' ? 'black' : 'white'
              }} />
            </TabItem>
          </button> 
          <button name="/default3" onClick={(event) => handleActivateTab(event)}>
            <TabItem active={url === '/default3'}>
              <Face sx={{
                fontSize: 32,
                fill: url === '/default3' ? 'black' : 'white'
              }} />
            </TabItem>
          </button> 
          <button name="/default4" onClick={(event) => handleActivateTab(event)}>
            <TabItem active={url === '/default4'}>
              <Face sx={{
                fontSize: 32,
                fill: url === '/default4' ? 'black' : 'white'
              }} />
            </TabItem>
          </button> 
          <button name="/default5" onClick={(event) => handleActivateTab(event)}>
            <TabItem active={url === '/default5'}>
              <Face sx={{
                fontSize: 32,
                fill: url === '/default5' ? 'black' : 'white'
              }} />
            </TabItem>
          </button> 
          <button name="/default6" onClick={(event) => handleActivateTab(event)}>
            <TabItem active={url === '/default6'}>
              <Face sx={{
                fontSize: 32,
                fill: url === '/default6' ? 'black' : 'white'
              }} />
            </TabItem>
          </button> 
          <button name="/default7" onClick={(event) => handleActivateTab(event)}>
            <TabItem active={url === '/default7'}>
              <Face sx={{
                fontSize: 32,
                fill: url === '/default7' ? 'black' : 'white'
              }} />
            </TabItem>
          </button> 
          <button name="/default8" onClick={(event) => handleActivateTab(event)}>
            <TabItem active={url === '/default8'}>
              <Face sx={{
                fontSize: 32,
                fill: url === '/default8' ? 'black' : 'white'
              }} />
            </TabItem>
          </button> 
        </nav>
        <Outlet />
      </MainContentWrapper>
    </>
  );
}

export default MainContent;

