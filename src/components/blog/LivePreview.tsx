"use client";

import { Article } from "@/lib/directus";
import { useEffect, useState } from "react";
import BlogContent from "./BlogContent";

interface LivePreviewProps {
  initialArticle: Article;
}

export default function LivePreview({ initialArticle }: LivePreviewProps) {
  const [article, setArticle] = useState(initialArticle);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (typeof event.data === "object" && event.data?.type === "directus-update") {
        setArticle((prev) => ({ ...prev, ...event.data.item }));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <BlogContent article={article} />
  );
}
