import React from 'react'
import { object, string } from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const SignUpSchema = object().shape({
  email: string().email('Invalid email').required('Required')
})

function SignUpForm () {
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
          <ErrorMessage name='email' />
        </Form>
      )}
    </Formik>
  )
}

export default SignUpForm
