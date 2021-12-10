// DATA
import data from 'assets/data/jobs-data.json';

// UTILS
import { useState } from 'react';
import { buildTagsList } from 'utils/buildTagsList';

// COMPONENTS
import React from 'react';
import FontFace from 'global/FontFace';
import GlobalStyles from 'global/GlobalStyles';
import JobHeader from 'components/JobHeader';
import JobBoard from 'components/JobBoard';

export const SearchData = React.createContext();

const App = () => {
  const [jobsList, setJobList] = useState(data);
  const [filteredJobs, setFilteredJobs] = useState(jobsList);
  const [tagsList, setTagsList] = useState(buildTagsList(jobsList));
  const [inputData, setInputData] = useState('');

  return (
    <>
      <GlobalStyles />
      <FontFace />
      <JobHeader />
      {jobsList.length === 0 ? (
        <p>Fetching jobs...</p>
      ) : (
        <SearchData.Provider
          value={{
            inputData,
            tagsList,
            filteredJobs,
            jobsList,
            setInputData,
            setTagsList,
            setFilteredJobs,
          }}
        >
          <JobBoard />
        </SearchData.Provider>
      )}
    </>
  );
};

export default App;
