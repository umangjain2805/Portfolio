import { motion } from "framer-motion";
import GlassCard from "../components/GlassCard";
import Button from "../components/Button";
import SocialLinks from "../components/SocialLinks";
import { FaPaperPlane, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact" className="py-24">
      <div className="max-w-4xl mx-auto">
        <GlassCard className="p-10 md:p-16 relative overflow-hidden border-white/60">
          {/* Decorative background circle */}
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[80px] rounded-full"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-mint/20 blur-[80px] rounded-full"></div>

          <div className="grid md:grid-cols-2 gap-12 relative z-10">
            <div>
              <h2 className="text-4xl font-bold text-primary mb-6">Let's build something amazing together.</h2>
              <p className="text-secondary mb-10 leading-relaxed">
                I'm always open to new opportunities and collaborations. Feel free to reach out for a project or just a friendly chat!
              </p>

              <div className="space-y-6 mb-10">
                <ContactInfo icon={<FaPaperPlane />} label="Email" value="umangjain2805@gmail.com" />
                <ContactInfo icon={<FaMapMarkerAlt />} label="Location" value="Indore, India (SGSITS)" />
              </div>

              <SocialLinks />
            </div>

            <div className="flex flex-col gap-6">
              <div className="space-y-4">
                 <input 
                    type="text" 
                    placeholder="Your Name" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-white/60 focus:border-accent/40 outline-none transition-all placeholder:text-secondary/50 text-primary"
                 />
                 <input 
                    type="email" 
                    placeholder="Your Email" 
                    className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-white/60 focus:border-accent/40 outline-none transition-all placeholder:text-secondary/50 text-primary"
                 />
                 <textarea 
                    placeholder="Your Message" 
                    rows="5"
                    className="w-full px-6 py-4 rounded-2xl bg-white/40 border border-white/60 focus:border-accent/40 outline-none transition-all placeholder:text-secondary/50 text-primary resize-none"
                 ></textarea>
              </div>
              <Button variant="primary" className="w-full py-4 text-lg">
                Send Message
              </Button>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
};

const ContactInfo = ({ icon, label, value }) => (
  <div className="flex items-center gap-4">
    <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center text-accent">
      {icon}
    </div>
    <div>
      <p className="text-xs font-bold text-secondary uppercase tracking-widest">{label}</p>
      <p className="text-primary font-medium">{value}</p>
    </div>
  </div>
);

export default Contact;
