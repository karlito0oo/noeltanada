import { useEffect } from 'react';

const usePageTitle = (title) => {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = title ? `Noel Tañada | ${title}` : 'Noel Tañada';
    
    // Cleanup function to restore previous title if needed
    return () => {
      document.title = previousTitle;
    };
  }, [title]);
};

export default usePageTitle;
