import React from 'react';
import closeIcon from '../../icons/closeIcon.png';
import onlineIcon from '../../icons/onlineIcon.png';
import './InfoBar.css';
import {NavInfo} from './InfoBar.style';

const InfoBar = ({room}) => (
  <NavInfo>
    <div className="leftInnerContainer">
      <img className="onlineIcon" src={onlineIcon} alt="online"/>
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/"><img src={closeIcon} alt="close"/></a>
    </div>
  </NavInfo>
)

export default InfoBar
