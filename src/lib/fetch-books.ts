import { BASE_URL } from "@/constants/base-url";
import { BookData } from "@/types/book";

export default async function fetchBooks(q?: string): Promise<BookData[]> {
  let url = `${BASE_URL}/book`;

  if (q) {
    url += `/search?q=${q}`;
  }

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error();
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return [];
  }
}
