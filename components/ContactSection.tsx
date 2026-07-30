"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { 
  HiOutlineMail, 
  HiOutlineUser, 
  HiOutlineChat 
} from "react-icons/hi";
import { 
  FaTelegramPlane, 
  FaWhatsapp, 
  FaLinkedinIn,
  FaGithub 
} from "react-icons/fa";

function ContactSection() {
  const [state, handleSubmit] = useForm("xdovqdkd");

  if (state.succeeded) {
    return (
      <section id="contact" className="min-h-screen flex items-center justify-center py-20 bg-slate-50 dark:bg-slate-900/30">
        <div className="max-w-md mx-auto px-4 w-full">
          <div className="bg-white dark:bg-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-200 dark:border-slate-700 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-teal-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-teal-500/30">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
              Message Sent! 🎉
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8">
              Thank you for reaching out. I&apos;ll get back to you as soon as possible!
            </p>
            
            <a
              href="#home"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>Back to Home</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 dark:text-white">
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-500">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-4 rounded-full" />
          <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s connect!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Left Side - Contact Info */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Let&apos;s Connect
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed text-sm">
              Feel free to reach out through any of these platforms:
            </p>

            {/* Status Badge */}
            <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl border border-emerald-200 dark:border-emerald-500/20 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              <span className="text-sm font-medium text-emerald-700 dark:text-emerald-400">
                Available for Freelance &amp; Full-time
              </span>
            </div>

            {/* Contact Items */}
            <div className="space-y-3">
              {/* Email */}
              <a
                href="mailto:bagus@example.com"
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-teal-50 dark:hover:bg-teal-500/10 border border-slate-200 dark:border-slate-700 hover:border-teal-300 dark:hover:border-teal-500/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-teal-100 dark:bg-teal-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <HiOutlineMail className="w-5 h-5 text-teal-600 dark:text-teal-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">Email</p>
                  <p className="text-sm text-slate-900 dark:text-white group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors truncate">
                    bagus@example.com
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/6285792565901"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-green-50 dark:hover:bg-green-500/10 border border-slate-200 dark:border-slate-700 hover:border-green-300 dark:hover:border-green-500/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-green-100 dark:bg-green-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <FaWhatsapp className="w-5 h-5 text-green-600 dark:text-green-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">WhatsApp</p>
                  <p className="text-sm text-slate-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                    +62 857-9256-5901
                  </p>
                </div>
                <span className="text-xs font-medium text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-500/20 px-2 py-0.5 rounded-full">
                  Chat
                </span>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/bagussastrawanfinance"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-blue-50 dark:hover:bg-blue-500/10 border border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-500/30 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <FaLinkedinIn className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">LinkedIn</p>
                  <p className="text-sm text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                    Bagus Sastrawan
                  </p>
                </div>
                <span className="text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-500/20 px-2 py-0.5 rounded-full">
                  Profile
                </span>
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/bagassastrawan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 hover:bg-slate-200 dark:hover:bg-slate-700/50 border border-slate-200 dark:border-slate-700 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-200 group"
              >
                <div className="w-10 h-10 bg-slate-200 dark:bg-slate-700 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                  <FaGithub className="w-5 h-5 text-slate-700 dark:text-slate-300" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">GitHub</p>
                  <p className="text-sm text-slate-900 dark:text-white group-hover:text-slate-700 dark:group-hover:text-slate-300 transition-colors truncate">
                    @bagassastrawan
                  </p>
                </div>
                <span className="text-xs font-medium text-slate-600 dark:text-slate-400 bg-slate-200 dark:bg-slate-700 px-2 py-0.5 rounded-full">
                  Repos
                </span>
              </a>
            </div>

            {/* Location & Response Time */}
            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Location</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Bali, Indonesia</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Response</p>
                  <p className="text-sm font-medium text-slate-900 dark:text-white">Within 24 hrs</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg border border-slate-200 dark:border-slate-700">
            <form
              onSubmit={handleSubmit}
              autoComplete="off"
              className="space-y-6"
            >
              {/* Name Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="flex items-center gap-2">
                    <HiOutlineUser className="w-4 h-4 text-teal-500" />
                    Full Name
                  </span>
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 outline-none text-slate-900 dark:text-white transition-all duration-200"
                  placeholder="John Doe"
                  required
                  id="name"
                  type="text"
                  name="name"
                />
                <ValidationError
                  prefix="Name"
                  field="name"
                  errors={state.errors}
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="flex items-center gap-2">
                    <HiOutlineMail className="w-4 h-4 text-teal-500" />
                    Email Address
                  </span>
                </label>
                <input
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 outline-none text-slate-900 dark:text-white transition-all duration-200"
                  placeholder="john@example.com"
                  required
                  id="email"
                  type="email"
                  name="email"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              {/* Message Field */}
              <div>
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                  <span className="flex items-center gap-2">
                    <HiOutlineChat className="w-4 h-4 text-teal-500" />
                    Message
                  </span>
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-700 focus:border-teal-500 dark:focus:border-teal-400 focus:ring-2 focus:ring-teal-500/20 dark:focus:ring-teal-400/20 outline-none text-slate-900 dark:text-white transition-all duration-200 resize-none"
                  placeholder="Tell me about your project..."
                  required
                  rows={5}
                  name="message"
                  id="message"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-sm text-red-500 mt-1"
                />
              </div>

              {/* Submit Button */}
              <button
                className="w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 shadow-md shadow-teal-500/20 hover:shadow-lg hover:shadow-teal-500/30 transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                type="submit"
                disabled={state.submitting}
              >
                {state.submitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaTelegramPlane className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;