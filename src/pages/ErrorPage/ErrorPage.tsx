function ErrorPage() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="mx-auto max-w-screen-sm text-center">
        <h1 className="text-primary-600 mb-4 text-9xl font-extrabold tracking-tight text-sky-500">
          404
        </h1>
        <p className="mb-4 text-3xl font-bold tracking-tight text-slate-700 md:text-4xl dark:text-white">
          Page not found
        </p>
      </div>
    </div>
  );
}

export default ErrorPage;
