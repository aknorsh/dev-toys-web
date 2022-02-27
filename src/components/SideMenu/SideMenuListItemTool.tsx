import { ListItem, ListItemButton, ListItemText } from '@mui/material';
import Link from 'next/link';
import type { Tool } from 'types/tool';

const ToolItem = ({ tool, categoryPath }: { tool: Tool; categoryPath: string }) => (
  <ListItem disablePadding>
    <Link href={`/${categoryPath}/${tool.path}`} passHref scroll>
      <ListItemButton>
        <ListItemText primary={tool.name} />
      </ListItemButton>
    </Link>
  </ListItem>
);

export default ToolItem;
