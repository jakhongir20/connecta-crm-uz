
type ErrorFallbackProps = {
  error: Error,
  resetErrorBoundary: () => void;
};
function ErrorFallback({ error, resetErrorBoundary }: ErrorFallbackProps) {
  return (
    <>
      <p>{error.message}</p>
      <button onClick={resetErrorBoundary}>Try again</button>
    </>
  );
}

export default ErrorFallback;
