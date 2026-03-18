import { useState } from "react";

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const fieldClassName =
    "mt-2 w-full border-b border-black/15 bg-transparent py-3 font-brand text-text-black placeholder:text-text-black/35 outline-none transition focus:border-black";

  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(0,0,0,0.04),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start lg:gap-12">
          {/* Contact Info Card */}
          <div className="rounded-3xl border border-black/10 bg-brand-white/95 p-8 shadow-md lg:p-10">
            <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-text-black/55">
              Contact
            </p>

            <h1 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-text-black sm:text-5xl lg:text-6xl">
              Contact us
            </h1>

            <p className="mt-6 font-brand text-base leading-7 text-text-black/65 sm:text-lg">
              If you have any questions or comments, please contact us via email
              or phone, or send us a message using the contact form.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55">
                  Email
                </p>
                <a
                  href="mailto:email@example.com"
                  className="mt-2 inline-block font-brand text-lg text-text-black transition-opacity hover:opacity-70"
                >
                  email@example.com
                </a>
              </div>

              <div>
                <p className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55">
                  Phone
                </p>
                <a
                  href="tel:5555555555"
                  className="mt-2 inline-block font-brand text-lg text-text-black transition-opacity hover:opacity-70"
                >
                  (555) 555-5555
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form Card */}
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-black/10 bg-brand-white/95 p-8 shadow-md lg:p-10"
          >
            <div className="grid gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55"
                >
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55"
                >
                  Phone
                </label>
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(555) 555-5555"
                  className={fieldClassName}
                />
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={fieldClassName}
                >
                  <option value="">Select</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="consultation">Consultation</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="budget"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55"
                >
                  Budget
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={fieldClassName}
                >
                  <option value="">Select</option>
                  <option value="under10k">Under $10k</option>
                  <option value="10k-50k">$10k – $50k</option>
                  <option value="50k-100k">$50k – $100k</option>
                  <option value="100kplus">$100k+</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="timeline"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleChange}
                  className={fieldClassName}
                >
                  <option value="">Select</option>
                  <option value="1-3months">1–3 Months</option>
                  <option value="3-6months">3–6 Months</option>
                  <option value="6plus">6+ Months</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-text-black/55"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us a little about your project"
                  className={fieldClassName}
                />
              </div>

              <button
                type="submit"
                className="mt-2 inline-flex w-fit items-center rounded-2xl border border-black/10 px-6 py-3 font-brand font-semibold text-text-black transition-colors hover:bg-text-black hover:text-brand-white"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
