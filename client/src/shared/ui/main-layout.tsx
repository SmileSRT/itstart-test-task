import type { FC, PropsWithChildren } from 'react';

const Header: FC = () => {
  return (
    <header className="w-full p-4 bg-gray-200 mb-4">
      <h4 className="font-bold">
        ITStart
        <span className="text-xs text-blue-500">{`<Тестовое задание>`}</span>
      </h4>
    </header>
  );
};

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="w-full h-full bg-gray-50">
      <Header />
      <main className="w-full min-h-screen ">{children}</main>
    </div>
  );
};

export default MainLayout;
