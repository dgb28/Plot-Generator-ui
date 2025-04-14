export default async function executeCode(code, language) {
  const response = await fetch("http://127.0.0.1:8000/api/execute/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code, language }),
  });

  if (!response.ok) {
    throw new Error("API request failed");
  }

  const data = await response.json();
  return {
    stdout: data.stdout || "",
    stderr: data.stderr || "",
    images: data.images || [],
    html_url: data.html_url || "",
  };
}
