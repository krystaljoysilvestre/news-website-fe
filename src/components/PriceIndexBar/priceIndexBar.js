import React from 'react';

import * as PI from './style';

const PriceIndexBar = () => {

  return (
    <PI.Wrapper>
      <PI.Item>
        <PI.Code>
          BTC/EUR
          </PI.Code>
        <PI.PriceChange rate="positive">
          11.57%
          </PI.PriceChange>
      </PI.Item>
      <PI.Item>
        <PI.Code>
          BTC/GRP
          </PI.Code>
        <PI.PriceChange rate="negative">
          -2.77%
          </PI.PriceChange>
      </PI.Item >
      <PI.Item>
        <PI.Code>
          BTH/EUR
          </PI.Code>
        <PI.PriceChange rate="negative">
          3.20%
          </PI.PriceChange>
      </PI.Item>
      <PI.Item>
        <PI.Code>
          BTC/EUR
          </PI.Code>
        <PI.PriceChange rate="positive">
          11.57%
          </PI.PriceChange>
      </PI.Item>
      <PI.Item>
        <PI.Code>
          XRP/BTC
          </PI.Code>
        <PI.PriceChange rate="negative">
          -2.77%
          </PI.PriceChange>
      </PI.Item>
      <PI.Item>
        <PI.Code>
          BTC/USD
          </PI.Code>
        <PI.PriceChange rate="positive">
          1.23%
          </PI.PriceChange>
      </PI.Item>
    </PI.Wrapper>
  );
}


export default PriceIndexBar;