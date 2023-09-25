export default function ButtonToggle({ handleBilling }) {
  return (
    <>
      <input type="checkbox" id="check" onClick={handleBilling} />
      <label htmlFor="check" className="btn"></label>
    </>
  );
}
