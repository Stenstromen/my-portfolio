import React from 'react';
import { Partytown } from '@builder.io/partytown/react';

export default function Head() {
  return (
    <>
      <Partytown forward={['dataLayer.push']} />
    </>
  );
}