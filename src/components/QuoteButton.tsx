import { Link } from "react-router-dom";


export function QuoteButton() {
  return (
    <div className="fixed right-0 top-1/2 z-10 -translate-y-1/2 transform">
      <button className="flex h-48 w-12 flex-col items-center justify-center rounded-l-lg bg-black text-white shadow-lg transition-all hover:bg-gray-500">
        <Link to="/apply-now">
        <span className="vertical-text font-medium uppercase tracking-wider text-white">
          Request Quote</span>
        </Link>
      </button>
    </div>
  );
}

// Add this CSS to your index.css or a custom stylesheet
// .vertical-text {
//   writing-mode: vertical-rl;
//   transform: rotate(180deg);
// }
