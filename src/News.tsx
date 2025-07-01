import React from 'react';

import grandFatherAndGrandMotherDonatingFoodSuppliesToWorkersDuringCovid from './assets/news/PHOTO-2021-06-08-07-04-59.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingOne from './assets/news/PHOTO-2022-05-20-17-41-38-2.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingTwo from './assets/news/PHOTO-2022-05-20-17-41-38.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingThree from './assets/news/PHOTO-2022-05-20-17-41-39-2.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingFour from './assets/news/PHOTO-2022-05-20-17-41-39.jpg'
import grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingFive from './assets/news/PHOTO-2022-05-20-17-41-40.jpg'

const newsArticles = [
  {
    "id": 1,
    "title": "Grandfather and Grandmother Donating Food Supplies to Workers During Covid",
    image: grandFatherAndGrandMotherDonatingFoodSuppliesToWorkersDuringCovid,
    alt: 'Grandfather and Grandmother donating food supplies to workers during Covid',
    "content": "During the challenging times of the Covid pandemic, my grandfather Ch. Pichaiah and grandmother Ch. Achamma took the initiative to donate food supplies to workers in need. Their selfless act of kindness exemplifies the spirit of community and support that we cherish."
  },
  {
    "id": 2,
    "title": "Grandfather Ch. Pichaiah Educating Young Farmers and making them aware of the initiatives from the Government for Sustainable Fish Farming",
    images: [
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingOne,
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingTwo,
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingThree,
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingFour,
      grandFatherWorkIsAppreciatedInPressForEducatingOnFishFarmingFive
    ],
    alt: 'Grandfather\'s work appreciated in press for educating on fish farming',
    "content": "My grandfather Ch. Pichaiah's dedication to educating young farmers and creating awareness about sustainable fish farming practices has been recognized in the press. His efforts to promote eco-friendly farming techniques are making a significant impact in the young farmers community."
  }
];

export default function News() {
  return (
    <div>
      <h2>News</h2>
      <p>
        Latest news and announcements from Sri Krushi Arganic Farming Varmi Compost.
      </p>
      <div>
        {newsArticles.map((article) => (
          <div key={article.id} style={{ marginBottom: '20px' }}>
            <h3>{article.title}</h3>
            {article.images ? (
              <div className="news-image-gallery">
                {article.images.map((image, index) => (
                  <img key={index} src={image} alt={article.alt} style={{ width: '100%', height: 'auto' }} />
                ))}
              </div>
            ) : (
              <img src={article.image} alt={article.alt} style={{ width: '100%', height: 'auto' }} />
            )}
            <p style={{ whiteSpace: 'pre-line' }}>{article.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
