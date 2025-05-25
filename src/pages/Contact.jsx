import React from 'react';
import { MdLocationOn, MdEmail, MdPhone } from 'react-icons/md';

const branches = [
  {
    title: 'Head Office [New Horizon Center]',
    address: '45 Innovation Blvd, New Horizon Complex, Sector 12, Dhaka 1229',
    phone: ['+880 1700000001', '+880 1600000002'],
    email: 'contact@newhorizon.com',
    time: '9:00 am to 8:00 pm',
    mapEmbed: 'https://maps.google.com/maps?q=Dhaka&t=&z=13&ie=UTF8&iwloc=&output=embed'
  },
  {
    title: 'Branch Office [Ocean View]',
    address: '17 Bay Road, Ocean View Park, Chattogram 4100',
    phone: ['+880 1800000003', '+880 1900000004'],
    email: 'ocean@newhorizon.com',
    time: '9:00 am to 8:00 pm',
    mapEmbed: 'https://maps.google.com/maps?q=Chattogram&t=&z=13&ie=UTF8&iwloc=&output=embed'
  },
  {
    title: 'Branch Office [Tech Junction]',
    address: '56 Silicon Street, Tech Junction Hub, Rajshahi 6000',
    phone: ['+880 1300000005'],
    email: 'tech@newhorizon.com',
    time: '9:00 am to 8:00 pm',
    mapEmbed: 'https://maps.google.com/maps?q=Rajshahi&t=&z=13&ie=UTF8&iwloc=&output=embed'
  },
  {
    title: 'Branch Office [Hilltop Campus]',
    address: '101 Green Valley Lane, Hilltop Plaza, Sylhet 3100',
    phone: ['+880 1400000006', '+880 1500000007'],
    email: 'hilltop@newhorizon.com',
    time: '9:00 am to 8:00 pm',
    mapEmbed: 'https://maps.google.com/maps?q=Sylhet&t=&z=13&ie=UTF8&iwloc=&output=embed'
  },
  {
    title: 'Branch Office [Maple International]',
    address: '88 Queen Street, Maple International Complex, Toronto, Canada',
    phone: ['+1 416-123-4567'],
    email: 'canada@newhorizon.com',
    time: '9:00 am to 8:00 pm',
    mapEmbed: 'https://maps.google.com/maps?q=Toronto&t=&z=13&ie=UTF8&iwloc=&output=embed'
  },
];

const Contact = () => {
  return (
    <div className="font-[var(--font-poppins)] px-4 lg:px-32 py-16 bg-white">
      <h2 className="text-[var(--color-primary)] text-4xl font-bold mb-4 text-center">Contact Us</h2>
      <p className="text-base text-center max-w-2xl mx-auto mb-16 text-gray-600">You are welcome to visit our office for any information related to course and training. You can also reach us through the hotline number or messenger.</p>

      <div className="grid gap-16">
        {branches.map((branch, idx) => (
          <div key={idx} className="rounded-xl shadow-md border overflow-hidden">
            <iframe
              src={branch.mapEmbed}
              className="w-full h-64 md:h-80 border-b"
              loading="lazy"
              allowFullScreen=""
            ></iframe>
            <div className="p-6 grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-[var(--color-secendary)] mb-2">{branch.title}</h3>
                <p className="flex gap-2 text-sm text-gray-700">
                  <MdLocationOn className="text-[var(--color-secendary)] mt-1" />
                  {branch.address}
                </p>
                <div className="mt-3 space-y-1 text-sm text-gray-700">
                  {branch.phone.map((num, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <MdPhone className="text-[var(--color-secendary)]" /> {num}
                    </div>
                  ))}
                  <div className="flex items-center gap-2">
                    <MdEmail className="text-[var(--color-secendary)]" /> {branch.email}
                  </div>
                </div>
              </div>
              <div>
                <h4 className="text-md font-semibold text-[var(--color-primary)] mb-1">Office Visit Time</h4>
                <p className="text-sm text-gray-700">Saturday - Friday</p>
                <p className="text-sm text-gray-700">{branch.time}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Query Form */}
      <div className="mt-24 bg-[#F9F9F9] p-10 rounded-xl shadow-md max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-6 text-center text-[var(--color-primary)]">Inbox your queries</h3>
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input type="text" placeholder="Your name" className="p-4 border border-gray-300 rounded-md bg-white" />
          <input type="email" placeholder="Write your E-mail" className="p-4 border border-gray-300 rounded-md bg-white" />
          <input type="text" placeholder="Write Your Number" className="p-4 border border-gray-300 rounded-md bg-white" />
          <select className="p-4 border border-gray-300 rounded-md bg-white col-span-1 md:col-span-2">
            <option>Professional Graphic Design</option>
            <option>Web Development</option>
            <option>Digital Marketing</option>
          </select>
          <textarea placeholder="Write Details" className="p-4 border border-gray-300 rounded-md bg-white col-span-1 md:col-span-2 h-36"></textarea>
          <button className="col-span-1 md:col-span-2 bg-[var(--color-secendary)] text-white py-3 rounded-md hover:bg-[#c66f0c] transition duration-300">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
