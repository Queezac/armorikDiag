import BlogContent from "@/components/blog/BlogContent";
import LivePreview from "@/components/blog/LivePreview";
import { getAllSlugs, getArticleBySlug } from "@/lib/articles";
import { Article, getAssetUrl } from "@/lib/directus";
import type { Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";
import styles from "./page.module.css";

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export const revalidate = 0;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  if (!article) {
    return { title: "Article introuvable – Armorik Diagnostics" };
  }

  const imageUrl = article.cover_image
    ? getAssetUrl(article.cover_image, 1200)
    : "/assets/img/logo1.png";

  return {
    title: `${article.title} – Armorik Diagnostics`,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://armorik-diagnostics.fr/blog/${article.slug}`,
      type: "article",
      publishedTime: article.date_created,
      modifiedTime: article.date_updated,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: article.title }],
      siteName: "Armorik Diagnostics",
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [imageUrl],
    },
    alternates: {
      canonical: `https://armorik-diagnostics.fr/blog/${article.slug}`,
    },
  };
}

function ArticleJsonLd({ article }: { article: Article }) {
  const imageUrl = article.cover_image
    ? getAssetUrl(article.cover_image, 1200)
    : "https://armorik-diagnostics.fr/assets/img/logo1.png";

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    image: imageUrl,
    url: `https://armorik-diagnostics.fr/blog/${article.slug}`,
    datePublished: article.date_created,
    dateModified: article.date_updated,
    author: {
      "@type": "Organization",
      name: "Armorik Diagnostics",
      url: "https://armorik-diagnostics.fr",
    },
    publisher: {
      "@type": "Organization",
      name: "Armorik Diagnostics",
      logo: {
        "@type": "ImageObject",
        url: "https://armorik-diagnostics.fr/assets/img/logo1.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://armorik-diagnostics.fr/blog/${article.slug}`,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default async function ArticlePage(props: {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const { slug } = await props.params;
  const searchParams = await props.searchParams;
  
  const draft = await draftMode();
  let isDraft = draft.isEnabled;

  if (
    searchParams.preview === "true" &&
    process.env.DIRECTUS_PREVIEW_SECRET &&
    searchParams.secret === process.env.DIRECTUS_PREVIEW_SECRET
  ) {
    isDraft = true;
  }

  const article = await getArticleBySlug(slug, isDraft);

  if (!article) notFound();

  return (
    <>
      <ArticleJsonLd article={article} />

      <header className={styles.articleHeader}></header>

      <hr className="ligneNoire2" aria-hidden="true" />

      {isDraft ? (
        <LivePreview initialArticle={article} />
      ) : (
        <BlogContent article={article} />
      )}
    </>
  );
}
