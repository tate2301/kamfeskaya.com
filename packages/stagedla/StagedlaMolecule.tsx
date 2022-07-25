import { useContext } from 'react';
import { IAtom } from './components/Atom';
import { resolveAtoms } from './lib/functions';
import { StagedlaContext } from './StagedlaWrapper';

const MoleculeWrapper = (props: {
  component_tree: IMolecularStructure;
  className: string;
}) => {
  const { component_tree } = props;
  const { components } = useContext(StagedlaContext);

  return (
    <Molecule
      component_tree={component_tree}
      components={components}
      className={props.className}
    />
  );
};

const Molecule = ({
  component_tree,
  className,
  components,
}: {
  component_tree: IMolecularStructure;
  className: string;
  components: Array<JSX.Element>;
}) => {
  return (
    <div className={className}>
      {component_tree.map((message: IAtom, key: number) => {
        const Component = resolveAtoms(components, message.name);
        return <Component key={key} {...message.content} />;
      })}
    </div>
  );
};

export type IMolecularStructure = Array<IAtom>;

export default MoleculeWrapper;
