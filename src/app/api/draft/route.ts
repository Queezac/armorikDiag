import { getArticleBySlug } from "@/lib/articles";
import { draftMode } from "next/headers";
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const secret = searchParams.get("secret");
  const slug = searchParams.get("slug");

  if (secret !== process.env.DIRECTUS_PREVIEW_SECRET) {
    return new Response("Invalid secret token", { status: 401 });
  }

  if (!slug) {
    return new Response("Missing slug parameter", { status: 400 });
  }

  const article = await getArticleBySlug(slug, true);

  if (!article) {
    return new Response("Article not found", { status: 404 });
  }

  console.log("article", article);

  const draft = await draftMode();
  draft.enable();

  redirect(`/blog/${article.slug}?preview=true&secret=${secret}`);
}
