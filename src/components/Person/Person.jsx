import { Partner } from '../Partner';

export const Person = ({ name, age, sex, partnerName }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {name}</h2>
    {age ? <p className="Person__age">I am {age}</p> : ''}
    <Partner other={partnerName} me={sex} />
  </section>
);
