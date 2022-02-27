import { Divider, List } from '@mui/material';
import HomeItem from './SideMenuListItemHome';
import CategoryItem from './SideMenuListItemCategory';
import { categories } from '../../constants/categories';

export default function SideMenu() {
  // TODO: styleをmodule.cssに移す
  return (
    <nav>
      <List sx={{ color: 'white' }}>
        <HomeItem />
        <Divider />
        {categories.map((category) => (
          <CategoryItem key={`side-menu-category-${category.name}`} category={category} />
        ))}
      </List>
    </nav>
  );
}
