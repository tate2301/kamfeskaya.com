export const resolveAtoms = (
  components: Array<JSX.Element>,
  componentName: string,
) => {
  return read_prop(components, componentName);
};

function read_prop(obj: { [key: string]: any }, prop: string) {
  return obj[prop];
}
