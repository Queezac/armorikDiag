import Link from "next/link";
import { getArticles } from "@/lib/articles";
import { CardArticle } from "../articles/CardArticle";

export default async function Blog() {
    const { articles } = await getArticles(9);
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