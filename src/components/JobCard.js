import styled from 'styled-components';
import { BsDot } from 'react-icons/bs';

const JobCardStyled = styled.li``;

const MainTag = styled.span``;

const JobCard = ({ jobData }) => {
  const {
    company,
    logo,
    new: newJob,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
    tools,
  } = jobData;

  return (
    <JobCardStyled className='shadow-lg bg-white border-l-8 border-primary flex flex-col gap-4 rounded-md px-5 pt-10 pb-5 relative md:flex-row md:items-center md:pt-5'>
      <div className='absolute  w-12 md:w-24 -top-6 md:static'>
        <img
          src={require(`../assets/images/${logo}`).default}
          alt={`${company}`}
        />
      </div>
      <div className='flex flex-col gap-4 border-grey-900 border-b pb-4 md:border-none md:pb-0'>
        <h3>
          <span className='text-primary text-sm font-bold'>{company}</span>
          {newJob && <MainTag type='new' />}
          {featured && <MainTag type='featured' />}
        </h3>
        <h2 className='text-base text-gray-800 font-bold'>{position}</h2>
        <p className='flex'>
          <span className='text-gray-400 text-xs'>{postedAt}</span>
          <BsDot className='text-gray-400' />
          <span className='text-gray-400 text-xs'>{contract}</span>
          <BsDot className='text-gray-400' />
          <span className='text-gray-400 text-xs'>{location}</span>
        </p>
      </div>
      <div className='md:ml-auto'>
        <ul className='flex gap-4 flex-wrap'>
          {[...languages, ...tools].map((item, index) => {
            return (
              <li
                key={`item-${index}`}
                className='inline-flex text-sm font-bold p-2 rounded-md bg-ternary text-primary'
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>
    </JobCardStyled>
  );
};

export default JobCard;
