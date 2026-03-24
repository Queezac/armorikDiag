import { CardArticle } from "@/components/articles/CardArticle";
import Pagination from "@/components/articles/Pagination";
import SearchInput from "@/components/articles/SearchInput";
import { getArticles } from "@/lib/articles";
import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Blog – Armorik Diagnostics | Conseils en diagnostic immobilier",
  description:
    "Retrouvez nos articles et conseils sur les diagnostics immobiliers : DPE, amiante, plomb, électricité, gaz... Tout ce qu'il faut savoir pour vendre ou louer sereinement.",
  openGraph: {
    title: "Blog – Armorik Diagnostics",
    description:
      "Conseils et actualités sur les diagnostics immobiliers dans le Trégor.",
    url: "https://armorik-diagnostics.fr/blog",
    type: "website",
    images: [{ url: "/assets/img/logo1.png" }],
  },
  alternates: {
    canonical: "https://armorik-diagnostics.fr/blog",
  },
};

export const revalidate = 0;

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
  const resolvedSearchParams = await searchParams;
  const q = typeof resolvedSearchParams.q === "string" ? resolvedSearchParams.q : undefined;
  const pageParam = typeof resolvedSearchParams.page === "string" ? resolvedSearchParams.page : "1";
  const page = parseInt(pageParam, 10) || 1;

  const PAGE_LIMIT = 12;
  const { articles, hasNextPage } = await getArticles(PAGE_LIMIT, page, q);

  return (
    <>
      <header className={styles.blogHeader}>
      </header>

      <hr className="ligneNoire2" aria-hidden="true" />

      <main className={styles.blogMain}>
        <h1 className={styles.blogTitle}>BLOG</h1>
        <p className={styles.blogSubtitle}>
          L'actualité immobilière vue par nos experts :<br />des analyses claires et des conseils pratiques pour vous accompagner dans tous vos projets de vente ou de location.
        </p>

        <SearchInput />

        {articles.length === 0 ? (
          <p className={styles.noArticles}>
            {q ? "Aucun article ne correspond à votre recherche." : "Aucun article disponible pour le moment. Revenez bientôt !"}
          </p>
        ) : (
          <>
            <ul className={styles.articleGrid} role="list">
              {articles.map((article) => (
                <CardArticle key={article.id} article={article} showImage={true} />
              ))}
            </ul>
            <Pagination currentPage={page} hasNextPage={hasNextPage} searchQuery={q} />
          </>
        )}
      </main>
    </>
  );
}
