import data from 'assets/data/jobs-data.json';
import { useState, useEffect } from 'react';
import FontFace from 'global/FontFace';
import GlobalStyles from 'global/GlobalStyles';
import JobHeader from 'components/JobHeader';
import JobBoard from 'components/JobBoard';

const App = () => {
  const [jobData, setJobData] = useState([]);

  useEffect(() => {
    setJobData(data);
  }, []);

  console.log(jobData);

  return (
    <>
      <GlobalStyles />
      <FontFace />
      <JobHeader />
      {jobData.length === 0 ? (
        <p>Fetching jobs...</p>
      ) : (
        <JobBoard jobsList={jobData} />
      )}
    </>
  );
};

export default App;

// Tarefas
// 1. Estudar os designs e o json ✅
// 2. Criar o Job Board Component ✅
// 3. Obter os dados do json ✅
// 4. Renderizar os componentes com os dados ✅
// 5. Estilizar os components ✅
// 6. Criar o filtro de components
// 7. Criar filtro de dados
