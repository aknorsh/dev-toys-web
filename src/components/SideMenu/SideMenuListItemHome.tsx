import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import Link from 'next/link';

const Home = () => (
  <ListItem disablePadding>
    <Link href='/' passHref scroll>
      <ListItemButton>
        <ListItemIcon>
          <HomeIcon sx={{ color: 'white' }} />
        </ListItemIcon>
        <ListItemText primary='All Tools' />
      </ListItemButton>
    </Link>
  </ListItem>
);

export default Home;
