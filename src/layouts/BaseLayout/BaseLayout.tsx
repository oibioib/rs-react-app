import { Outlet } from 'react-router';

const BaseLayout = () => {
  return (
    <div className="flex min-h-screen w-full justify-center bg-white bg-[radial-gradient(100%_70%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_70%,rgba(0,163,255,0)_100%)]">
      <div className="gap-full @container m-4 flex w-full max-w-4xl flex-col">
        <Outlet />
      </div>
    </div>
  );
};

export default BaseLayout;
