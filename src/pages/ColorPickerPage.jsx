import { ColorPicker } from 'components/ColorPicker/ColorPicker';
import colors from '../colorpicker.json';

export const ColorPickerPage = () => {
  return (
    <main>
      <ColorPicker colors={colors} />
    </main>
  );
};
