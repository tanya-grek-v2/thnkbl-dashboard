import React, { useState } from 'react';
import { Modal } from 'antd';
import { useDispatch } from 'react-redux';

import { editProject, deleteProject } from '../../../store/slices/projectSlice';
import { normalizeDateTime } from '../../../helpers/dateTime';

import icon from '../../../accetss/defaultProjectIcon_2x.png';
import edit from '../../../accetss/EditIcon.svg';
import editHover from '../../../accetss/EditIcon_Hover.svg';
import remove from '../../../accetss/DeleteIcon.svg';
import removeHover from '../../../accetss/DeleteIcon_Hover.svg';
import questionIcon from '../../../accetss/Question.svg';
import { IconButton } from '../../buttons/IconButton/IconButton';
import './ProjectsListItem.styles.scss';

const { confirm } = Modal;

type PropType = {
  item: {
    id: string,
    title: string,
    updatedAt: string,
  },
};

export const ProjectsListItem: React.FC<PropType> = ({ item }: PropType) => {
  const dispatch = useDispatch();

  const [ isEdit, setIsEdit ] = useState(item.title === '');
  const [ itemTitle, setItemTitle ] = useState(item.title);

  const handleEdit = () => {
    dispatch(editProject({
      ...item,
      title: itemTitle,
    }));
    setIsEdit(false);
  };

  const showDeleteConfirm = () => {
    confirm({
      title: 'Are you sure you want to delete this project?',
      icon: <img className="anticon ProjectsListItem-modalIcon" src={questionIcon} alt="questionIcon" />,
      content: 'This action can\'t be undone',
      okText: 'Yes',
      okType: 'primary',
      cancelText: 'No',
      cancelButtonProps: {
        style: {
          backgroundColor: '#F7F9FD',
        },
      },
      width: 433,
      className: 'modalDeleteConfirm',
      maskStyle: {
        background: 'rgba(187, 187, 187, 0.14)',
      },
      onOk() {
        dispatch(deleteProject(item));
      },
    });
  };

  return (
    <div className="ProjectsListItem">
      <img src={icon} alt="icon" className="ProjectsListItem-icon" />
      {isEdit ? (
        <input
          className="ProjectsListItem-input"
          value={itemTitle}
          onChange={({ target: { value } }) => setItemTitle(value)}
          onKeyDown={event => {
            if (event.key === 'Enter') {
              handleEdit();
            }
          }}
          onBlur={handleEdit}
        />
      ) : (
        <>
          <span className="ProjectsListItem-title">{itemTitle}</span>
          <IconButton
            icon={edit}
            hoverIcon={editHover}
            onClick={() => setIsEdit(true)}
          />
        </>
      )}

      <span className="ProjectsListItem-date">{isEdit ? '' : normalizeDateTime(item.updatedAt)}</span>
      <IconButton
        icon={remove}
        hoverIcon={removeHover}
        onClick={showDeleteConfirm}
      />
    </div>
  );
};
