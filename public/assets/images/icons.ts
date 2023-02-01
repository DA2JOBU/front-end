import { ReactElement, SVGProps } from 'react';

import Check from './check.svg';
import Search from './search.svg'
import SearchOn from './search-active.svg';
import Close from './close-button.svg';
import Favorites from './favorites.svg';
import Hand from './hand.svg';
import Marker from './marker.svg';
import Quote from './quote.svg';
import Logo from './logo.svg';
import Review from './review-off.svg';
import Star from './star.svg';

const importedIcons = {
  Check,
  Close,
  Favorites,
  Hand,
  Marker,
  Quote,
  Logo,
  Review,
  Search,
  SearchOn,
  Star,
};

type IconName = keyof typeof importedIcons;
type ReactComponent = (props: SVGProps<SVGElement>) => ReactElement;
export default importedIcons as Record<IconName,  ReactComponent>;