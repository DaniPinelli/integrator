import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';


const loginSchema = Yup.object().shape(
    {
        email: Yup.string()
            .email('Invalid email'),

        password: Yup.string()
            .min(8, 'Password must be at least 8 characters')
    }
)


const LoginFormik = () => {

    const initialCredentials = {
        email: '',
        password: ''
    }


    return (
        <div>
            <h2>Sign Up</h2>
            <Formik
                initialValues={initialCredentials}
                validationSchema={loginSchema}
                onSubmit={async (values) => {
                    await new Promise((r) => setTimeout(r, 100));
                    alert(JSON.stringify(values, null, 2));
                    localStorage.setItem('credentials', JSON.stringify(values))
                }}
            >

                {/* Obtein props */}


                {props => {
                    const {
                        values,
                        touched,
                        errors,
                        isSubmitting,
                        handleChange,
                        handleBlur
                    } = props

                    return (
                        <Form>
                            <label htmlFor="email">Email</label>
                            <Field id="email" type="email" name="email" placeholder="john@doe.com" />

                            {errors.email && touched.email && (
                                <ErrorMessage component='span' name="email" />

                            )}

                            <label htmlFor="passwordl">Password</label>
                            <Field
                                id="password"
                                name="password"
                                placeholder="********"
                                type="password"
                            />

                            {errors.password && touched.password && (
                                <ErrorMessage component='span' name="password" />
                            )}

                            <button type="submit">Login</button>
                            {isSubmitting ? <p>Submitting...</p> : null}
                        </Form>
                    )
                }}

            </Formik>
        </div>
    )
}


export default LoginFormik



