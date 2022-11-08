import styled from 'styled-components';

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  section.user-info {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 32px;
    gap: 16px;
  }
  @media (max-width: 480px) {
    section.user-info {
      max-width: 300px;
      margin: auto;
      display: flex;
      flex-direction: column;
      text-align: center;
      gap: 6px;
    }
  }
`;

/* background-image: url(${{ ({ bg }) => bg}}); */
/* background-image: url(${config.bg}); */
export const StyledBanner = styled.div`
  background-image: url('/banner-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: -300px;
  width: 100%;
  height: 300px;
`;

export default function Header({ config }) {
  return (
    <StyledHeader>
      <StyledBanner></StyledBanner>
      {/* <StyledBanner bg={config.bg} /> */}
      {/* <img src="banner" alt="" /> */}

      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} alt="" />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}
