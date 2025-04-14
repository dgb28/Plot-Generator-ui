import { useState, useEffect, useCallback } from "react";
import CodeEditorPanel from "../components/CodeEditorPanel";
import OutputPanel from "../components/OutputPanel";
import executeCode from "../api-service/api"; // optional helper if you add it

export default function CodeEditor() {
  const [language, setLanguage] = useState("python");
  const [code, setCode] = useState("");
  const [pageLoading, setPageLoading] = useState(true);
  const [loading, setLoading] = useState(false);
  const [output, setOutput] = useState({
    stdout: "",
    stderr: "",
    images: [],
    html_url: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setPageLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const handleGenerate = useCallback(async () => {
    const cleanedCode = code.replace(/\r/g, "").trim();
    setLoading(true);
    try {
      const result = await executeCode(cleanedCode, language);
      setOutput(result);
    } finally {
      setLoading(false);
    }
  }, [code, language]);

  return pageLoading ? (
    <div className="flex items-center justify-center h-screen bg-[#0f0f1a] text-white">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-purple-600 border-solid"></div>
    </div>
  ) : (
    <div>
      <div className="text-3xl font-semibold p-6 text-center border-b-4 border-purple-400">
        PLOT GENERATOR
      </div>
      <div className="min-h-screen bg-[#0f0f1a] text-white flex flex-col md:flex-row p-6 gap-6">
        <CodeEditorPanel
          code={code}
          setCode={setCode}
          language={language}
          setLanguage={setLanguage}
          onGenerate={handleGenerate}
        />
        <OutputPanel output={output} loading={loading} />
      </div>
    </div>
  );
}
