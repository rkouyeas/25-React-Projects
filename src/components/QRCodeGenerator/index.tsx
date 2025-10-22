import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGenerator = () => {
  const [inputValue, setInputValue] = useState<string>("");
  const [qrValue, setQRValue] = useState<string>("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setQRValue(inputValue);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "1.6rem" }}>
      <h1>QR Code Generator</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="qr-code"
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Enter your value here"
          aria-label="QR Code Generator Input"
          required
        />
        <button>Generate</button>
      </form>
      <QRCode value={qrValue} />
    </div>
  );
};

export default QRCodeGenerator;
