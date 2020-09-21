import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FiCheckCircle, FiXCircle } from 'react-icons/fi';
import { useToast } from '../../hooks/toast';
import api from '../../services/api';

import {
  Container,
  Content,
  ContentButtons,
  ButtonBoy,
  ButtonGirl,
  ContentError,
} from './styles';

interface URLParams {
  id: string;
}

interface SurveyData {
  id: string;
  person_name: string;
  pick: string;
}

enum Status {
  Normal,
  Error,
  Success,
}

interface ErrorData {
  message: string;
}

interface Level {
  status: Status;
  error?: ErrorData;
}

const Pick: React.FC = () => {
  const [level, setLevel] = useState<Level>({
    status: Status.Normal,
  });

  const [survey, setSurvey] = useState<SurveyData>({} as SurveyData);

  const { id } = useParams<URLParams>();

  const { addToast } = useToast();

  useEffect(() => {
    (async function func() {
      try {
        const response = await api.get<SurveyData>(`/surveys/${id}`);

        const { pick } = response.data;

        if (pick) {
          setLevel({
            status: Status.Success,
          });
        }

        setSurvey(response.data);
      } catch (err) {
        setLevel({
          status: Status.Error,
          error: err.response.data,
        });
      }
    })();
  }, [id, setLevel, setSurvey]);

  const handleSubmit = useCallback(
    async (data: string) => {
      try {
        await api.patch(`/surveys/${id}`, {
          pick: data,
        });

        setLevel({
          status: Status.Success,
        });
      } catch (err) {
        addToast({
          type: 'error',
          title: 'Erro na escolha',
          description: 'Ocorreu um erro ao salvar sua escolha',
        });
      }
    },
    [id, addToast],
  );

  const handlePickBoy = useCallback(async () => {
    await handleSubmit('M');
  }, [handleSubmit]);

  const handlePickGirl = useCallback(async () => {
    await handleSubmit('F');
  }, [handleSubmit]);

  return (
    <Container>
      <Content>
        {level.status === Status.Error && (
          <ContentError>
            <FiXCircle size={80} color="#c53030" />

            <h1>Ocorreu um erro!</h1>

            <h2>{level.error?.message}</h2>
          </ContentError>
        )}

        {level.status === Status.Success && (
          <>
            <FiCheckCircle size={80} color="#28a745" />

            <h1>{`Obrigado, ${survey.person_name}`}</h1>

            <h3>
              {`Você escolheu ${
                survey.pick === 'M' ? 'um meninho...' : 'uma menininha...'
              }`}
            </h3>
          </>
        )}

        {level.status === Status.Normal && (
          <>
            <h1>Menino ou Menina?</h1>
            <h3>
              {`${survey.person_name}, faça a sua aposta escolhendo uma das opções abaixo:`}
            </h3>

            <ContentButtons>
              <ButtonBoy onClick={() => handlePickBoy()}>Menino</ButtonBoy>
              <ButtonGirl onClick={() => handlePickGirl()}>Menina</ButtonGirl>
            </ContentButtons>
          </>
        )}
      </Content>
    </Container>
  );
};

export default Pick;
