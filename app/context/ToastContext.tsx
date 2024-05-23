import { useLayoutEffect } from 'react';
import { Toaster, toast } from 'react-hot-toast';

interface ToasterContextProps {
  message: string | null;
  type: 'error' | 'success' | null; // Add this prop
}

const ToasterContext: React.FC<ToasterContextProps> = ({ message, type }) => {
  useLayoutEffect(() => {
    if (message) {
      const urlParams = new URLSearchParams(window.location.search);
      const message = urlParams.get('message');
      const type = urlParams.get('type');
      if (type === 'error') {
        toast.error(message);
      } else if (type === 'success') {
        toast.success(message);
      } else {
        toast(message);
      }
    }
  }, [message, type]);

  return <Toaster position='bottom-right' reverseOrder={false}/>;
};

export default ToasterContext;