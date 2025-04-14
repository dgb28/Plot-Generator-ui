import PropTypes from "prop-types";

export default function OutputPanel({ output, loading }) {
  return (
    <div className="md:w-1/2 w-full bg-[#1e1e2f] p-6 rounded-2xl border border-[#2c2c40] shadow-xl flex flex-col justify-start">
      <h2 className="text-xl font-semibold mb-4">Output</h2>

      {loading ? (
        <div className="flex justify-center items-center w-full h-48">
          <div className="spinner-border animate-spin border-4 border-t-4 border-purple-600 rounded-full w-12 h-12"></div>
        </div>
      ) : (
        <div className="bg-[#2d2d40] text-white rounded-lg p-4 flex-grow border border-[#3c3c54] overflow-auto space-y-4">
          {!output ||
          (output.stdout === "" &&
            output.stderr === "" &&
            output.images.length === 0 &&
            output.html_url === "") ? (
            <p className="text-gray-400 italic">
              No output yet. Run your code.
            </p>
          ) : (
            <>
              {output.stderr && (
                <div>
                  <h3 className="text-lg font-semibold text-red-400 mb-1">
                    Error:
                  </h3>
                  <pre className="bg-[#2e1a1a] p-2 rounded-md text-red-200">
                    {output.stderr}
                  </pre>
                </div>
              )}
              {output.stdout && (
                <div>
                  <h3 className="text-lg font-semibold text-green-400 mb-1">
                    Console Output:
                  </h3>
                  <pre className="bg-[#1a2e1a] p-2 rounded-md text-green-200">
                    {output.stdout}
                  </pre>
                </div>
              )}
              {output.images && output.images.length > 0 && (
                <div>
                  {output.images.map((img, idx) => (
                    <img
                      key={idx}
                      src={`data:image/png;base64,${img}`}
                      alt={`Plot ${idx}`}
                      className="rounded-md my-2 border border-[#3a3a50]"
                      style={{ width: "100%", height: "auto" }}
                    />
                  ))}
                </div>
              )}
              {!output.images.length && output.html_url !== "" && (
                <iframe
                  src={output.html_url}
                  title="Interactive Chart"
                  width="100%"
                  height="500px"
                  className="rounded border border-gray-300 shadow"
                />
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

OutputPanel.propTypes = {
  output: PropTypes.shape({
    stdout: PropTypes.string,
    stderr: PropTypes.string,
    images: PropTypes.arrayOf(PropTypes.string),
    html_url: PropTypes.string,
  }).isRequired,
  loading: PropTypes.bool.isRequired,
};
