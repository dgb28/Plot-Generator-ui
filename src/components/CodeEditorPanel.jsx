import PropTypes from "prop-types";
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-python";
import "ace-builds/src-noconflict/mode-r";
import "ace-builds/src-noconflict/theme-monokai";

export default function CodeEditorPanel({
  code,
  setCode,
  language,
  setLanguage,
  onGenerate,
}) {
  return (
    <div className="md:w-1/2 w-full bg-[#1e1e2f] p-6 rounded-2xl border border-[#2c2c40] shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Code Editor</h2>
        <select
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          className="bg-[#2c2c40] text-white border border-[#3a3a50] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="python">Python</option>
          <option value="r">R</option>
        </select>
      </div>

      <AceEditor
        mode={language}
        theme="monokai"
        value={code}
        onChange={(value) => setCode(value)}
        name="code-editor"
        editorProps={{ $blockScrolling: true }}
        width="100%"
        fontSize={14}
        setOptions={{ showLineNumbers: true, tabSize: 2 }}
        style={{ backgroundColor: "#2c2c40" }}
        className="flex-grow rounded-2xl"
      />

      <button
        onClick={onGenerate}
        className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded-md transition"
      >
        Generate Plot
      </button>
    </div>
  );
}

CodeEditorPanel.propTypes = {
  code: PropTypes.string.isRequired,
  setCode: PropTypes.func.isRequired,
  language: PropTypes.string.isRequired,
  setLanguage: PropTypes.func.isRequired,
  onGenerate: PropTypes.func.isRequired,
};
