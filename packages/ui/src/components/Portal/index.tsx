import { ReactNode, useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface PortalProps {
  portalKey: string;
  children?: ReactNode;
}

const Portal = ({ portalKey, children }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, []);

  return mounted
    ? createPortal(children, document.getElementById(portalKey) as Element)
    : null;
};

export default Portal;
