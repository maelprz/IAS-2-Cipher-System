export default function ModeSelector({ mode, setMode }: any) {
  return (
    <div className="flex gap-4 mt-4">
      <label>
        <input
          type="radio"
          value="encrypt"
          checked={mode === "encrypt"}
          onChange={() => setMode("encrypt")}
        />{" "}
        Encrypt
      </label>

      <label>
        <input
          type="radio"
          value="decrypt"
          checked={mode === "decrypt"}
          onChange={() => setMode("decrypt")}
        />{" "}
        Decrypt
      </label>
    </div>
  );
}
