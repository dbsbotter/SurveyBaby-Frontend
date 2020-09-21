import React, { useEffect, useState } from 'react';
import { Table } from 'antd';

import { Link } from 'react-router-dom';
import { Container, Content, ContentTop } from './styles';

import Header from '../../components/Header';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import Button from '../../components/Button';

const columns = [
  {
    title: 'Nome',
    dataIndex: 'person_name',
    key: 'person_name',
  },
  {
    title: 'Escolha',
    dataIndex: 'pick',
    key: 'pick',
    render: (pick: string) => {
      if (pick === 'M') return 'Masculino';
      if (pick === 'F') return 'Feminino';
      return 'Aguardando...';
    },
  },
  {
    title: 'Url',
    dataIndex: 'url_bitly',
    key: 'url_bitly',
  },
];

interface PicksData {
  id: string;
  person_name: string;
  pick: string;
  url_bitly: string;
}

const Dashboard: React.FC = () => {
  const { addToast } = useToast();

  const [picks, setPicks] = useState([]);

  useEffect(() => {
    (async function func() {
      try {
        const response = await api.get('/surveys');

        const newData = response.data.map((survey: PicksData) => {
          const { id: key, ...rest } = survey;
          return { key, ...rest };
        });

        setPicks(newData);
      } catch (e) {
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Ocorreu um erro ao obter os dados',
        });
      }
    })();
  }, [addToast]);

  return (
    <Container>
      <Header />

      <Content>
        <ContentTop>
          <Link to="/new">
            <Button typeClass="success">Novo</Button>
          </Link>
        </ContentTop>

        <Table size="small" dataSource={picks} columns={columns} />
      </Content>
    </Container>
  );
};

export default Dashboard;
