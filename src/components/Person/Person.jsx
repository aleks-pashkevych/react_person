import { Partner } from '../Partner';

export const Person = ({ person }) => (
  <section className="Person">
    <h2 className="Person__name">My name is {person.name}</h2>
    {person.age ? <p className="Person__age">I am {person.age}</p> : ''}
    <Partner other={person.partnerName} me={person.sex} />
  </section>
);
