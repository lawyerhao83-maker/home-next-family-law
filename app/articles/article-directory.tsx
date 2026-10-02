"use client";

import { useMemo, useState } from "react";
import { sitePath } from "../site-path";
import { articles, newestArticles, articleTopics, type ArticleTopicId } from "./article-data";
import styles from "./directory.module.css";

type TopicFilter = ArticleTopicId | "all";
type SortOrder = "newest" | "oldest";

export default function ArticleDirectory() {
  const [selectedTopic, setSelectedTopic] = useState<TopicFilter>("all");
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");
  const filters = [
    { id: "all" as const, label: "全部文章", count: articles.length },
    ...articleTopics.map((topic) => ({
      ...topic,
      count: articles.filter((article) => article.topic === topic.id).length,
    })),
  ];

  const visibleArticles = useMemo(() => {
    const filtered = articles.filter((article) =>
      selectedTopic === "all" || article.topic === selectedTopic,
    );
    return filtered.sort((a, b) =>
      sortOrder === "newest"
        ? b.dateTime.localeCompare(a.dateTime)
        : a.dateTime.localeCompare(b.dateTime),
    );
  }, [selectedTopic, sortOrder]);

  const selectedLabel = filters.find((filter) => filter.id === selectedTopic)?.label ?? "全部文章";

  return (
    <>
      <section className={styles.topicSection} id="article-topics" aria-labelledby="topic-heading">
        <h2 id="topic-heading" className={styles.topicHeading}>依主題閱讀</h2>
        <div className={styles.filters} role="group" aria-label="文章主題篩選">
          {filters.map((filter) => (
            <button
              type="button"
              className={styles.filter}
              key={filter.id}
              aria-pressed={selectedTopic === filter.id}
              aria-controls="article-results"
              onClick={() => setSelectedTopic(filter.id)}
            >
              <span>{filter.label}</span><span className={styles.filterCount}>{filter.count}</span>
            </button>
          ))}
        </div>
      </section>

      <section className={styles.results} id="article-results" aria-labelledby="results-heading">
        <div className={styles.resultsBar}>
          <div className={styles.resultSummary} aria-live="polite" aria-atomic="true">
            <h2 id="results-heading">{selectedLabel}</h2>
            <span>{visibleArticles.length} 篇</span>
          </div>
          <label className={styles.sort}>
            <span className={styles.visuallyHidden}>文章排序</span>
            <select
              value={sortOrder}
              onChange={(event) => setSortOrder(event.target.value as SortOrder)}
              aria-controls="article-results"
            >
              <option value="newest">依發布日期：新到舊</option>
              <option value="oldest">依發布日期：舊到新</option>
            </select>
          </label>
        </div>

        <div className={styles.grid}>
          {visibleArticles.map((article) => (
            <article
              className={`${styles.card} ${article.href === newestArticles[0]?.href ? styles.featured : ""}`}
              key={article.href}
              data-topic={article.topic}
            >
              <div className={styles.cardMeta}>
                <span>{articleTopics.find((topic) => topic.id === article.topic)?.label}</span>
                <time dateTime={article.dateTime}>{article.date}</time>
              </div>
              <h3><a href={sitePath(article.href)}>{article.title}</a></h3>
              <p className={styles.cardSummary}>{article.summary}</p>
              <a className={styles.readLink} href={sitePath(article.href)} aria-label={`閱讀文章：${article.title}`}>
                閱讀文章 <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
