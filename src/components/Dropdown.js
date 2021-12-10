import { useState, useContext } from 'react';

// CONTEXT API
import { SearchData } from 'App';

// COMPONENTS
import Tag from './Tag';
import { IoIosArrowDropdownCircle } from 'react-icons/io';

const Dropdown = () => {
  const [showItems, setShowItems] = useState(false);
  const { tagsList } = useContext(SearchData);

  return (
    <div className='relative px-3 py-3 text-gray-900 flex flex-grow rounded-md bg-gray-200 items-center justify-between z-20'>
      <span className='text-sm'>
        {`${tagsList.filter((tag) => tag.isActive).length} tag(s) selected`}
      </span>
      {showItems && (
        <ul className='absolute shadow-lg flex flex-wrap gap-3 text-xs top-10 inset-x-0 rounded-b-md px-3 bg-gray-200 pt-2 pb-4 z-10'>
          {tagsList.map((tag) => {
            return (
              <li key={`item-${tag.id}`}>
                <Tag tag={tag} />
              </li>
            );
          })}
        </ul>
      )}
      <button
        onClick={() => setShowItems(!showItems)}
        className={showItems ? 'transform rotate-180' : 'transform rotate-0'}
      >
        <IoIosArrowDropdownCircle className={'h-6 w-6 text-gray-400'} />
      </button>
    </div>
  );
};

export default Dropdown;
