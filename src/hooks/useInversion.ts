import { useState } from 'react';

export const useInversion = () => {
  const [state, setState] = useState<boolean>(false);

  const invertState = () => {
    setState(!state);
  };

  const correctState = () => {
    setState(true);
  };

  const incorrectState = () => {
    setState(false);
  };

  return {
    state,
    invertState,
    correctState,
    incorrectState,
  };
};
