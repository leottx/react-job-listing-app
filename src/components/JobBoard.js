// COMPONENTS
import JobCard from './JobCard';

const JobBoard = ({ jobsList }) => {
  return (
    <main className='bg-ternary px-8 py-14'>
      <ul className='flex flex-col gap-10 m-auto max-w-screen-lg'>
        {jobsList.map((job) => {
          const { id } = job;
          return <JobCard key={`${id}`} jobData={job} />;
        })}
      </ul>
    </main>
  );
};

export default JobBoard;
