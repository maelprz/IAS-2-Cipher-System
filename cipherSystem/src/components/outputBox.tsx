export default function OutputBox({ result }: any) {
  return (
    <div className="mt-6">
      <h2 className="font-semibold">Output:</h2>
      <div className="p-3 bg-white border rounded-lg mt-2 min-h-[50px]">
        {result || "Result will appear here"}
      </div>
    </div>
  );
}
