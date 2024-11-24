import { Outlet } from 'react-router-dom';

import hero from '@/assets/hero.jpg';

function NoneAuth() {
  return (
    <div className="grid grid-cols-2 h-screen w-screen">
      <section className="bg-teal-700 flex items-center justify-center flex-col">
        <div className="bg-slate-100 mb-5 rounded-md p-2 flex items-center justify-center flex-col">
          <p>당신을 위한 채팅앱</p>
          <h1 className="text-2xl font-bold">WEB KAO TALK</h1>
        </div>

        <img className="w-6/12 rounded-md" src={hero} alt="HERO IMAGE" />
      </section>
      <main className="flex flex-col w-full h-full justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}

export default NoneAuth;
