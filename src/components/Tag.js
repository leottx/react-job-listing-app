import { useContext, useState } from 'react';
import styled from 'styled-components';
import { IoClose } from 'react-icons/io5';
import { SearchData } from 'App';

const TagStyled = styled.button`
  span::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    background: ${({ isTagActive }) => (isTagActive ? '#63A5A4' : '#9ca3af')};
    right: 0;
    width: 1.9rem;
    border-radius: 0 0.375rem 0.375rem 0;
  }
`;

const Tag = ({ tag }) => {
  const { id, name, isActive } = tag;
  const { setTagsList, tagsList } = useContext(SearchData);

  const handleTagState = () => {
    const newTagsList = [...tagsList];
    const index = tagsList.findIndex((current) => current.id === id);
    newTagsList[index].isActive = !newTagsList[index].isActive;
    setTagsList(newTagsList);
    // setTagsList((prevState) => {
    //   const index = prevState.findIndex((current) => current.id === id);
    //   prevState[index].isActive = !prevState[index].isActive;

    //   console
    // });
  };

  return (
    <TagStyled
      className={`${'font-bold relative rounded-md flex items-center gap-4 p-2'} ${
        isActive ? 'bg-ternary text-primary' : 'bg-gray-300 text-gray-500'
      }`}
      onClick={handleTagState}
      isTagActive={isActive}
    >
      {name}
      <span>
        <IoClose
          className={`${'z-20 h-4 w-4 relative text-gray-50 transform'} ${
            isActive ? 'rotate-0' : 'rotate-45'
          }`}
        />
      </span>
    </TagStyled>
  );
};

export default Tag;
