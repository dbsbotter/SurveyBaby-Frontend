import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';

import * as Yup from 'yup';
import { FiUser } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import Header from '../../../components/Header';
import Input from '../../../components/Input';
import getValidationsErrors from '../../../utils/getValidationErrors';
import { useToast } from '../../../hooks/toast';

import { Container, Content, ButtonsSubmit } from './styles';
import Button from '../../../components/Button';
import api from '../../../services/api';

interface NewPickFormData {
  person_name: string;
}

const NewPick: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const history = useHistory();

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: NewPickFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          person_name: Yup.string().required('Nome obrigatório'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await api.post('surveys', {
          person_name: data.person_name,
        });

        history.push('/dashboard');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationsErrors(err);

          formRef.current?.setErrors(errors);

          return;
        }

        addToast({
          type: 'error',
          title: 'Erro na cadastrar',
          description: 'Ocorreu um erro cadastrar um novo pick',
        });
      }
    },
    [addToast, history],
  );

  return (
    <Container>
      <Header />

      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input
            sex="M"
            name="person_name"
            icon={FiUser}
            placeholder="Nome da pessoa"
          />

          <ButtonsSubmit>
            <Link to="/dashboard">
              <Button typeClass="error">Voltar</Button>
            </Link>
            <Button typeClass="success" type="submit">
              Cadastrar
            </Button>
          </ButtonsSubmit>
        </Form>
      </Content>
    </Container>
  );
};

export default NewPick;
