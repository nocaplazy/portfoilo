import { useState } from 'react';

export const useInversion = () => {
  const [state, setState] = useState<boolean>(false);

  const invertState = () => {
    setState(!state);
  };

  return {
    state,
    invertState,
  };
};
