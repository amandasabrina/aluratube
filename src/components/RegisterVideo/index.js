import React from 'react';
import { StyledRegisterVideo } from './styles';

function useForm(propsDoForm) {
  const [values, setValues] = React.useState(propsDoForm.initialValues);

  return {
    values,
    handleChange: ({ target }) => {
      const value = target.value;
      const name = target.name;
      setValues({
        ...values,
        [name]: value,
      });
    },
    clearForm() {
      setValues({});
    },
  };
}

export default function RegisterVideo() {
  const formCadastro = useForm({
    initialValues: { titulo: '', url: '' },
  });
  const [formVisivel, setFormVisivel] = React.useState(false);

  const handleModal = () => {
    setFormVisivel(!formVisivel);
  };

  return (
    <StyledRegisterVideo>
      <button type="button" className="add-video" onClick={handleModal}>
        +
      </button>
      {formVisivel && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleModal();
            formCadastro.clearForm();
            console.log(formCadastro.values);
          }}
        >
          <div>
            <button type="button" className="close-modal" onClick={handleModal}>
              X
            </button>
            <input type="text" placeholder="Título do vídeo" value={formCadastro.values.titulo} onChange={formCadastro.handleChange} name="titulo" />
            <input type="text" placeholder="URL" value={formCadastro.values.url} onChange={formCadastro.handleChange} name="url" />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
}
