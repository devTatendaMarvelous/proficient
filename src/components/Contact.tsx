import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, MapPin, Send, CheckCircle2, X } from 'lucide-react';

const ACTIVITIES = [
  'Helicopter Flight',
  'Main Falls Tour',
  'Rainforest Walk',
  'Victoria Falls Bridge',
  'Bridge Bungee Jump',
  'Sunset River Cruise',
  'Vintage Safari Train',
  'The Boma Dinner',
];

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    country: '',
    message: '',
  });
  const [selectedActivities, setSelectedActivities] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleActivity = (activity: string) => {
    setSelectedActivities((prev) =>
      prev.includes(activity)
        ? prev.filter((act) => act !== activity)
        : [...prev, activity]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Construct the mailto link parameters
    const emailTo = 'proficientsabaescapes@gmail.com';
    const subject = encodeURIComponent(`Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Phone: ${formData.phone}\n` +
      `Country: ${formData.country}\n` +
      `Interested Activities: ${selectedActivities.join(', ') || 'None selected'}\n\n` +
      `Message:\n${formData.message}`
    );

    // Open mailto client
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;

    // Open success popup
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    // Reset form
    setFormData({ name: '', email: '', phone: '', country: '', message: '' });
    setSelectedActivities([]);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-white relative">
      {/* Background shape */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Left Column: Contact info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <span className="text-primary font-button text-xs font-bold uppercase tracking-[0.25em] mb-3 inline-block">
                Start Planning
              </span>
              <h2 className="text-3xl sm:text-5xl font-heading font-bold text-charcoal mb-6">
                Let\'s Plan Your Escape
              </h2>
              <div className="w-16 h-1 bg-accent mb-6 rounded-full" />
              <p className="text-base sm:text-lg text-charcoal/70 font-body font-light leading-relaxed mb-8">
                Ready to customize your journey? Fill out the form or contact us directly. Our local specialists will respond with a bespoke quote within 24 hours.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                <a
                  href="mailto:proficientsabaescapes@gmail.com"
                  className="flex items-center gap-4 group p-4 rounded-2xl hover:bg-warm-white transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-button font-bold text-charcoal/40 uppercase tracking-widest mb-0.5">Email Us</h4>
                    <p className="text-sm font-button font-medium text-charcoal">proficientsabaescapes@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 text-secondary flex items-center justify-center">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-button font-bold text-charcoal/40 uppercase tracking-widest mb-0.5">WhatsApp / Call</h4>
                    <p className="text-sm font-button font-medium text-charcoal">+263 772 957 563</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-2xl">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 text-accent-dark flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-[10px] font-button font-bold text-charcoal/40 uppercase tracking-widest mb-0.5">Location</h4>
                    <p className="text-sm font-button font-medium text-charcoal">Victoria Falls, Zimbabwe</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Icons Placeholders */}
            <div className="mt-12 pt-8 border-t border-charcoal/5">
              <h4 className="text-[10px] font-button font-bold text-charcoal/40 uppercase tracking-widest mb-4">Connect With Us</h4>
              <div className="flex gap-4">
                {['Facebook', 'Instagram', 'Twitter', 'TripAdvisor'].map((social, idx) => (
                  <span
                    key={idx}
                    className="px-4 py-2 rounded-full border border-charcoal/10 text-xs font-button text-charcoal hover:border-primary hover:text-primary cursor-pointer transition-colors duration-300"
                  >
                    {social}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Custom Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-warm-white border border-charcoal/5 shadow-xl"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Name */}
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-xs font-button font-bold text-charcoal/60 uppercase tracking-wider mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="px-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body text-sm text-charcoal"
                  />
                </div>

                {/* Email */}
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs font-button font-bold text-charcoal/60 uppercase tracking-wider mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter your email"
                    className="px-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body text-sm text-charcoal"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                {/* Phone */}
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs font-button font-bold text-charcoal/60 uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="e.g. +1 555-0199"
                    className="px-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body text-sm text-charcoal"
                  />
                </div>

                {/* Country */}
                <div className="flex flex-col">
                  <label htmlFor="country" className="text-xs font-button font-bold text-charcoal/60 uppercase tracking-wider mb-2">
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    placeholder="Country of residence"
                    className="px-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body text-sm text-charcoal"
                  />
                </div>
              </div>

              {/* Activity Selection Chips */}
              <div className="mb-6">
                <label className="text-xs font-button font-bold text-charcoal/60 uppercase tracking-wider mb-3 block">
                  Select Interested Activities
                </label>
                <div className="flex flex-wrap gap-2.5">
                  {ACTIVITIES.map((act) => {
                    const isSelected = selectedActivities.includes(act);
                    return (
                      <button
                        type="button"
                        key={act}
                        onClick={() => toggleActivity(act)}
                        className={`px-4 py-2.5 rounded-xl border text-xs font-button font-medium transition-all duration-300 cursor-pointer ${
                          isSelected
                            ? 'bg-primary border-primary text-white shadow-md shadow-primary/10'
                            : 'bg-white border-charcoal/10 text-charcoal/70 hover:border-primary/50'
                        }`}
                      >
                        {act}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Message */}
              <div className="flex flex-col mb-8">
                <label htmlFor="message" className="text-xs font-button font-bold text-charcoal/60 uppercase tracking-wider mb-2">
                  Tell Us About Your Ideal Trip
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Share details such as estimated dates, number of guests, travel style, or special requests..."
                  className="px-4 py-3 bg-white border border-charcoal/10 rounded-xl focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary font-body text-sm text-charcoal resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-primary hover:bg-primary/95 text-white font-button font-bold uppercase tracking-widest text-xs shadow-lg shadow-primary/20 hover:shadow-primary/35 transition-all flex items-center justify-center gap-2 cursor-pointer group"
              >
                Send Request & Open Email Client
                <Send className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Success Glass Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="max-w-md w-full glass-panel border border-white/30 rounded-3xl p-8 text-center relative shadow-2xl"
            >
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-charcoal/50 hover:text-charcoal cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="w-16 h-16 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="font-heading font-bold text-2xl text-charcoal mb-3">
                Inquiry Generated
              </h3>
              <p className="text-xs sm:text-sm font-body font-light text-charcoal/70 leading-relaxed mb-6">
                We have generated your inquiry form and triggered your default email client. 
                <br /><br />
                If your client did not open, please copy your request details and send them directly to:
                <strong className="block text-primary text-sm mt-2 font-button font-semibold">proficientsabaescapes@gmail.com</strong>
              </p>

              <button
                onClick={closeModal}
                className="px-6 py-2.5 rounded-full bg-primary hover:bg-primary-dark text-white font-button text-xs font-bold uppercase tracking-widest cursor-pointer"
              >
                Close Window
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
