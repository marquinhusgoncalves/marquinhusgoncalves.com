import React from 'react';

const GatsbyImage = ({ alt }: { alt: string }) => <img alt={alt} />;
const StaticImage = ({ alt }: { alt: string }) => <img alt={alt} />;

module.exports = { GatsbyImage, StaticImage, getImage: jest.fn() };
