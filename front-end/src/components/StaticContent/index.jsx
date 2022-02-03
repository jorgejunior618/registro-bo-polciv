import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../Header";
import { MainContentWrapper } from "./styles";
import {
  MenuBookRounded,
  Face,
  Map,
  Balance,
  AccountTreeOutlined,
  AssignmentOutlined,
  Attachment,
  EditOutlined,
  WidgetsRounded,
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

  function sxProperties(verificator) {
    return {
      fontSize: 32,
      fill: url === verificator ? 'black' : 'white',
    }
  }
  
  return (
    <>
      <Header />

      <MainContentWrapper>
        <nav>
          <TabItem name="/registroBO" onClick={handleActivateTab} active={url === '/registroBO'}>
            <MenuBookRounded sx={sxProperties('/registroBO')} />
          </TabItem>

          <TabItem name="/default1" onClick={handleActivateTab} active={url === '/default1'}>
            <Face sx={sxProperties('/default1')} />
          </TabItem>

          <TabItem name="/default2" onClick={handleActivateTab} active={url === '/default2'}>
            <Map sx={sxProperties('/default2')} />
          </TabItem>

          <TabItem name="/default3" onClick={handleActivateTab} active={url === '/default3'}>
            <WidgetsRounded sx={sxProperties('/default3')} />
          </TabItem>

          <TabItem name="/default4" onClick={handleActivateTab} active={url === '/default4'}>
            <Balance sx={sxProperties('/default4')} />
          </TabItem>

          <TabItem name="/default5" onClick={handleActivateTab} active={url === '/default5'}>
            <AccountTreeOutlined sx={sxProperties('/default5')} />
          </TabItem>

          <TabItem name="/default6" onClick={handleActivateTab} active={url === '/default6'}>
            <AssignmentOutlined sx={sxProperties('/default6')} />
          </TabItem>

          <TabItem name="/default7" onClick={handleActivateTab} active={url === '/default7'}>
            <Attachment sx={sxProperties('/default7')} />
          </TabItem>

          <TabItem name="/default8" onClick={handleActivateTab} active={url === '/default8'}>
            <EditOutlined sx={sxProperties('/default8')} />
          </TabItem>
        </nav>
        <Outlet />
      </MainContentWrapper>
    </>
  );
}

export default MainContent;

