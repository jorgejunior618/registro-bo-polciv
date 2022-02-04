import ConstructionIcon from '@mui/icons-material/Construction';
import { PageWrapper } from "./styles";


function DefaultPage() {
  return(
    <PageWrapper>
      <h1>Página em construção ...</h1>
      <ConstructionIcon sx={{ fontSize: 120, marginTop: [2], fill: "#707070" }}/>
    </PageWrapper>
  );
}

export default DefaultPage;
