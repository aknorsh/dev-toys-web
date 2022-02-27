import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { AppProps } from 'next/app';
import Head from 'next/head';
import SideMenu from '../components/SideMenu/SideMenu';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Layout.tsxに切り出す
  return (
    <>
      <Head>
        <title>Dev Toys Web</title>
      </Head>

      <Grid container spacing={0} sx={{ height: '100vh' }}>
        <Grid item md={2} xs={3} maxWidth={20}>
          <Box sx={{ width: '100%', height: '100%', backgroundColor: 'black' }}>
            <SideMenu />
          </Box>
        </Grid>
        <Grid item md={10} xs={9}>
          <Box sx={{ paddingLeft: 2 }}>
            <Component {...pageProps} />
          </Box>
        </Grid>
      </Grid>
    </>
  );
}

export default MyApp;
