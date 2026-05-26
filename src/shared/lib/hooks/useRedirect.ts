import { useNavigate } from 'react-router-dom';

export const useRedirect = () => {
  const navigate = useNavigate();

  const redirectTo = (path?: string) => {
    
    if (path && path !== '#') {
      navigate(path);
    }
  };

  return { redirectTo };
};