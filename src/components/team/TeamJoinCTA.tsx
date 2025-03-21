
import React from 'react';
import { Mail } from 'lucide-react';

const TeamJoinCTA: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Werde Teil unseres Teams</h2>
          <p className="text-lg text-gray-600 mb-8">
            Du bist Tanzlehrer oder möchtest es werden? Wir sind immer auf der Suche nach talentierten und motivierten Menschen, die unsere Leidenschaft fürs Tanzen teilen.
          </p>
          <a 
            href="mailto:jobs@tanzschule-family-and-friends.de" 
            className="btn-primary inline-flex items-center"
          >
            <Mail className="w-5 h-5 mr-2" />
            Initiativbewerbung senden
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamJoinCTA;
