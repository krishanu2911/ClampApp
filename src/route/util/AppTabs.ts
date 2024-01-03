import { clockIcon, exploreGlobeIcon, homeIcon } from '../../constants/imageUrl';
import DashBoardScreeen from '../../screens/DashBoardScreen';
import ExploreScreeen from '../../screens/ExploreScreen';
import HistoryScreeen from '../../screens/HistoryScreen';
import DrawerNavigator from '../DrawerNavigator';

export type tabTypes = 'Dashboard' | 'Explore' | 'History';

export interface AppTabsInterface {
  tabName: tabTypes;
  tabIconsUrl: string;
  component: () => JSX.Element;
}

export const appTabs: AppTabsInterface[] = [
  {tabName: 'Dashboard', tabIconsUrl: homeIcon, component: DashBoardScreeen},
  {tabName: 'Explore',tabIconsUrl: exploreGlobeIcon, component: ExploreScreeen},
  {tabName: 'History',tabIconsUrl: clockIcon, component: HistoryScreeen},
];
