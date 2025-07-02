import React from 'react';

import grandFatherWalking from './assets/blog/PHOTO-2018-09-15-19-07-52.jpg'
import dadAndGrandFatherInFrontOfMangoTrees from './assets/blog/PHOTO-2021-01-06-17-28-18.jpg'
import grandFatherInFrontOfMangoTrees from './assets/blog/PHOTO-2021-01-06-17-28-25.jpg'
import grandMotherInFrontOfMangoTrees from './assets/blog/PHOTO-2021-01-30-12-16-10.jpg'
import dadInFrontOfRedChilliCrop from './assets/blog/PHOTO-2021-04-04-13-18-04.jpg'
import dadInFrontOfMangoTreesOne from './assets/blog/PHOTO-2021-04-09-04-21-35.jpg'
import dadInFrontOfWaterWell from './assets/blog/PHOTO-2021-07-11-15-56-12.jpg'
import grandFatherWithGroundNutsOne from './assets/blog/PHOTO-2022-04-09-17-57-51.jpg'
import grandFatherWithGroundNutsTwo from './assets/blog/PHOTO-2022-04-09-17-57-49.jpg'
import grandFatherWithGroundNutsThree from './assets/blog/PHOTO-2022-04-09-17-57-50-2.jpg'
import grandFatherWithGroundNutsFour from './assets/blog/PHOTO-2022-04-09-17-57-50.jpg'
import grandFatherWithGroundNutsFive from './assets/blog/PHOTO-2022-05-15-15-38-21-2.jpg'
import grandFatherWithGroundNutsSix from './assets/blog/PHOTO-2022-05-15-15-38-21.jpg'
import dadInFrontOfMangoTreesTwo from './assets/blog/PHOTO-2022-05-15-15-36-22.jpg'
import dadInFrontOfMangoTreesThree from './assets/blog/PHOTO-2022-05-15-15-36-23.jpg'
import agricultureScientistOne from './assets/blog/WhatsApp Image 2025-07-02-1.jpeg'
import agricultureScientistTwo from './assets/blog/WhatsApp Image 2025-07-02-2.jpeg'
import agricultureScientistThree from './assets/blog/WhatsApp Image 2025-07-02-4.jpeg'
import agricultureScientistFour from './assets/blog/WhatsApp Image 2025-07-02-5.jpeg'
import agricultureScientistFive from './assets/blog/WhatsApp Image 2025-07-02-6.jpeg'
import agricultureScientistSix from './assets/blog/WhatsApp Image 2025-07-02-7.jpeg'
import agricultureScientistEight from './assets/blog/WhatsApp Image 2025-07-02-8.jpeg'

