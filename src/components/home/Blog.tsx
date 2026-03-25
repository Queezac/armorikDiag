import { getArticles } from "@/lib/articles";
import Link from "next/link";
import { CardArticle } from "../articles/CardArticle";

const ARTICLE_LIMIT = 12;

export default async function Blog() {
    const { articles } = await getArticles(ARTICLE_LIMIT);
    return (
        <section id="blog">
            <h2 className="section" style={{ paddingBottom: '5vh' }}>BLOG</h2>
            <ul className="blog-grid">
                {articles.map((article) => (
                    <CardArticle key={article.id} article={article} />
                ))}
            </ul>

            <Link href="/blog" className="ListeBlog">
                Voir tous les articles
            </Link>
        </section>
    );
}