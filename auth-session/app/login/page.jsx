'use client';

import { useRef } from 'react';

const LoginPage = () => {
  const inputRefs = useRef({});

  const handleSubmit = () => {
    const { username, email } = inputRefs.current;
    fetch('/api/auth', {
      method: 'POST',
      body: JSON.stringify({ username: username.value, email: email.value }),
    })
      .then((response) => {})
      .catch((error) => error);
  };
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-3xl font-bold">LOGIN/SIGNUP</h1>
        <form className="flex flex-col">
          <input
            placeholder="username"
            className="my-2 border-2 border-slate-300 rounded-md p-2 text-black"
            ref={(element) => {
              inputRefs.current.username = element;
            }}
          />
          <input
            placeholder="email"
            className="my-2 border-2 border-slate-300 rounded-md p-2 text-black"
            ref={(element) => {
              inputRefs.current.email = element;
            }}
          />
        </form>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <button
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
