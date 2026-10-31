import './ImageCard.css';

/**
 * Reusable Image Card component.
 * Receives image data from its parent through props.
 */
const ImageCard = ({ src, title, description }) => {
  return (
    <article className="image-card">
      <div className="image-card__media">
        <img
          src={src}
          alt={title}
          className="image-card__img"
          loading="lazy"
        />
      </div>
      <div className="image-card__body">
        <h3 className="image-card__title">{title}</h3>
        <p className="image-card__description">{description}</p>
      </div>
    </article>
  );
};

export default ImageCard;
