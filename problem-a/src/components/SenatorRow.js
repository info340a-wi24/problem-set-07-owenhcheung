import React from 'react';

function SenatorRow({ senatorData }) {
  const { name, state, party, phone, twitter } = senatorData;

  const phoneHref = `tel:${phone}`;
  const twitterHref = `https://twitter.com/${twitter}`;

  return (
    <tr>
      <td>{name}</td>
      <td>{party.charAt(0)} - {state}</td>
      <td><a href={phoneHref}>{phone}</a></td>
      <td><a href={twitterHref}>@{twitter}</a></td>
    </tr>
  );
}

export default SenatorRow;