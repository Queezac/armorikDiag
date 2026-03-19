import { createDirectus, rest } from "@directus/sdk";

export interface Article {
  id: number;
  slug: string;
  title: string;
  description: string;
  content: string;
  cover_image: string | null;
  status: "draft" | "published";
  date_created: string;
  date_updated: string;
}

export interface DirectusSchema {
  articles: Article[];
}

const DIRECTUS_URL = process.env.NEXT_PUBLIC_DIRECTUS_URL ?? "";

export function getClient() {
  if (!DIRECTUS_URL) {
    throw new Error(
      "NEXT_PUBLIC_DIRECTUS_URL n'est pas défini dans .env.local"
    );
  }
  return createDirectus<DirectusSchema>(DIRECTUS_URL).with(rest());
}

export function getAssetUrl(fileId: string | null, width = 1200): string {
  if (!fileId) return "";
  return `${DIRECTUS_URL}/assets/${fileId}?width=${width}&format=webp`;
}
