import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { media } from '../../theme/mediaSizes';

export const Wrapper = styled.div`
  color: ${colors.primary};
  display: none;

  ${media.desktop`
    display: flex;
  `};
`;

export const Underlay = styled.div`
  position: absolute;
  width: 100%;
  position: absolute;
  top: 0;
  height: 120px;
  background: rgb(241,241,250);
  background: linear-gradient(180deg, rgba(241,241,250,1) 0%, rgba(255,255,255,1) 100%);
`;

export const Menu = styled.div`
  flex: 1;
  font-size: 11px;
  font-weight: 700;
  cursor: pointer;
  padding-left: 25px;
  z-index: 1;

  ${media.largeDesktop`
    font-size: 12px;
    padding-left: 30px;
  `};
`;

export const SearchBar = styled.div`
  background: ${props => props.active ? 'white' : 'none'};
  height: ${props => props.active ? '50px' : 'auto'};
  border-radius: 25px;
  width: ${props => props.active ? '400px' : '15px'};
  display: flex;
  align-items: center;
  -webkit-transition: width 0.5s; /* For Safari 3.1 to 6.0 */
  transition: width 0.5s;

  ${props => props.active && `
    svg {
      width: 50px;
    }
  `}
`;

export const SearchInput = styled.input`
  border: none;
  border-top-left-radius: 25px;
  border-bottom-left-radius: 25px;
  flex: 1;
  height: 48px;
  padding: 0 20px;

  &:focus, &:active {
    outline: none;
  }
`;

export const Categories = styled.div`
  display: ${props => props.hidden ? 'hidden' : 'flex'};
`;