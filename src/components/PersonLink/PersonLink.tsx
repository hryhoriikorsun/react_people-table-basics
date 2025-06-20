import { NavLink } from 'react-router-dom';
import { Sex } from '../../types/Sex';
import classNames from 'classnames';
import { Person } from '../../types';
import { IsParents } from '../../types/IsParents';

interface PersonLinkProps {
  person: Person;
  isParents: IsParents;
}

export const PersonLink: React.FC<PersonLinkProps> = ({
  person,
  isParents,
}) => {
  return (
    <>
      {isParents === IsParents.NotParent && (
        <NavLink
          to={`/people/${person.slug}`}
          className={classNames({
            'has-text-danger': person.sex === Sex.Female,
          })}
        >
          {person.name}
        </NavLink>
      )}

      {isParents === IsParents.Mother && (
        <NavLink
          className="has-text-danger"
          to={`/people/${person.mother?.slug}`}
        >
          {person.motherName}
        </NavLink>
      )}

      {isParents === IsParents.Father && (
        <NavLink to={`/people/${person.father?.slug}`}>
          {person.fatherName}
        </NavLink>
      )}
    </>
  );
};
