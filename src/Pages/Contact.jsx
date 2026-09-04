import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";
import ContactForm from "../Component/ContactForm";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h2>

          <div className="w-20 h-1 bg-blue-600 mx-auto rounded-full mb-6"></div>

          <p className="text-slate-600 text-lg">
            Have a project in mind or want to work together?
            Feel free to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="space-y-6">

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-100">
                <FaEnvelope className="text-blue-600 text-xl" />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Email</h4>
                <p className="text-slate-600">
                  alaminhossain1997.web@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-green-100">
                <FaPhoneAlt className="text-green-600 text-xl" />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Phone</h4>
                <p className="text-slate-600">
                  +880 1731191154, +880 1732485088
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-white p-5 rounded-2xl shadow-sm">
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-red-100">
                <FaMapMarkerAlt className="text-red-600 text-xl" />
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Location</h4>
                <p className="text-slate-600">
                  Gazipur,Dhaka, Bangladesh
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <ContactForm/>

        </div>
      </div>
    </section>
  );
};

export default Contact;