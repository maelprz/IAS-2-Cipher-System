export default function CipherCard({ name, selected, onClick }: any) {
  return (
    <button
      onClick={onClick}
      className={`p-4 rounded-2xl shadow-md w-full transition ${
        selected ? "bg-blue-500 text-white" : "bg-white"
      }`}
    >
      {name}
    </button>
  );
}
