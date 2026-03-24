import { Article, getAssetUrl } from "@/lib/directus";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import styles from "./CardArticle.module.css";

export const CardArticle = ({
  article,
  props_styles
}: {
  article: Article,
  props_styles?: CSSProperties
}) => {
  return (
    <div key={article.id} className={styles.articleCard} style={props_styles}>
      <Link href={`/blog/${article.slug}`} className={styles.cardLink}>
        {!article.cover_image && (
          <div className={styles.cardImagePlaceholder}>
            <i className="fas fa-file-alt fa-2x" aria-hidden="true" />
          </div>
        )}
        <div className={styles.cardBody}>
          <div className={styles.cardMeta}>
            <i className="fas fa-calendar" aria-hidden="true" style={{ color: "#888", fontSize: "0.8rem" }} />
            <time
              dateTime={article.date_created}
              className={styles.cardDate}
            >
              {new Date(article.date_created).toLocaleDateString(
                "fr-FR",
                { day: "numeric", month: "long", year: "numeric" }
              )}
            </time>
          </div>
          <h2 className={styles.cardTitle}>{article.title}</h2>
          <p className={styles.cardDescription}>
            {article.description}
          </p>
          <span className={styles.readMore}>
            Lire l&apos;article{" "}
          </span>
        </div>
      </Link>
    </div>
  )
}