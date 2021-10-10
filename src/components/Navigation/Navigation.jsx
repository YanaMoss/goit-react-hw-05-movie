import { NavLink } from 'react-router-dom';
import {
  NavigationStyle,
  NavigationList,
  NavigationItem,
} from './Navigation.styled';
const Navigation = () => (
  <NavigationStyle>
    <h1>Cinemafan</h1>
    <NavigationList>
      <NavigationItem>
        <NavLink
          exact
          to="/"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Home
        </NavLink>
      </NavigationItem>
      <NavigationItem>
        <NavLink
          exact
          to="/movies"
          className="NavLink"
          activeClassName="NavLink--active"
        >
          Movie
        </NavLink>
      </NavigationItem>
    </NavigationList>
  </NavigationStyle>
);
export default Navigation;
