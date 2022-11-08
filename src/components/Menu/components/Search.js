import styled from 'styled-components';
import { MdSearch } from 'react-icons/md';

const StyledSearch = styled.div`
  display: flex;
  flex-direction: row;
  /* border: 1px solid ${({ theme }) => theme.borderBase}; */
  border: 1px solid ${({ theme }) => theme.border};
  max-width: 425px;
  width: 100%;
  border-radius: 2px;
  overflow: hidden;

  input {
    width: 80%;
    padding: 4px 6px;
    border: none;
    outline: none;
    /* color: ${({ theme }) => theme.textColorBase};
    background-color: ${({ theme }) => theme.backgroundBase}; */
    color: ${({ theme }) => theme.searchText};
    background-color: ${({ theme }) => theme.searchBg};
  }
  button {
    flex: 1;
    cursor: pointer;
    border: none;
    /* background-color: ${({ theme }) => theme.backgroundLevel2}; */
    background-color: ${({ theme }) => theme.searchBg};
    border-left: 1px solid ${({ theme }) => theme.border};
    box-shadow: 0 1px 0 rgb(0 0 0 / 10%);
    width: 40px;
    height: 40px;
    @media (min-width: 600px) {
      width: 64px;
      height: 40px;
    }
  }
  button > *:hover {
    color: inherit;
  }
  button:hover {
    opacity: 1;
  }
`;

//ordem de renderização do React:
// Home
// Menu
// Search
// Informação sempre desce (top down)

export default function Search({ valorDoFiltro, setValorDoFiltro }) {
  const valorDaBusca = valorDoFiltro;
  const setValorDaBusca = setValorDoFiltro;

  return (
    <StyledSearch>
      <input type="text" onChange={(e) => setValorDaBusca(e.target.value)} value={valorDaBusca} />
      <button style={{ cursor: 'default' }}>
        <MdSearch fontSize={18} />
      </button>
    </StyledSearch>
  );
}
