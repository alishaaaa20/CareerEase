import React, { useEffect, useState } from 'react';
import './QA.css';

const Contact = () => {
  const [userData, setUserData] = useState({ name: '', email: '', subject: '', message: '' });

  const userContact = async () => {
    try {
      const res = await fetch('/getdata', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const data = await res.json();
      console.log(data);
      setUserData({
        ...userData,
        name: data.name,
        email: data.email,
        subject: data.subject,
      });

      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    userContact();
  }, []);

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const { name, email, subject, message } = userData;

   const res = await fetch('/contact', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name, email, subject, message
    }),

   })
   const data = await res.json();
    if(!data){
      console.log('message not sent');
    } else {
      alert('Message Sent');
      setUserData({...userData, message: ''});
    }

  };

  return (
    <section>
      <div className='px-4 mx-auto max-w-screen-md'>
        <h2 className='heading text-center text-primaryColor'>Have any questions?</h2>
        <p className='mb-8 lg:mb-16 font-light text-center text__para'>
          Here we are with your answer.
        </p>
        
        <form action='#' className='space-y-8' onSubmit={handleSubmit}>
          {
            
          /* <div>
            <label htmlFor='name' className='form__label'>
              Your Name
            </label>
            <input
              type='text'
              id='name'
              name='name'
              value={userData.name}
              onChange={handleInputs}
              placeholder='Your name'
              className='form__input mt-1'
              required
            />
          </div> */}
          {/* <div>
            <label htmlFor='email' className='form__label'>
              Your Email
            </label>
            <input
              type='email'
              id='email'
              name='email'
              value={userData.email}
              onChange={handleInputs}
              placeholder='Your email'
              className='form__input mt-1'
              required
            />
          </div> */}
          {/* <div>
            <label htmlFor='subject' className='form__label'>
              Subject
            </label>
            <input
              type='text'
              id='subject'
              name='subject'
              value={userData.subject}
              onChange={handleInputs}
              placeholder='Let us know how can we help you'
              className='form__input mt-1'
              required
            />
          </div> */}
          <div className='sm:col-span-2'>
            <label htmlFor='message' className='form__label'>
              Your Queries
            </label>
            <textarea
              rows='4'
              type='text'
              id='message'
              name='message'
              value={userData.message}
              onChange={handleInputs}
              placeholder='Leave your queries here...'
              className='form__input mt-1'
              required
            />
          </div>
          <button type='submit' className='btn rounded sm:w-fit'>
            Submit
          </button>
        </form>
        <div className="reply">
        <label className='username'><b>Shree</b></label>
        <p className='message'>hi</p>
        <button type="button">
          Reply
        </button>
        </div>
       
      </div>
    </section>
  );
};

export default Contact;
