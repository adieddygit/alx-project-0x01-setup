import React, { useState } from "react";
import { UserData, UserModalProps } from "@/interfaces";


const UserModal: React.FC<UserModalProps> = ({ onClose, onSubmit }) => {
  const [user, setUser] = useState<UserData>({
    id: 1,
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: "",
      },
    },
    company: {
      name: "",
      catchPhrase: "",
      bs: "",
  }});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUser({ 
      ...user, 
      [e.target.name]: e.target.value 
    });
  };

  const handleSubmit = () => {
    onSubmit(user);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-lg">
        <h2 className="text-xl font-bold mb-4">Add New User</h2>

        <div className="grid grid-cols-1 gap-3 max-h-[70vh] overflow-y-auto pr-2">

          <input name="name" placeholder="Full Name" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />
          <input name="username" placeholder="Username" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />
          <input name="email" placeholder="Email" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />

          <h3 className="font-semibold mt-2">Address</h3>
          <input name="street" placeholder="Street" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />
          <input name="suite" placeholder="Suite" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />
          <input name="city" placeholder="City" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />
          <input name="zipcode" placeholder="Zipcode" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />

          <h3 className="font-semibold mt-2">Geo</h3>
          <input name="lat" placeholder="Latitude" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />
          <input name="lng" placeholder="Longitude" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />

          <h3 className="font-semibold mt-2">Contact</h3>
          <input name="phone" placeholder="Phone Number" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />
          <input name="website" placeholder="Website" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />

          <h3 className="font-semibold mt-2">Company</h3>
          <input name="companyName" placeholder="Company Name" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />
          <input name="companyCatchPhrase" placeholder="Catch Phrase" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />
          <input name="companyBs" placeholder="Business (bs)" className="border border-gray-300 p-2 rounded-md w-full" onChange={handleChange} />

        </div>

        <div className="flex justify-end gap-3 mt-4">
          <button onClick={onClose} className="px-4 py-2 bg-gray-300 rounded-md">
            Cancel
          </button>

          <button 
            onClick={handleSubmit} 
            className="px-4 py-2 bg-blue-600 text-white rounded-md"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserModal;
