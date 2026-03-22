import { useState } from "react";
import "./App.css";
import CipherCard from "./components/cipherCard";
import Dashboard from "./components/dashboard";
import InputSection from "./components/inputSection";
import KeyInput from "./components/keyInput";
import ModeSelector from "./components/modeSelector";
import OutputBox from "./components/outputBox";

const CIPHERS = ["caesar", "affine", "playfair", "hill"];

function App() {
  const [selectedCipher, setSelectedCipher] = useState("caesar");
  const [mode, setMode] = useState("encrypt");
  const [text, setText] = useState("");
  const [keyData, setKeyData] = useState<Record<string, string | number>>({});

  // Placeholder output until cipher logic is connected.
  const result = text
    ? `${mode.toUpperCase()} with ${selectedCipher}: ${text}`
    : "";

  return (
    <Dashboard>
      <div className="grid gap-3 md:grid-cols-4">
        {CIPHERS.map((cipher) => (
          <CipherCard
            key={cipher}
            name={cipher.toUpperCase()}
            selected={selectedCipher === cipher}
            onClick={() => setSelectedCipher(cipher)}
          />
        ))}
      </div>

      <ModeSelector mode={mode} setMode={setMode} />
      <InputSection text={text} setText={setText} />
      <KeyInput
        cipher={selectedCipher}
        keyData={keyData}
        setKeyData={setKeyData}
      />
      <OutputBox result={result} />
    </Dashboard>
  );
}

export default App;
