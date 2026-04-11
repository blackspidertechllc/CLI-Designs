import { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

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

  const [state, handleSubmit] = useForm("mdapqabv");

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const fieldClassName =
    "mt-2 w-full border-b border-tan/20 bg-transparent py-3 font-brand text-dusty-taupe placeholder:text-dusty-taupe/35 outline-none transition focus:border-dusty-taupe";

  if (state.succeeded) {
    return (
      <section className="relative overflow-hidden bg-parchment py-20 lg:py-28">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(64,61,57,0.08),transparent_70%)]" />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
          <div className="rounded-3xl border border-tan/20 bg-almond-cream p-8 shadow-md lg:p-10">
            <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-dusty-taupe/55">
              Thank You
            </p>
            <h1 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-dusty-taupe sm:text-5xl lg:text-6xl">
              Message sent
            </h1>
            <p className="mt-6 font-brand text-base leading-7 text-dusty-taupe/65 sm:text-lg">
              Thank you for reaching out. We’ll be in touch soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative overflow-hidden bg-parchment py-20 lg:py-28">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(64,61,57,0.08),transparent_70%)]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-12">
        <div className="grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:items-start lg:gap-12">
          <div className="rounded-3xl border border-tan/20 bg-almond-cream p-8 shadow-md lg:p-10">
            <p className="font-brand text-sm font-semibold uppercase tracking-[0.2em] text-dusty-taupe/55">
              Contact
            </p>

            <h1 className="mt-4 font-brand text-4xl font-bold leading-[1.15] text-dusty-taupe sm:text-5xl lg:text-6xl">
              Contact us
            </h1>

            <p className="mt-6 font-brand text-base leading-7 text-dusty-taupe/65 sm:text-lg">
              If you have any questions or comments, please contact us via email
              or phone, or send us a message using the contact form.
            </p>

            <div className="mt-10 space-y-8">
              <div>
                <p className="font-brand text-xs uppercase tracking-[0.15em] text-dusty-taupe/55">
                  Email
                </p>
                <a
                  href="mailto:clidesignsltd@gmail.com"
                  className="mt-2 inline-block font-brand text-lg text-dusty-taupe transition-opacity hover:opacity-70"
                >
                  clidesignsltd@gmail.com
                </a>
              </div>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSubmit(formData);
            }}
            className="rounded-3xl border border-tan/20 bg-almond-cream p-8 shadow-md lg:p-10"
          >
            <div className="grid gap-8">
              <div>
                <label
                  htmlFor="name"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-dusty-taupe"
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
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-dusty-taupe"
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
                  required
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="font-brand text-xs uppercase tracking-[0.15em] text-dusty-taupe"
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
                  className="font-brand text-xs uppercase tracking-[0.15em] text-dusty-taupe"
                >
                  Project Type
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className={fieldClassName}
                  required
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
                  className="font-brand text-xs uppercase tracking-[0.15em] text-dusty-taupe"
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
                  className="font-brand text-xs uppercase tracking-[0.15em] text-dusty-taupe"
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
                  className="font-brand text-xs uppercase tracking-[0.15em] text-dusty-taupe"
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
                  required
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button
                type="submit"
                disabled={state.submitting}
                className="mt-2 inline-flex w-fit items-center rounded-2xl border border-tan/20 px-6 py-3 font-brand font-semibold text-dusty-taupe transition-colors hover:bg-deep-charcoal hover:text-parchment disabled:opacity-50"
              >
                {state.submitting ? "Sending..." : "Send Message"}
              </button>

              {state.errors?.length > 0 && (
                <p className="font-brand text-sm text-dusty-taupe/70">
                  Something went wrong. Please review the form and try again.
                </p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
