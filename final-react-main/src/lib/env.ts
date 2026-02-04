const resolveFallbackOrigin = () => {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }

  return "http://localhost:5173";
};

const rawBaseUrl = import.meta.env.VITE_BASE_URL;

export const API_BASE_URL = (rawBaseUrl && rawBaseUrl.trim().length > 0
  ? rawBaseUrl
  : resolveFallbackOrigin()
).replace(/\/$/, "");
