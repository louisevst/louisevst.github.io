export default function Button({ children }) {
  return (
    <button className="px-6 py-1 bg-red text-dark rounded-2xl">
      {children}
    </button>
  );
}
