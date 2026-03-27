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
      const data = event.data;

      console.log("receive message", data);

      if (!data || typeof data !== "object") return;
      
      const isUpdateEvent = data.action === "update" || data.type === "directus-update" || data.type === "preview";
      const updatedFields = data.data || data.item || data.payload;

      if (isUpdateEvent && updatedFields) {
        setArticle((prev) => ({ ...prev, ...updatedFields }));
      }
    };
    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return (
    <BlogContent article={article} />
  );
}
