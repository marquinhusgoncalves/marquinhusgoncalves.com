import styled from 'styled-components';
import { StaticImage } from "gatsby-plugin-image"

const AvatarWrapped = styled(StaticImage)`
  border-radius: 50%;
  height: 13rem;
  width: 13rem;
  margin-bottom: 2rem;
`;

export default AvatarWrapped;
