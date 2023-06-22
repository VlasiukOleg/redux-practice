export const MaterialsList = ({ materials, onDeleteMaterial }) => {
  return (
    <ul>
      {materials.map(material => (
        <li key={material.id}>
          <p>
            <b>Title:</b> {material.title}
          </p>
          <p>
            <b>URL:</b> {material.url}
          </p>

          <button
            type="button"
            onClick={() => {
              onDeleteMaterial(material.id);
            }}
          >
            Видалити матеріали
          </button>
          <hr />
        </li>
      ))}
    </ul>
  );
};
