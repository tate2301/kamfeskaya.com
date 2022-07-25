import { createContext } from 'react';

type StagedlaContextProps = {
  components: Array<JSX.Element>;
};

export const StagedlaContext = createContext<StagedlaContextProps>({
  components: [],
});

export const StagedlaWrapper = ({ children }: { children: JSX.Element }) => {
  return (
    <StagedlaContext.Provider value={{ components: [] }}>
      {children}
    </StagedlaContext.Provider>
  );
};
