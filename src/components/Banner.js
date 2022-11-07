import styled from 'styled-components';

export const StyledBanner = styled.div`
  background-image: url('/banner-unsplash.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
  background-position-y: -300px;
  width: 100%;
  height: 300px;
`;

export default function Banner() {
  return <StyledBanner></StyledBanner>;
}
