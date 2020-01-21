import React, { useState } from 'react';

import * as NB from './style';

const NavigationBar = () => {
  const [isSearchBarOpen, toggleSearchBar] = useState(false);

  const closeIcon =
    <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="14" height="14" viewBox="0 0 50 50" version="1.1">
      <g id="surface1701463">
        <path style={{ fillRule: 'nonzero', fill: 'rgb(0%,0%,0%)', fillOpacity: '1', strokeWidth: '14', strokeLinecap: 'butt', strokeLinejoin: 'round', stroke: 'rgb(0%,0%,0%)', strokeOpacity: '1', strokeMiterlimit: '10' }} d="M 86 76.21273 L 140.506223 21.72105 L 150.27895 31.493777 L 95.78727 86 L 150.613433 140.826163 L 140.826163 150.613433 L 86 95.78727 L 31.072037 150.613433 L 21.386567 140.927963 L 76.21273 86 L 21.72105 31.493777 L 31.493777 21.72105 Z M 86 76.21273 " transform="matrix(0.268605,0,0,0.268605,1.9,1.9)" />
        <path style={{ stroke: 'none', fillRule: 'nonzero', fill: 'rgb(0%,0%,0%)', fillOpacity: '1' }} d="M 10.359375 7.734375 L 7.734375 10.359375 L 22.371094 25 L 7.644531 39.753906 L 10.246094 42.355469 L 25 27.628906 L 39.726562 42.355469 L 42.355469 39.726562 L 27.628906 25 L 42.265625 10.359375 L 39.640625 7.734375 L 25 22.371094 Z M 10.359375 7.734375 " />
      </g>
    </svg>;

  const searchIcon = <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink" width="16" height="16" viewBox="0 0 50 50" version="1.1">
    <g id="surface549191">
      <path
        style={{
          fillRule: 'nonzero',
          fill: 'rgb(12.941176%,21.960784%,45.882353%)',
          fillOpacity: '1',
          strokeWidth: '20',
          strokeLinecap: 'butt',
          strokeLineJoin: 'round',
          stroke: 'rgb(12.941176%,21.960784%,45.882353%)',
          strokeOpacity: '1',
          strokeMiterlimit: '10'
        }}
        d="M 130.72168 68.7982 C 130.72168 83.330497 125.427665 96.618025 116.6393 106.861119 L 161.360979 151.687779 L 151.687779 161.360979 L 106.4262 116.204381 C 96.797991 123.163086 85.010184 127.287319 72.232561 127.287319 C 39.973563 127.287319 13.75844 101.057199 13.75844 68.7982 C 13.75844 36.539202 39.973563 10.324079 72.232561 10.324079 C 104.506557 10.324079 130.72168 36.539202 130.72168 68.7982 Z M 20.64216 68.7982 C 20.64216 97.337891 43.692871 120.403599 72.232561 120.403599 C 100.787249 120.403599 123.83796 97.337891 123.83796 68.7982 C 123.83796 40.25851 100.787249 17.192801 72.232561 17.192801 C 43.692871 17.192801 20.64216 40.25851 20.64216 68.7982 Z M 20.64216 68.7982 " transform="matrix(0.260465,0,0,0.260465,2.6,2.6)" />
      <path
        style={{
          stroke: 'none',
          fillRule: 'nonzero',
          fill: 'rgb(12.941176%,21.960784%,45.882353%)',
          fillOpacity: '1'
        }}
        d="M 21.414062 5.289062 C 13.011719 5.289062 6.183594 12.117188 6.183594 20.519531 C 6.183594 28.921875 13.011719 35.753906 21.414062 35.753906 C 24.742188 35.753906 27.8125 34.679688 30.320312 32.867188 L 42.109375 44.628906 L 44.628906 42.109375 L 32.980469 30.433594 C 35.269531 27.765625 36.648438 24.304688 36.648438 20.519531 C 36.648438 12.117188 29.820312 5.289062 21.414062 5.289062 Z M 21.414062 7.078125 C 28.851562 7.078125 34.855469 13.085938 34.855469 20.519531 C 34.855469 27.953125 28.851562 33.960938 21.414062 33.960938 C 13.980469 33.960938 7.976562 27.953125 7.976562 20.519531 C 7.976562 13.085938 13.980469 7.078125 21.414062 7.078125 Z M 21.414062 7.078125 " />
    </g>
  </svg>;

  return (
    <NB.Wrapper>
      <NB.Underlay />
      <NB.Categories hidden={isSearchBarOpen}>
        <NB.Menu>Business</NB.Menu>
        <NB.Menu>Entertainment</NB.Menu>
        <NB.Menu>General</NB.Menu>
        <NB.Menu>Health</NB.Menu>
        <NB.Menu>Science</NB.Menu>
        <NB.Menu>Sports</NB.Menu>
        <NB.Menu>Technology</NB.Menu>
      </NB.Categories>
      <NB.Menu onClick={() => toggleSearchBar(!isSearchBarOpen)}>
        <NB.SearchBar active={isSearchBarOpen}>
          {isSearchBarOpen ? (
            <span style={{ flex: '1', display: 'flex', alignItems: 'center' }}>
              <NB.SearchInput id="search" type="text" autoFocus placeholder="Keywords or a phrase to search for" />
              <span onClick={() => toggleSearchBar(!isSearchBarOpen)}>{closeIcon}</span>
            </span>
          ) : searchIcon}
        </NB.SearchBar>
      </NB.Menu>
    </NB.Wrapper >
  );

}

export default NavigationBar;