import { MaterialsList } from 'components/MaterialsList/MaterialsList';
import { MaterialEditorForm } from 'components/MaterialsEditorForm/MaterialsEditorForm';

export const MaterialsPage = ({
  isLoading,
  addMaterial,
  deleteMaterial,
  materials,
  isError,
}) => {
  return (
    <main>
      {isLoading && <div>Завантажуємо матеріали</div>}
      <MaterialEditorForm onSubmit={addMaterial} />
      <MaterialsList materials={materials} onDeleteMaterial={deleteMaterial} />
      {isError && (
        <p>
          Вибачте щось пішло не так перезавантежте будь ласка сторінку та
          спробуйте ще
        </p>
      )}
    </main>
  );
};
