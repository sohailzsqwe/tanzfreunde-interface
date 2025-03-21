
import React from 'react';
import TeamMemberCard from './TeamMemberCard';
import { teamMembers } from './TeamData';

const TeamGrid: React.FC = () => {
  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMemberCard 
              key={index} 
              member={member} 
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamGrid;
