import React from 'react'
import { object, string } from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'
// Campaign ID:hsSqLRecQxQlQ7u6xLjh7VdLO0g

// Secret API token:i6hb7MNlDT993wsEsBAWb46OQ1Q
const SignUpSchema = object().shape({
  email: string().email('Invalid email').required('Required')
})

function SignUpForm() {
  // const [title, setTitle] = useState('')

  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
      }}
    >
      {({ isSubmitting, dirty }) => (
        <Form className='sign_up '>
          <div className='title'>Sign up to the waiting list</div>
          <Field
            type='email'
            className='input'
            placeholder='Email'
            name='email'
          />
          <button
            disabled={!dirty || isSubmitting}
            type='submit'
            className='button'
          >
            Send
          </button>
          <button type='button' class='button vrlps-trigger'>Join our campaign!</button>
          <ErrorMessage name='email' />
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
