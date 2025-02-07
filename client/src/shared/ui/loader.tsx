import { Loader2 } from 'lucide-react';
import type { FC } from 'react';

const PageLoader: FC = () => {
  return (
    <div className="w-full flex justify-center h-screen items-center">
      <Loader2 className="animate-spin" />
    </div>
  );
};

export default PageLoader;
