import { ReactElement, SVGProps } from 'react';

import Check from './check.svg';
import Search from './search.svg';
import SearchOn from './search-active.svg';
import CloseBox from './close-button.svg';
import Close from './close.svg';
import Favorites from './favorites.svg';
import Hand from './hand.svg';
import Marker from './marker.svg';
import Quote from './quote.svg';
import Logo from './logo.svg';
import Review from './review-off.svg';
import Star from './star.svg';
import Delete from './delete.svg';
import KakaoButton from './kakao-button.svg';
import Content from './content.svg';
import LoginLogo from './login-logo.svg';
import Back from './back.svg';
import ReviewBoard from './review.svg';
import Copy from './copy.svg';

const importedIcons = {
  Check,
  CloseBox,
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
  Delete,
  KakaoButton,
  Content,
  LoginLogo,
  Back,
  ReviewBoard,
  Copy,
};

type IconName = keyof typeof importedIcons;
type ReactComponent = (props: SVGProps<SVGElement>) => ReactElement;
export default importedIcons as Record<IconName, ReactComponent>;
