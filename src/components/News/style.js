import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { media } from '../../theme/mediaSizes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.div`
  font-size: 28px;
  color: ${colors.primary};
  margin: 15px 0;

  ${media.tablet`
    font-size: 32px;
  `};

  b {
    font-weight: 800;
  }
`;

export const Container = styled.div`
  height: 100%;
  margin: 0 -10px;
  overflow-y: scroll;

  ${media.tablet`
    overflow-y: ${props => props.collapse ? 'hidden' : 'scroll'};
  `};
`;

export const Caption = styled.a`
  background: #eef0f6;
  height: 100%;
  border-radius: 10px;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  color: inherit;

  ${media.desktop`
    padding: 25px;
  `};

  p {
    font-size: 10px;
    line-height: 1.3;
    margin: 0px;
    max-height: 48px;
    min-height: 12px;
    overflow: hidden;
    margin-bottom: 1px;
    text-overflow: ellipsis;

    ${media.desktop`
      font-size: 12px;
      margin-bottom: 3px;
    `};
  }

  &:hover {
    text-decoration: none;
    color: inherit;

    p {
      max-height: 100%;
      transition: max-height 1.5s;
      -webkit-transition: max-height 1.5s;
    }
  }
`;

export const Title = styled.h3`
  color: ${colors.primary};
  font-weight: 700;
  font-size: 13px;
  margin-bottom: 1px;

  ${media.desktop`
    font-size: 14px;
    margin-bottom: 3px;
  `};
`;

export const Item = styled.div`
  padding: 10px;
  animation-delay: ${props => props.transition * 0.2}s;
  height: 45%;

  ${media.tablet`
    float: ${props => props.recent ? 'left' : 'right'};
    width: ${props => props.recent ? 'calc(100%/3 * 2)' : 'calc(100%/3)'};
    height: ${props => props.recent ? '60%' : '40%'};
  `};

  img {
    object-fit: cover;
    -o-object-position: 50% 50%;
    object-position: 50% 50%;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 10px;
  }

  ${props => props.hasImage && `
    ${Caption} {
      position: absolute;
      top: 10px;
      background: transparent;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background: rgb(77,77,77);
      background: linear-gradient(0deg, rgba(50,50,50,0.7) 0%, rgba(0,0,0,0) 70%);
      color: white;
      text-shadow: 1px 1px rgba(50,50,50,0.3);
    }

    ${Title} {
      color: white;
    }
  `}
  
`;