import React from 'react';
import Services from '../../../components/Services/Services';
import Banner from '../Banner/Banner';
import LatestPost from '../LatestPost/LatestPost';

const Home = () => {
  return (
    <div>
      <Banner />
      <Services />
      <LatestPost />
    </div>
  );
};

export default Home;
