import React, { useState } from 'react'
import { object, string } from 'yup'
import { Formik, Form, Field, ErrorMessage } from 'formik'

const SignUpSchema = object().shape({
  email: string().email('Invalid email').required('Required')
})

function SignUpForm () {
  const [title, setTitle] = useState('Sign up to the mailing list')
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={SignUpSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        const { email } = values
        const user = {
          accountAddress: email,
          email: email,
          provider: 'HDWallet',
          subscribe: true,
          source: 'Fuse.io',
          displayName: 'Fuse.io'
        }

        try {
          const response = await fetch('https://studio.fuse.io/api/v2/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(user)
          })

          if (response.status === 200) {
            setTitle('<span>Thanks joining our mailing list! &#128077</span>')
            setTimeout(() => {
              setTitle('Sign up to the mailing list')
            }, 3000)
            setSubmitting(true)
          } else if (response.status === 500) {
            setTitle('<span>Something went wrong &#128078</span>')
            setTimeout(() => {
              setTitle('Sign up to the mailing list')
            }, 3000)
            setSubmitting(true)
          }

          resetForm({ email: '' })
        } catch (error) {
          resetForm({ email: '' })
          setTitle('<span>Something went wrong &#128078</span>')
          setTimeout(() => {
            setTitle('Sign up to the mailing list')
          }, 3000)
          setSubmitting(true)
        }
      }}
    >
      {({ isSubmitting, dirty }) => (
        <Form className='sign_up '>
          <div className='title' dangerouslySetInnerHTML={{ __html: title }} />
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
