// components/ErrorFallback.jsx
export default function ErrorFallback({error, resetErrorBoundary }) {
    return (
      <div role="alert" className="text-red-600">
        <p>Something went wrong:</p>
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary} className="mt-2 px-4 py-1 border">
          Try again
        </button>
      </div>
    );
  }