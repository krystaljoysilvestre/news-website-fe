import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { media } from '../../theme/mediaSizes';

export const Header = styled.div`
  border-bottom: 1px solid ${colors.border};
  height: 100px;
  width: 200px;
  background: #f1f1fa;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 800;
  color: ${colors.primary};
  position: absolute;

  ${media.tablet`
    width: 250px;
  `};
`;

export const Item = styled.div`
  border-bottom: 1px solid ${colors.border};
  height: 75px;
  background: ${props => props.visited ? '#f9f9fb' : '#f0f4f9'};
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 12px;
  line-height: 1.3;
`;

export const Source = styled.div`
  color: ${colors.primary};
  font-size: 10px;
  font-weight: 700;
  margin-bottom: 5px;
`;

export const NewsTitle = styled.div`
  margin-bottom: 5px;

  &:last-child {
    margin-bottom: 0px;
  }
`;
