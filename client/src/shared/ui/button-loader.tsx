import { FC, PropsWithChildren } from 'react';
import { Button, ButtonProps } from './button';
import { Loader2 } from 'lucide-react';

const Loader: FC<{ isLoading?: boolean } & PropsWithChildren> = ({
  isLoading,
  children,
}) => {
  if (isLoading) {
    return <Loader2 className="animate-spin" />;
  }

  return <>{children}</>;
};

const ButtonLoader: FC<ButtonProps & { isLoading?: boolean }> = ({
  children,
  isLoading,
  ...props
}) => {
  return (
    <Button {...props} disabled={isLoading}>
      <Loader isLoading={isLoading}>{children}</Loader>
    </Button>
  );
};

export default ButtonLoader;
