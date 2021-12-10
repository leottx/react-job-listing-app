import { useContext } from 'react';

// COMPONENTS
import { SearchData } from 'App';
import JobSearch from './JobSearch';
import JobCard from './JobCard';

const JobBoard = () => {
  const { filteredJobs: jobsList } = useContext(SearchData);
  return (
    <main
      className='bg-ternary px-8 pt-52 pb-14 relative sm:pt-36'
      style={{ minHeight: 'calc(100vh - 8rem)' }}
    >
      <JobSearch />
      <ul className='flex flex-col gap-14 m-auto max-w-screen-lg md:gap-10'>
        {jobsList.map((job) => {
          const { id } = job;
          return <JobCard key={`${id}`} jobData={job} />;
        })}
      </ul>
    </main>
  );
};

export default JobBoard;
