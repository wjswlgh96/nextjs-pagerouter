import { BASE_URL } from "@/constants/base-url";
import { BookData } from "@/types/book";

export default async function fetchBook(id: number): Promise<BookData | null> {
  const url = `${BASE_URL}/book/${id}`;

  try {
    const res = await fetch(url);

    if (!res.ok) {
      throw new Error();
    }

    return await res.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}