const blogArticles = [
  {
    "id": 1,
    "title": "Journey from TSRTC Union Leader to Organic Farming Pioneer: Ch. Pichaiah’s Story",
    image: grandFatherWalking,
    alt: 'Grandfather walking',
    "content": "Ch. Pichaiah is a retired former secretary of the RTC Employees Union and TSRTC (Telangana State Road Transport Corporation) employee. Originally from Agraharam village in Telangana, India. He dedicated over 30 years as a bus driver before returning to his agricultural roots.\n\nWith over 40 years of experience in organic farming, Pichaiah is the founder of Sri Krushi Organic Farming. His passion for sustainable agriculture and deep knowledge of organic practices have been key to the venture’s success.\n\nHe is actively involved in all aspects of the business from managing orders and delivering products to addressing customer queries. Committed to quality and community.\n\nHe is also focused on promoting organic farming and educating young farmers and consumers about its long-term benefits."
  },
  {
    "id": 2,
    "title": "From Telangana State Excise Department Excise Superintendent to Organic Farming Advocate: The Story of S. Saidulu",
    image: dadInFrontOfMangoTreesOne,
    alt: 'Dad in front of mango trees',
    "content": "S.Saidulu is a retired Excise Superintendent of the TSED (Telangana State Excise Department). Originally from Perka Kondaram Village in Telangana, India. He is passionate about organic farming and has been a driving force behind our family's agricultural practices.\n\nHe learnt farming practices at a very young age working with Late Sri. S.Lingaiah. As the eldest son of Late Sri. S.Lingaiah, he has always been deeply connected to our land and its traditions.\n\nA very proud moment for S.Saidulu, standing amidst our flourishing mango trees, which he has nurtured with love and care.\n\nDiscovering new techniques and methods to enhance our farming practices is a continuous journey for him. He is always eager to learn and adapt.\n\nHis ambition to cultivate organic farming practices that respect the environment and promote biodiversity is unwavering.\n\nHis commitment to organic farming continues to inspire us every day."
  },
  {
    "id": 3,
    "title": "Passionate Organic Farming Duo",
    "image": dadAndGrandFatherInFrontOfMangoTrees,
    "alt": "Dad and Grandfather in front of mango trees",
    "content": "A cherished moment featuring my father, S. Saidulu, and grandfather, Ch. Pichaiah, standing proudly before our thriving mango trees.\n\nThis image beautifully reflects our family's enduring bond with the land and the tradition of organic farming passed down through generations."
  },
  {
    "id": 4,
    "title": "Love and Growth: Cherishing Moments with Grandmother Ch. Achamma on the Farm",
    image: grandMotherInFrontOfMangoTrees,
    alt: 'Grandmother in front of mango trees',
    "content": "A beautiful moment with my grandmother Ch. Achamma, who has always been a source of love and support. Her presence in our farm reminds us of the importance of nurturing both plants and family."
  },
  {
    "id": 5,
    "title": "Fields of Fire: A Tribute to My Father's Labor in the Red Chilli Crop",
    image: dadInFrontOfRedChilliCrop,
    alt: 'Dad in front of red chilli crop',
    "content": "My dad proudly showcasing our vibrant red chilli crop a fiery symbol of the hard work, care, and commitment he pours into every harvest. His dedication to organic farming shines through in the rich color, flavor, and quality of our produce."
  },
  {
    "id": 6,
    "title": "A Legacy of Strength and Sustainability: My Grandfather Ch. Pichaiah in Front of Our Mango Trees",
    image: grandFatherInFrontOfMangoTrees,
    alt: 'Grandfather in front of mango trees',
    "content": "My grandfather, a pillar of strength and wisdom, standing tall in front of our mango trees. His dedication to organic farming has inspired us all to embrace sustainable practices."
  },
  {
    "id": 7,
    "title": "At the Well: Sustaining Our Farm, One Drop at a Time",
    image: dadInFrontOfWaterWell,
    alt: 'Dad in front of water well',
    "content": "My dad by the water well a vital lifeline for our farm. His dedication ensures we uphold sustainable practices while carefully nurturing every crop we grow."
  },
  {
    "id": 8,
    "title": "Rooted in Legacy: Honoring My Grandfather’s Journey in Organic Farming with Groundnuts harvest",
    images: [
      grandFatherWithGroundNutsOne,
      grandFatherWithGroundNutsTwo,
      grandFatherWithGroundNutsThree,
      grandFatherWithGroundNutsFour,
      grandFatherWithGroundNutsFive,
      grandFatherWithGroundNutsSix,
    ],
    alt: 'Grandfather with groundnuts one',
    "content": "A moment with my grandfather and his groundnuts captures more than just a season’s harvest—it reflects a lifetime of dedication to organic farming. His deep knowledge, unwavering commitment, and passion for nurturing the land have become the foundation of our family’s approach to sustainable agriculture. Whether working alongside our team or sharing his wisdom in the fields, he continues to inspire us all. His legacy lives on in every crop we grow and in the values we uphold through every harvest."
  },
  {
    "id": 9,
    "title": "Among the Mango Trees: A Tribute to My Father's Passion for Organic Farming",
    images: [
      dadInFrontOfMangoTreesTwo,
      dadInFrontOfMangoTreesThree
    ],
    alt: 'Dad in front of mango trees two',
    "content": "Spending another proud moment with my dad among our flourishing mango trees reminds me how deeply his passion for organic farming shapes our journey.\n\nSeeing him stand proudly in front of the trees is more than just a photo—it's a testament to his hard work, dedication, and the values our family holds close with every harvest."
  },
  {
    "id": 10,
    "title": "Renowned Agriculture Scientist Dr. Ch. Raghu Visits Sri Krushi Organic Farming, Applauds Sustainable Efforts",
    images: [
      agricultureScientistOne,
      agricultureScientistTwo,
      agricultureScientistThree,
      agricultureScientistFour,
      agricultureScientistFive,
      agricultureScientistSix,
      agricultureScientistSeven,
      agricultureScientistEight
    ],
    alt: '',
    "content": "Renowned agricultural scientist Dr. Ch. Raghu son of Ch. Pichaiah is based in Germany. He is our guest at Sri Krushi Organic Farming and appreciated our farm’s dedication to follow sustainable and organic farming methods. During his visit, he observed the soil health initiatives and eco-friendly cultivation methods implemented by the team. He commended the farm’s efforts in promoting chemical-free agriculture and preserving traditional farming knowledge of Telangana, India.\n\nDr. Raghu’s feedback highlighted the farm’s role in following environmental health, farmer well-being and food safety. This visit not only strengthened our commitment to organic practices but also inspired us to continue our journey towards sustainable agriculture.\n\nWe are grateful for his visit and support, which motivates us to keep pushing the boundaries of organic farming."
  }
];

export default function Blog() {
  return (
    <div>
      <h2>Blog</h2>
      <p>
        Stay tuned for articles and updates on organic farming, and more!
      </p>
      <div>
        {blogArticles
          .sort((a, b) => b.id - a.id) // Sort in descending order by id
          .map((article) => (
            <div key={article.id} style={{ marginBottom: '20px' }}>
              <h3>{article.title}</h3>
              {article.images ? (
                <div className="news-image-gallery">
                  {article.images.map((image, index) => (
                    <img
                      key={index}
                      src={image}
                      alt={article.alt}
                      style={{ width: '100%', height: 'auto' }}
                    />
                  ))}
                </div>
              ) : (
                <img
                  src={article.image}
                  alt={article.alt}
                  style={{ width: '100%', height: 'auto' }}
                />
              )}
              <p style={{ whiteSpace: 'pre-line' }}>{article.content}</p>
            </div>
          ))}
      </div>

    </div>
  );
}
