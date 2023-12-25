import "./styles/LoadingDots.css";

export default function LoadingDots() {
  return (
    <div className="loading-area" role="status" aria-live="polite">
      <div id="loading-dots" name="Loading Dots" className="loading-dots"></div>
    </div>
  );
}
