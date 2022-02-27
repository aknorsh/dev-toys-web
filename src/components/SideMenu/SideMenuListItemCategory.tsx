import { List, ListItem } from '@mui/material';
import { Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ToolItem from './SideMenuListItemTool';
import type { Category } from 'types/tool';

const CategoryItem = ({ category }: { category: Category }) => (
  <ListItem disablePadding>
    <Accordion square sx={{ backgroundColor: 'black', color: 'white', width: '100%' }}>
      <AccordionSummary
        expandIcon={<ExpandMore sx={{ color: 'white' }} />}
        aria-label='Expand'
        aria-controls='-content'
        id='-header'
      >
        {category.name}
      </AccordionSummary>
      <AccordionDetails>
        <List>
          {category.tools.map((tool) => (
            <ToolItem
              key={`side-menu-tool-item-${category.name}-${tool.name}`}
              tool={tool}
              categoryPath={category.path}
            />
          ))}
        </List>
      </AccordionDetails>
    </Accordion>
  </ListItem>
);

export default CategoryItem;
