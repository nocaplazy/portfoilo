import reactDom from 'react-dom';

export const ModalPortal = ({ children }: { children: React.ReactNode }) => {
  const el = document.getElementById('modal');
  return reactDom.createPortal(children, el);
};
