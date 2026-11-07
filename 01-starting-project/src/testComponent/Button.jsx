export default function Button({ mode = "filled", Icon, children }) {
  // Todo: Build this component!

  // !!! Important:
  // Wrap the icon with a <span className="button-icon"> to achieve the target look
  // Also wrap the children prop with a <span>

  return (
      <button className={mode + "-button"}>
        {Icon && <span className="button-icon"><Icon /></span>}
        <span>{children}</span>
      </button>
  );
}
