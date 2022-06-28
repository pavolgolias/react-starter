import { createContext } from 'react';
import { type SiderProps } from 'antd';

export enum SidebarState {
  OPEN_SIDEBAR = 'openSidebar',
  COLLAPSED_SIDEBAR = 'collapsedSidebar',
  OPEN_DRAWER = 'openDrawer',
  CLOSED_DRAWER = 'closedDrawer',
}

type AdminLayoutContextProps = {
  sidebarTheme: SiderProps['theme'];
  isCollapsed: boolean;
  isDrawerVisible: boolean;
  useDrawer: boolean;
  sidebarState: SidebarState;
  toggle: VoidFunction;
};

const AdminLayoutContext = createContext({} as AdminLayoutContextProps);

export default AdminLayoutContext;
