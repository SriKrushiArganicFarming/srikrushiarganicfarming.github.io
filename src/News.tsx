import grandFatherAndGrandMotherDonatingFoodSuppliesToWorkersDuringCovid from './assets/news/PHOTO-2021-06-08-07-04-59.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingOne from './assets/news/PHOTO-2022-05-20-17-41-38-2.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingTwo from './assets/news/PHOTO-2022-05-20-17-41-38.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingThree from './assets/news/PHOTO-2022-05-20-17-41-39-2.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingFour from './assets/news/PHOTO-2022-05-20-17-41-39.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingFive from './assets/news/PHOTO-2022-05-20-17-41-40.jpg'

type NewsArticle = {
  id: number;
  title: string;
  date: string;
  image?: string;
  images?: string[];
  alt: string;
  content: string;
};

const newsArticles: NewsArticle[] = [
  {
    "id": 1,
    "title": "Grandfather and Grandmother Donating Food Supplies to Workers During COVID-19",
    "date": "2021-06-08",
    image: grandFatherAndGrandMotherDonatingFoodSuppliesToWorkersDuringCovid,
    alt: 'Grandfather and grandmother donating food supplies to workers during COVID-19',
    "content": "During the challenging times of the COVID-19 pandemic, my grandfather, Ch. Pichaiah, and grandmother, Ch. Achamma, took the initiative to donate food supplies to workers in need. Their selfless act of kindness exemplifies the spirit of community and support that we cherish."
  },
  {
    "id": 2,
    "title": "Grandfather Ch. Pichaiah Educating Young Farmers About Government Initiatives for Sustainable Fish Farming",
    "date": "2022-05-20",
    images: [
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingOne,
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingTwo,
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingThree,
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingFour,
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingFive
    ],
    alt: 'Grandfather\'s work appreciated in press for educating on fish farming',
    "content": "My grandfather Ch. Pichaiah's dedication to educating young farmers and raising awareness of sustainable fish-farming practices has been recognized in the press. His efforts to promote eco-friendly farming techniques are making a significant impact on the young farming community."
  }
];

export default function News() {
  const [newestFirst, setNewestFirst] = useState(true);
  const sortedArticles = [...newsArticles].sort(
    (a, b) =>
      newestFirst
        ? b.date.localeCompare(a.date) || b.id - a.id
        : a.date.localeCompare(b.date) || a.id - b.id
  );

  return (
    <div className="article-page">
      <h2>News</h2>
      <p>
        Latest news and announcements from Sri Krushi Organic Farming.
      </p>
      <div className="article-sort-controls">
        <button
          type="button"
          className="article-sort-button"
          onClick={() => setNewestFirst((current) => !current)}
          aria-pressed={newestFirst}
        >
          <span aria-hidden="true">⇅</span>
          Sort: {newestFirst ? 'Newest first' : 'Oldest first'}
        </button>
      </div>
      <div className="article-page-layout">
        <div className="article-list">
          {sortedArticles.map((article) => (
          <article key={article.id} id={`news-article-${article.id}`} className="article-card">
            <h3>{article.title}</h3>
            <time className="article-date" dateTime={article.date}>
              {new Intl.DateTimeFormat('en-IN', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
              }).format(new Date(`${article.date}T00:00:00`))}
            </time>
            {article.images ? (
              <div className="article-image-gallery">
                {article.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`${article.alt} (${index + 1} of ${article.images!.length})`}
                    className="article-image"
                  />
                ))}
              </div>
            ) : (
              <img src={article.image} alt={article.alt} className="article-image" />
            )}
            <p style={{ whiteSpace: 'pre-line' }}>{article.content}</p>
          </article>
          ))}
        </div>
        <nav className="article-index" aria-label="News articles">
          <h3>News articles</h3>
          <ol>
            {sortedArticles.map((article) => (
              <li key={article.id}>
                <a href={`#news-article-${article.id}`}>{article.title}</a>
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </div>
  );
}
import { useState } from 'react';
