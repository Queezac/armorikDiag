import { Article, getAssetUrl } from "@/lib/directus";
import Image from "next/image";
import Link from "next/link";
import { CSSProperties } from "react";
import styles from "./CardArticle.module.css";

export const CardArticle = ({
  article,
  props_styles,
  showImage = false
}: {
  article: Article,
  props_styles?: CSSProperties,
  showImage?: boolean
}) => {
  return (
    <div key={article.id} className={`${styles.articleCard} ${showImage ? styles.withImage : ''}`} style={props_styles}>
      <div className={styles.cardLink}>
        {showImage && article.cover_image ? (
          <div className={styles.cardImageWrapper}>
            <img
              src={getAssetUrl(article.cover_image, 600)}
              alt={`Couverture de ${article.title}`}
              className={styles.cardImage}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
        ) : !article.cover_image ? (
          <div className={styles.cardImagePlaceholder}>
            <i className="fas fa-file-alt fa-2x" aria-hidden="true" />
          </div>
        ) : null}
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
          <Link href={`/blog/${article.slug}`} className={styles.readMore}>
            Lire l&apos;article{" "}
          </Link>
        </div>
      </div>
    </div>
  )
}