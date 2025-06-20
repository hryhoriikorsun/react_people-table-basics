import { IsParents } from '../../types/IsParents';
import { PersonLink } from '../PersonLink/PersonLink';
import { Person } from '../../types';

export const mother = (person: Person) => {
  if (!person.motherName) {
    return '-';
  }

  if (person.mother?.name === person.motherName) {
    return <PersonLink person={person} isParents={IsParents.Mother} />;
  }

  return person.motherName;
};

export const father = (person: Person) => {
  if (!person.fatherName) {
    return '-';
  }

  if (person.father?.name === person.fatherName) {
    return <PersonLink person={person} isParents={IsParents.Father} />;
  }

  return person.fatherName;
};
