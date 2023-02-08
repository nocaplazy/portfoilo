import { Header } from '@/components/header';
import { useState, ReactNode } from 'react';

interface PropsType {
  children: ReactNode;
}

export const HeaderWrapper = ({ children }: PropsType) => {
  const [hideHeader, setHideHeader] = useState<boolean>(false);
  return (
    <div
      onWheel={(e) => setHideHeader(e.nativeEvent.deltaY > 0 ? true : false)}
    >
      <Header hideHeader={hideHeader} />
      {children}
    </div>
  );
};
