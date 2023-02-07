import { AppBar, Container, Toolbar, styled, Stack } from '@mui/material';
import Link from 'next/link';
import { useEffect } from 'react';
import { themes } from 'theme';

const StyledStack = styled(Stack)({
  width: '100%',
});

function TopNav() {
  // useEffect(() => {
  //   window.addEventListener('scroll', headerColorChange);
  //   return () => window.removeEventListener('scroll', headerColorChange);
  // });
  // const headerColorChange = () => {
  //   const windowsScrollTop = window.pageYOffset;
  //   const navbar = document.querySelector('#navbar');
  //   if (windowsScrollTop > 50) {
  //     // @ts-ignore
  //     navbar.style.backgroundColor = '#fff';
  //   } else {
  //     // @ts-ignore
  //     navbar.style.backgroundColor = 'transparent';
  //   }
  // };

  return (
    <AppBar
      id='navbar'
      sx={{ backgroundColor: themes.light.colorBlack }}
      elevation={0}
    >
      <Container maxWidth='xl'>
        <Toolbar disableGutters>
          <StyledStack
            direction='row'
            alignItems='center'
            justifyContent='space-between'
          >
            <Link href={'/'} passHref>
              Home
            </Link>
          </StyledStack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default TopNav;
