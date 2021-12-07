import styled from 'styled-components';
import bgMobile from 'assets/images/bg-header-mobile.svg';
import bgDesktop from 'assets/images/bg-header-desktop.svg';

const Header = styled.header`
  img:last-child {
    display: none;
  }

  @media only screen and (min-width: 768px) {
    img:last-child {
      display: inline;
    }

    img:first-child {
      display: none;
    }
  }
`;

const JobHeader = () => {
  return (
    <Header className='h-32 bg-primary flex'>
      <img src={bgMobile} className='w-full' />
      <img src={bgDesktop} className='w-full' />
    </Header>
  );
};

export default JobHeader;
