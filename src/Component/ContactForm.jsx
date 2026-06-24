import { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Full name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)
    ) {
      newErrors.email = "Invalid email address";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setErrors({});

    console.log(formData);

    alert("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-sm">
      <form onSubmit={handleSubmit} action="https://formspree.io/f/mojojvap" method="POST" className="space-y-5">

        {/* Name */}
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Full Name
          </label>

          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Email Address
          </label>

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />

          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Subject */}
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Subject
          </label>

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Subject"
            className="w-full border border-slate-300 rounded-lg px-4 py-3"
          />

          {errors.subject && (
            <p className="text-red-500 text-sm mt-1">
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block mb-2 text-sm font-medium text-slate-700">
            Message
          </label>

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message..."
            className="w-full border border-slate-300 rounded-lg px-4 py-3 resize-none"
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-1">
              {errors.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg hover:bg-slate-800 transition"
        >
          Send Message
          <FaPaperPlane />
        </button>

      </form>
    </div>
  );
};

export default ContactForm;