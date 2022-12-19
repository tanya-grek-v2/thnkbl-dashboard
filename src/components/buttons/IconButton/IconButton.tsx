import React, { FC, useState, MouseEventHandler } from 'react';
import { Button } from 'antd';

import './IconButton.styles.scss';

type PropType = {
  icon: string,
  hoverIcon: string,
  onClick: MouseEventHandler<HTMLElement>,
};

export const IconButton: FC<PropType> = ({ icon, hoverIcon, onClick }: PropType) => {
  const [ isHovered, setIsHovered ] = useState(false);

  return (
    <Button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      type="ghost"
      shape="circle"
      icon={
        <img
          src={isHovered ? hoverIcon : icon}
          alt="icon"
          className="IconButton-icon"
        />
      }
    />
  );
};

