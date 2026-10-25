// Thin wrapper around the FastAPI backend.
const BASE = import.meta.env.VITE_API_URL ?? "";

export class ApiError extends Error {
  constructor(message, status, fieldErrors = {}) {
    super(message);
    this.status = status;
    this.fieldErrors = fieldErrors;
  }
}

async function request(path, options = {}) {
  let res;
  try {
    res = await fetch(`${BASE}${path}`, {
      headers: { "Content-Type": "application/json" },
      ...options,
    });
  } catch {
    throw new ApiError("Could not reach the server.", 0);
  }

  const body = await res.json().catch(() => null);
  if (!res.ok) {
    // FastAPI validation errors: { detail: [{ loc: [..., field], msg }] }
    const fieldErrors = {};
    if (Array.isArray(body?.detail)) {
      for (const err of body.detail) {
        fieldErrors[err.loc.at(-1)] = err.msg.replace(/^Value error, /, "");
      }
    }
    throw new ApiError(body?.detail?.toString?.() ?? res.statusText, res.status, fieldErrors);
  }
  return body;
}

export const getPortfolio = () => request("/api/portfolio");

export const sendMessage = (message) =>
  request("/api/contact", { method: "POST", body: JSON.stringify(message) });
