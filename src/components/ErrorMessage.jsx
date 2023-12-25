import "./styles/ErrorMessage.css";

export default function ErrorMessage() {
  return (
    <div className="error-message" role="alert" aria-live="assertive">
      <p>Something went wrong... Please, try again.</p>
    </div>
  );
}
