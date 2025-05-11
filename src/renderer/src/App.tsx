import { useEffect, useState } from "react";

export default function App() {
  const [versions, setVersions] = useState({
    node: "",
    chrome: "",
    electron: "",
  });

  useEffect(() => {
    const versions = window.electron?.getVersions?.();
    if (versions) {
      setVersions(versions);
    }
  }, []);

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-xl">
        <h1 className="text-5xl font-bold tracking-tight uppercase">Electron Starter</h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          A minimal React + Electron + Tailwind starter with a modern Swiss-inspired design.
          Efficient, clean and to the point.
        </p>

        <div className="border-t border-gray-300 pt-6">
          <h2 className="text-xl font-medium mb-4 uppercase tracking-wider">System Info</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left text-sm">
            <InfoTile label="Electron" value={versions.electron} />
            <InfoTile label="Node.js" value={versions.node} />
            <InfoTile label="Chromium" value={versions.chrome} />
          </div>
        </div>
      </div>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-sm transition hover:shadow-md">
      <div className="text-xs uppercase tracking-wide text-gray-500">{label}</div>
      <div className="text-base font-medium text-gray-900">{value || "Loading..."}</div>
    </div>
  );
}
