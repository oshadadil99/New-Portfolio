import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_pbolle8', 'template_6b4p5ze', form.current, {
        publicKey: 'lYYXUWGmsNr-bV7rT',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert(`Message Sent`);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='border-b border-neutral-900 pb-20'>
        <h1 className='my-10 text-center text-4xl'>Get In Touch </h1>
        <div className='text-center tracking-tighter'>
            <p className="my-2">Oshada Dilshan</p>
            <p className="my-2">+94 70 363 3032</p>
            <p className="my-2">oshadasayakkara@gmail.com</p>
        </div>

        <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto mt-20 p-6 bg-neutral-900 rounded-lg shadow-md">
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Name</label>
                <input type="text" name="from_name" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                <input type="email" name="user_email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">Message</label>
                <textarea name="message" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-24 resize-none" />
            </div>
            <div className="flex items-center justify-between">
                <input type="submit" value="Send" className="bg--100 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer" />
            </div>
    </form>
    </div>
  )
}

export default Contact;