import { BASE_URL } from "@/constants/base-url";
import { BookData } from "@/types/book";

export default async function fetchRandomBooks(): Promise<BookData[]> {
  const url = `${BASE_URL}/book/random`;

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
