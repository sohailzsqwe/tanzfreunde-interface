
import React from 'react';
import Layout from '../components/Layout';
import TeamHero from '../components/team/TeamHero';
import TeamGrid from '../components/team/TeamGrid';
import TeamJoinCTA from '../components/team/TeamJoinCTA';

const Team = () => {
  return (
    <Layout>
      <TeamHero />
      <TeamGrid />
      <TeamJoinCTA />
    </Layout>
  );
};

export default Team;
