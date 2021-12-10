import { useContext } from 'react';

// UTILS
import { nanoid } from 'nanoid';

// CONTEXT API
import { SearchData } from 'App';

// COMPONENTS
import Dropdown from './Dropdown';

const JobSearch = () => {
  const { inputData, tagsList, jobsList, setInputData, setFilteredJobs } =
    useContext(SearchData);

  const handleFilterJobs = () => {
    let selectedJobs = [...jobsList];
    let activeTags = tagsList.filter((tag) => tag.isActive);
    activeTags = activeTags.map((tag) => tag.name);

    if (activeTags.length) {
      selectedJobs = selectedJobs.filter((job) => {
        return (
          job.languages.filter((lang) => activeTags.includes(lang)).length +
          job.tools.filter((tool) => activeTags.includes(tool)).length
        );
      });
    }

    if (inputData !== '') {
      selectedJobs = selectedJobs.filter((job) => {
        return (
          job.company
            .toLowerCase()
            .trim()
            .includes(inputData.toLowerCase().trim()) ||
          job.position
            .toLowerCase()
            .trim()
            .includes(inputData.toLowerCase().trim())
        );
      });
    }

    // console.log(JSON.stringify(selectedJobs, null, 2));

    setFilteredJobs(selectedJobs);
    setInputData('');
  };

  return (
    <form
      className='mb-10 absolute -top-14 shadow-lg flex flex-col gap-4 bg-white p-5 left-8 right-8 rounded-md max-w-screen-lg m-auto '
      onSubmit={(e) => e.preventDefault()}
    >
      <div className='flex flex-col gap-4 sm:flex-row'>
        <input
          type='text'
          className='w-full p-2 rounded-md border-gray-300 border-2 text-gray-900 placeholder-gray-300 focus:border-primary outline-none sm:w-3/5'
          onChange={(e) => setInputData(e.target.value)}
          value={inputData}
          placeholder='Company or position...'
        />
        <Dropdown />
      </div>
      <button
        className='rounded-md text-center bg-primary text-white py-3 font-bold hover:bg-darkCyan transition-colors'
        onClick={handleFilterJobs}
      >
        Search
      </button>
    </form>
  );
};

export default JobSearch;
