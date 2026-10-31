import ImageCard from './ImageCard';
import './ImageGallery.css';

// Image details stored as an array of objects.
const images = [
  {
    id: 1,
    url: 'https://picsum.photos/seed/mountain/400/300',
    title: 'Mountain View',
    description: 'A breathtaking view of snow-capped mountains at sunrise.',
  },
  {
    id: 2,
    url: 'https://picsum.photos/seed/ocean/400/300',
    title: 'Ocean Breeze',
    description: 'Calm blue ocean waves gently touching the sandy shore.',
  },
  {
    id: 3,
    url: 'https://picsum.photos/seed/forest/400/300',
    title: 'Forest Trail',
    description: 'A peaceful walk through a lush green forest path.',
  },
  {
    id: 4,
    url: 'https://picsum.photos/seed/city/400/300',
    title: 'City Lights',
    description: 'The vibrant skyline of a city glowing at night.',
  },
  {
    id: 5,
    url: 'https://picsum.photos/seed/desert/400/300',
    title: 'Desert Dunes',
    description: 'Golden sand dunes stretching across the horizon.',
  },
  {
    id: 6,
    url: 'https://picsum.photos/seed/flower/400/300',
    title: 'Blooming Garden',
    description: 'Colorful flowers in full bloom during spring.',
  },
];

/**
 * Parent component that stores the image data and renders
 * multiple ImageCard components using map().
 */
const ImageGallery = () => {
  return (
    <>
      <header className="gallery-header">
        <h1>Image Gallery</h1>
        <p className="gallery-subtitle">
          A collection of beautiful images rendered dynamically.
        </p>
      </header>
      <section className="gallery-grid">
        {images.map((image) => (
          <ImageCard
            key={image.id}
            src={image.url}
            title={image.title}
            description={image.description}
          />
        ))}
      </section>
    </>
  );
};

export default ImageGallery;
