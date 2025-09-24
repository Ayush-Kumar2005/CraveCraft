import React from "react";


const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-100 flex items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-2xl max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        {/* Left Section (Desktop) */}
        <div className="hidden md:flex bg-gradient-to-br from-orange-500 to-red-400 p-10 flex-col justify-center text-white">
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="mb-6 text-lg">
            Have a question, suggestion, or craving you want to share?
            We’d love to hear from you!
          </p>
          <div className="space-y-4">
            <p>
              <span className="font-semibold">Email:</span> support@cravecraft.com
            </p>
            <p>
              <span className="font-semibold">Phone:</span> +1 (555) 123-4567
            </p>
            <p>
              <span className="font-semibold">Location:</span> 123 Flavor Street, Foodie City
            </p>
          </div>
        </div>

        {/* Mobile Orange Header */}
        <div className="md:hidden bg-gradient-to-br from-orange-500 to-red-400 text-white p-6 text-center">
          <h2 className="text-2xl font-bold">Get in Contact with Us</h2>
          <p className="mt-3"><span className="font-semibold">Email:</span> support@cravecraft.com</p>
          <p><span className="font-semibold">Phone:</span> +1 (555) 123-4567</p>
        </div>

        {/* Right Section - Form */}
        <div className="p-10">
          <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Us</h3>
          <form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-600">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-600">Message</label>
              <textarea
                rows="4"
                placeholder="Write your message..."
                className="w-full mt-1 p-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 text-white font-semibold py-3 rounded-xl shadow-md hover:bg-orange-600 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}



export default ContactUs;
