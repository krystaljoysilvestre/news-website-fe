import styled from 'styled-components';
import { colors } from '../../theme/colors';
import { media } from '../../theme/mediaSizes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const Item = styled.div`
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  ${media.desktop`
    height: 100px;
  `};
`;

export const Code = styled.div`
  font-size: 10px;
  font-weight: 700;
  color: ${colors.primary};
  margin: 5px;
`;

export const PriceChange = styled.div`
  font-size: 12px;
  color: ${props => props.rate === 'positive' ? colors.success : colors.warning};
`;
