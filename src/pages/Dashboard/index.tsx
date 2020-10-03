import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom';
import copy from 'clipboard-copy';

import {
  Container,
  Content,
  ContentTop,
  ContentResult,
  ResultBoy,
  ResultGirl,
  DescriptionResult,
} from './styles';

import Header from '../../components/Header';
import Button from '../../components/Button';

import api from '../../services/api';
import { useToast } from '../../hooks/toast';
import { useLoading } from '../../hooks/loading';

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
    render: (url_bitly: string) => {
      return (
        <div aria-hidden="true" onClick={() => copy(url_bitly)}>
          {url_bitly}
        </div>
      );
    },
  },
];

interface PicksData {
  id: string;
  person_name: string;
  pick: string;
  url_bitly: string;
}

interface ResultData {
  boy: number;
  girl: number;
}

const Dashboard: React.FC = () => {
  const { addToast } = useToast();
  const { handlerLoading } = useLoading();

  const [picks, setPicks] = useState([]);
  const [result, setResult] = useState<ResultData>({} as ResultData);

  useEffect(() => {
    (async function func() {
      handlerLoading(true);

      try {
        const response = await api.get('/surveys');

        const newData = response.data.surveys.map((survey: PicksData) => {
          const { id: key, ...rest } = survey;
          return { key, ...rest };
        });

        setResult(response.data.result);
        console.log(response.data);

        setPicks(newData);
      } catch (e) {
        addToast({
          type: 'error',
          title: 'Erro',
          description: 'Ocorreu um erro ao obter os dados',
        });
      }

      handlerLoading(false);
    })();
  }, [handlerLoading, addToast]);

  return (
    <Container>
      <Header />

      <Content>
        <ContentTop>
          <Link to="/new">
            <Button typeClass="success">Novo</Button>
          </Link>
        </ContentTop>

        <ContentResult>
          <ResultBoy width={`${result.boy}%`} />
          <ResultGirl width={`${result.girl}%`} />
        </ContentResult>

        <DescriptionResult>
          {result.boy > 50 ? 'Os meninos venceram' : 'As meninas venceram'}
        </DescriptionResult>

        <Table size="small" dataSource={picks} columns={columns} />
      </Content>
    </Container>
  );
};

export default Dashboard;
