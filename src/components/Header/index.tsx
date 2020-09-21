import React from 'react';

import { FiPower } from 'react-icons/fi';
import { Header, HeaderContent } from './styles';

import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();

  return (
    <Header>
      <HeaderContent>
        <i>SurveyBaby</i>

        <button type="button" onClick={signOut}>
          <FiPower />
        </button>
      </HeaderContent>
    </Header>
  );
};

export default Dashboard;
