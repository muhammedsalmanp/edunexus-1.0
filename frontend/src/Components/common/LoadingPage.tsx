import { useSelector } from "react-redux";
import type { RootState } from "../../store/index";

const LoadingPage = () => {
  const { isLoading } = useSelector(
    (state: RootState) => state.loading
  );

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-slate-950">
      {/* Spinner */}
      <div className="relative">
        <div className="h-20 w-20 animate-spin rounded-full border-4 border-slate-700 border-t-blue-500" />

        <div className="absolute inset-2 animate-pulse rounded-full bg-blue-500/20" />
      </div>

      {/* Text */}
      <h2 className="mt-8 text-xl font-semibold text-white">
        Loading...
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Please wait a moment
      </p>

      {/* Dots */}
      <div className="mt-4 flex gap-2">
        <span className="h-2 w-2 animate-bounce rounded-full bg-blue-500" />
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-cyan-500"
          style={{ animationDelay: "0.15s" }}
        />
        <span
          className="h-2 w-2 animate-bounce rounded-full bg-indigo-500"
          style={{ animationDelay: "0.3s" }}
        />
      </div>
    </div>
  );
};

export default LoadingPage;