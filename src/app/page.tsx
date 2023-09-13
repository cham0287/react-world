"use client";
import ArticleCard from "@/components/ArticleCard";
import HomeBanner from "@/components/HomeBanner";
import { contentContainer } from "./page.css";
import { useQuery } from "@tanstack/react-query";
import { getArticles } from "@/services/articles";
import PopularTags from "@/components/PopularTags";
import Tabs from "@/components/Tabs";
import { useTagsStore } from "@/stores/useStore";

export default function Home() {
  const { selectedTag } = useTagsStore();
  const { isLoading, data: articleResponse } = useQuery(
    ["/api/articles", selectedTag],
    () => getArticles(selectedTag ? { tag: selectedTag } : undefined),
    {
      refetchOnWindowFocus: false,
    },
  );

  return (
    <main>
      <HomeBanner />
      <section className={contentContainer}>
        {isLoading && <div>Loading...</div>}
        {articleResponse && (
          <div>
            <Tabs tabs={[undefined, "Global Feed", selectedTag]} />
            <ul>
              {articleResponse.articles.map((article) => (
                <ArticleCard article={article} />
              ))}
            </ul>
          </div>
        )}
        <PopularTags />
      </section>
    </main>
  );
}
