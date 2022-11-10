import styled from 'styled-components';

export const StyledFavorites = styled.div`
  flex: 1;
  width: 100%;
  padding: 16px;
  overflow: hidden;
  background-color: ${({ theme }) => theme.backgroundBase || '#fafafa'};
  color: ${({ theme }) => theme.textColorBase || '#222222'};
  -webkit-transition: 0.3s;
  transition: 0.3s;
  section {
    width: 100%;
    padding: 0;
    overflow: hidden;
    padding: 0 16px 16px 16px;
  }
  h2 {
    font-size: 16px;
    margin-bottom: 16px;
    text-transform: capitalize;
  }
  img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    margin-bottom: 10px;
  }
  .containerFavorites {
    display: flex;
    align-items: center;
    gap: 20px;
    overflow: auto;
  }
  .favorites {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    .containerFavorites {
      max-width: 300px;
      margin: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (max-width: 380px) {
    .containerFavorites {
      grid-template-columns: 1fr;
    }
  }
`;

export default function Favorites({ config }) {
  const favorites = config.favorites;

  return (
    <StyledFavorites>
      <section>
        <h2>AluraTubes Favoritos</h2>
        <div className="containerFavorites">
          {favorites.map((favorite) => {
            return (
              <a href={`https://github.com/${favorite.github}`} className="favorites" key={favorite.id} target="_blank">
                <img src={`https://github.com/${favorite.github}.png`} />
                <p>@{favorite.github}</p>
              </a>
            );
          })}
        </div>
      </section>
    </StyledFavorites>
  );
}
