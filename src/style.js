import styled from 'styled-components';
import { colors } from './theme/colors';
import { media } from './theme/mediaSizes';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;
  background: #f1f1fa;
`;

export const SideBar = styled.div`
  width: 70px;
  z-index: 1;
  background: white;
  display: flex;
  flex-direction: column;

  ${media.desktop`
    width: 100px;
  `};
`;

export const Logo = styled.div`
  height: 70px;
  width: 70px;
  background: #45519f;
  border: 1px solid ${colors.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 36px;

  ${media.desktop`
    width: 100px;
    height: 100px;
  `};
`;

export const Container = styled.div`
  flex: 1;
  background: white;
  display: flex;
  padding: 0 20px 20px 20px;
  z-index: ${props => props.collapse ? '0' : '1'};;
  flex-direction: column;
  overflow: hidden;
  margin-right: ${props => props.collapse ? '0' : '-200px'};
  margin-top: ${props => props.collapse ? '0' : '10px'};
  border-top-left-radius: ${props => props.collapse ? '0' : '20px'};
  border-left: 1px solid ${props => props.collapse ? colors.border : 'white'};
  -webkit-transition: margin 0.3s ease-out;
  -moz-transition: margin 0.3s ease-out;
  -o-transition: margin 0.3s ease-out;
  transition: margin 0.3s ease-out;
  -webkit-box-shadow: -3px 3px 3px 0px rgba(224,224,224,1);
  -moz-box-shadow: -3px 3px 3px 0px rgba(224,224,224,1);
  box-shadow: -3px 3px 3px 0px rgba(224,224,224,1);

  ${media.tablet`
    padding: 0 40px 40px 40px;
  `};
  ${media.desktop`
    padding: 0 80px 50px 80px;
    margin-right: ${props => props.collapse ? '0' : '-250px'};
  `};
`;

export const Collapse = styled.div`
  border: 1px solid #ccc;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 8px;
  cursor: pointer;

  div {
    background: ${colors.primary};
    width: 18px;
    height: 2px;
    margin: 2px;

    &:last-child {
      width: 13px;
    }
  }
`;

export const CollapsiblePanel = styled.div`
  width: 200px;
  overflow: scroll;
  margin-left: ${props => props.collapse ? '-200px' : '0'};
  -webkit-transition: all 0.3s ease-out;
  -moz-transition: all 0.3s ease-out;
  -o-transition: all 0.3s ease-out;
  transition: all 0.3s ease-out;

  ::-webkit-scrollbar {
    display: none;
  }

  ${media.tablet`
    width: 250px;
    margin-left: ${props => props.collapse ? '-250px' : '0'};
  `};
`;

export const TopBar = styled.div`
  min-height: 70px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${media.desktop`
    min-height: 100px;
  `};
`;

export const MoreNews = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  position: absolute;
  bottom: 50px;
  right: 80px;
  border-radius: 50%;
  background: #55c6ea;
  color: white;
  font-size: 24px;
  display: none;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    width: 60px;
    height: 60px;
    font-size: 28px;
    right: 75px;
    bottom: 45px;
  }

  ${media.tablet`
    display: flex;
  `};
`;