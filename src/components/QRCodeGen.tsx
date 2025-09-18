import { useState } from "react";
import QRCode from "react-qr-code";

const QRCodeGen = () => {
  const [input, setInput] = useState<string>("");
  const [qrValue, setQrValue] = useState<string>("");
  function handleSubmit() {
    setQrValue(input);
    setInput("");
  }
  return (
    <div className="border border-dashed border-red-400 flex flex-col items-center p-2 gap-4">
      <div>React QR Code Generator</div>
      <div className="flex flex-col gap-2 items-center">
        <div className="flex gap-2">
          <input type="text" value={input}
            onChange={(e) => setInput(e.currentTarget.value)}
            className="bg-white text-gray-800 rounded-md pl-2"
            placeholder="Enter your Text" />
          <button
            onClick={handleSubmit}
            className="px-4 py-2 bg-amber-400 text-gray-700 rounded-md cursor-pointer"
          >Generate QR</button>
        </div>
        <div className="bg-red-400/50 p-2 border-4 border-dashed border-red-400 rounded-md min-h-64 min-w-64 flex flex-col items-center gap-2 text-gray-200 text-lg font-semibold">
          {qrValue && <QRCode value={qrValue} />}
          <span>{qrValue}</span>
        </div>
      </div>
    </div>
  )
}
export default QRCodeGen