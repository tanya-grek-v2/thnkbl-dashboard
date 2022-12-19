import React, { useContext } from 'react';
import { Button } from 'antd';

import { ProjectContext } from '../Dashboard/Dashboard';

import logo from '../../accetss/ThunkableBeaver.png';
import addNewIcon from '../../accetss/Plus_Sign.svg';
import './Header.styles.scss';

export const Header: React.FC = () => {
  const { handleAddNew } = useContext(ProjectContext);

  return (
    <div className="header">
      <div className="header-content">
        <img src={logo} className="header-logo" alt="logo" />
        <div className="header-title">MY PROJECTS</div>
        <Button type="ghost" className="header-addNewBtn" onClick={handleAddNew}>
          <img src={addNewIcon} className="header-addNewBtn-icon" alt="Add new" />
        </Button>
      </div>
    </div>
  );
};

