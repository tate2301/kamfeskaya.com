import { useContext } from 'react';
import { resolveAtoms } from '../lib/functions';
import { StagedlaContext } from '../StagedlaWrapper';
import { StagedlaData } from '../types';

export const Atom = ({
  name,
  props,
  inGrid,
}: {
  name: string;
  props: StagedlaData;
  inGrid: boolean;
}) => {
  const { components } = useContext(StagedlaContext);

  const Component = resolveAtoms(components, name);
  return <Component {...props} inGrid={inGrid} />;
};

export interface IAtom {
  name: string;
  content?: {
    [key: string]: any;
  };
}
