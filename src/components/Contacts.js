import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contacts = () => {
    const [succesMessage, setSuccessMessage] = useState('');
    const { register, handleSubmit, formState: {errors} } = useForm();

    const serviceID = 'service_ID';
    const templateID = 'template_ID';
    const userID = 'user_eaEmALxbgeXVr4Ixw3y5G'

    const onSubmit = (data, r) => {
        sendEmail(
            serviceID,
            templateID,
            {
                name: data.name,
                phone: data.phone,
                email: data.email,
                subject: data.subject,
                description: data.description
            },
            userID
        )
        r.target.reset();

    }

    const sendEmail = (serviceID, templateID, variables, userID) => {
        emailjs.send(serviceID, templateID, variables, userID)
            .then(() => {
                setSuccessMessage("Form sent successfully");
            }).catch(err => console.error(`An error has occurred ${err}`))
    }

    return (
        <div className='contacts'>
            <div className='text-center'>
                <h1>contact me</h1>
                <p> Please fill out this form and describe your project and I'll contact you as soon as 
                    possible.</p>
                    <span className='success-message'>{succesMessage}</span>
            </div>
            <div className='container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='row'>
                        <div className='col-md-6 col-xs-12'>
                            <div className='text-center'>
                                <input
                                    type="text"
                                    className="form-control"
                                    placeholder="Name"
                                    name="name"
                                    aria-invalid={errors.name ? "true" : "false"}
                                    {...register("name", {
                                        required: "Please enter your name",
                                        maxLength: {
                                            value: 20,
                                            message:
                                                "Please enter a name with fewer than 20 characters",
                                        },
                                    })}
                                />
                                <div className='line'></div>
                            </div>
                            <span className='error-message'>
                                {errors.name && errors.name.message}
                            </span>

                            <div className='text-center'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Phone Number'
                                    name='phone'
                                    {...register("phone", {
                                        required: "Please enter your phone number",
                                    })}
                                />
                                <div className='line'></div>
                            </div>
                            <span className='error-message'>
                                {errors.phone && errors.phone.message}
                            </span>

                            <div className='text-center'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Email Address'
                                    name='email'
                                    {...register("email", {
                                        required: "Please enter your email address",
                                        pattern: {
                                            value:  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                                            message: 'invalid Email'
                                        }
                                    })}
                                />
                                <div className='line'></div>
                            </div>
                            <span className='error-message'>
                                {errors.email && errors.email.message}
                            </span>

                            <div className='text-center'>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Subject'
                                    name='subject'
                                    {...register("subject", {
                                        required: "Please enter a subject line"
                                    })}
                                />
                                <div className='line'></div>
                            </div>
                            <span className='error-message'>
                                {errors.subject && errors.subject.message}
                            </span>

                        </div>
                        <div className='col-md-6 col-xs-12'>
                            <div className='text-center'>
                                <textarea
                                    type='text'
                                    className='form-control'
                                    placeholder='Please briefly describe your project.'
                                    name='description'
                                    {...register("description", {
                                        required: "Please describe your project"
                                    })}
                                ></textarea>
                                <div className='line'></div>
                            </div>
                            <span className='error-message'>
                                {errors.description && errors.description.message}
                            </span>

                            <button href='#' className='btn-main-offer contact-btn'>contact me</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
