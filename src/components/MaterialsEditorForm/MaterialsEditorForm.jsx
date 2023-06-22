import { Formik, Form, Field } from 'formik';

export const MaterialEditorForm = ({ onSubmit }) => {
  const initialValues = {
    title: '',
    link: '',
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    await onSubmit(values);
    setSubmitting(false);
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {props => {
        return (
          <Form>
            <label>
              Title
              <Field type="text" name="title"></Field>
            </label>
            <label>
              Url
              <Field type="text" name="link"></Field>
            </label>
            <button type="submit" disabled={props.isSubmitting}>
              Додати
            </button>
          </Form>
        );
      }}
    </Formik>
  );
};
