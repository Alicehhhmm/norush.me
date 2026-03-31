import { SidebarInput } from '../ui/sidebar';

type Props = Record<string, never>;

export const ChatSidebarSearch = (_props: Props) => {
  // TODO: add search functionality

  return (
    <div>
      <SidebarInput placeholder="Type to search..." />
    </div>
  );
};
