import { Container, styled, Box } from '@mui/material';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ScrollToTop from 'react-scroll-up';
import TopNav from '../common/topnav';

type LayoutProps = {
  children: React.ReactNode;
};

const StyledBox = styled(Box)({
  marginTop: 80,
});

const Layout = ({ children }: LayoutProps) => {
  return (
    <Container maxWidth='xl'>
      <TopNav />
      <StyledBox>{children}</StyledBox>
      <ScrollToTop showUnder={160}>
        <ArrowCircleUpIcon style={{ fontSize: 40 }} />
      </ScrollToTop>
    </Container>
  );
};

export default Layout;
