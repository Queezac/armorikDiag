"use client";

import { Article } from "@/lib/directus";
import { isEqual } from "lodash";
import { useEffect, useState } from "react";
import BlogContent from "./BlogContent";

interface LivePreviewProps {
  initialArticle: Article;
}

export default function LivePreview({ initialArticle }: LivePreviewProps) {
  const [article, setArticle] = useState(initialArticle);

  const { status, ...rest } = article;

  const isInitialArticle = isEqual(rest, initialArticle);

  useEffect(() => {
    const isInIframe = window.self !== window.top;

    if (isInIframe) {
      window.parent.postMessage(
        { type: "preview-ready" },
        "*"
      );
    }

    const handleMessage = (event: MessageEvent) => {
      if (
        !event.data ||
        event.data.type !== "directus-preview" ||
        !event.data.values
      ) {
        return;
      }

      const data = event.data.values;

      setArticle((prev) => ({
        ...prev,
        ...data,
      }));
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  return <>
    {!isInitialArticle && (
    <div style={{ position: "fixed", bottom: "20px", right: "20px", backgroundColor: "#ffcc00", padding: "10px", borderRadius: "8px" }}>
      <p>Modification non enregistrée !</p>
    </div>
  )}
  <BlogContent article={article} />;
  </>
}