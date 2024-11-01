import styles from "./[id].module.css";
import { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import fetchBook from "@/lib/fetch-book";

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const id = context.params!.id!;
  const book = await fetchBook(Number(id));

  return {
    props: { book },
  };
};

export default function Page({
  book,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  if (!book) return "문제가 발생했습니다 다시 시도하세요";

  const { title, subTitle, coverImgUrl, author, publisher, description } = book;

  return (
    <div className={styles.container}>
      <div
        className={styles.cover_img_container}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('${coverImgUrl}')`,
        }}
      >
        <img src={coverImgUrl} />
      </div>
      <div className={styles.title}>{title}</div>
      <div className={styles.subTitle}>{subTitle}</div>
      <div className={styles.author}>
        {author} |{publisher}
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
}
