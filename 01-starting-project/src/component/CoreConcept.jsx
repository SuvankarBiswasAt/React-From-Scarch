export default function CoreConcept({image, title, description}) {
  return (
    <li>
      <img scr={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}