export default function ConfirmNote({ children }) {
  return (
    <p className="confirm-note">
      <span aria-hidden="true">!</span>
      {children}
    </p>
  );
}
