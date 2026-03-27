import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Link from "next/link";
import { Article, getAssetUrl } from "@/lib/directus";
import styles from "@/app/blog/[slug]/page.module.css";

export default function BlogContent({ article }: { article: Article }) {
  const imageUrl = article.cover_image
    ? getAssetUrl(article.cover_image, 1200)
    : null;

  return (
    <main className={styles.articleMain}>
      <article>
        <div className={styles.headerContent}>
          <nav aria-label="Fil d'ariane" className={styles.breadcrumb}>
            <Link href="/">Accueil</Link>
            <span aria-hidden> / </span>
            <Link href="/blog">Blog</Link>
            <span aria-hidden> / </span>
            <span aria-current="page">{article.title}</span>
          </nav>

          <h1 className={styles.articleTitle}>{article.title}</h1>

          {imageUrl && (
            <div className={styles.coverImageWrapper}>
              <img
                src={imageUrl}
                alt={`Couverture de l'article ${article.title}`}
                className={styles.coverImage}
                style={{
                  width: "100%",
                  height: "40vh",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "30px",
                }}
              />
            </div>
          )}

          <div className={styles.articleMeta}>
            <span>
              Publié le{" "}
              {article.date_created && (
                <time dateTime={article.date_created}>
                  {new Date(article.date_created).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              )}
            </span>
            {article.date_updated &&
              article.date_updated !== article.date_created && (
                <span style={{ color: "#888" }}>
                  · Mis à jour le{" "}
                  <time dateTime={article.date_updated}>
                    {new Date(article.date_updated).toLocaleDateString(
                      "fr-FR",
                      {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      }
                    )}
                  </time>
                </span>
              )}
          </div>
        </div>
      </article>

      <article className={styles.articleContent}>
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt ?? ""}
                style={{ maxWidth: "100%", height: "auto", borderRadius: "8px" }}
              />
            ),
          }}
        >
          {article.content}
        </ReactMarkdown>
      </article>
    </main>
  );
}
