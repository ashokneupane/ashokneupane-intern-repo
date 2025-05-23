import HelloWorld from "./HelloWorld.jsx";
import Counter from "./Counter.jsx";
import Form from "./components/Form.jsx";
import Timer from "./hooks/CleanUpUseEffect.jsx";
import ButtonUseCallback from "./hooks/UseCallback.jsx";

import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorFallback";
import { ReduxCounter } from "./features/counter/reduxCounter.jsx";
import NumberList from "./hooks/UseMemoHook.jsx";
import { MessageDisplay } from "./features/counter/messageDisplay.jsx";

export default function Home() {
  return (
    <div className="flex flex-col md:flex-row gap-8 p-4">
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bg-white p-4 border rounded w-full">
          <HelloWorld name="Focus Bear!" />
        </div>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bg-white p-4 border rounded w-full">
          <Counter />
        </div>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bg-white p-4 border rounded w-full">
          <Form />
        </div>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bg-white p-4 border rounded w-full">
          <Timer />
        </div>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bg-white p-4 border rounded w-full">
          <ButtonUseCallback />
        </div>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bg-white p-4 border rounded w-full">
          {/* Counter using Redux Toolkit. */}
          <ReduxCounter />
          <MessageDisplay />
        </div>
      </ErrorBoundary>

      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <div className="bg-white p-4 border rounded w-full">
          Use Memo Hook
          <NumberList />
        </div>
      </ErrorBoundary>
    </div>
  );
}
