import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import AvatarWrapped from './styled';

const Avatar = () => {
  const { avatarImage } = useStaticQuery(graphql`
    query {
      avatarImage: file(relativePath: { eq: "marquinhus-goncalves.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 200, maxHeight: 200) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `);

  return <AvatarWrapped fluid={avatarImage.childImageSharp.fluid} />;
};

export default Avatar;
