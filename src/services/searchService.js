const API_URL = "http://localhost:8080/api/search";

export async function searchPages(keyword) {
  const response = await fetch(
    `${API_URL}?keyword=${encodeURIComponent(keyword)}&page=0&size=10`
  );

  if (!response.ok) {
    throw new Error("Search request failed");
  }

  return response.json();
}