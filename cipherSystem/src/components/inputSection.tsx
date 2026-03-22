export default function InputSection({ text, setText }: any) {
  return (
    <div className="mt-4">
      <textarea
        className="w-full p-3 border rounded-lg"
        rows={4}
        placeholder="Enter text..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
    </div>
  );
}
