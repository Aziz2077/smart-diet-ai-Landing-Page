import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import TestimonialCarousel from "./TestimonialCarousel";

export default function SocialProof() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-padding bg-gray-50" id="testimonials">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-secondary mb-4">
            Loved by <span className="text-terracotta">Algerian Families</span>
          </h2>
          <p className="paragraph max-w-2xl mx-auto">
            Join thousands of satisfied families who have transformed their
            cooking experience with our AI-powered meal planning.
          </p>
        </motion.div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {[
            { number: "12,500+", label: "Active Users" },
            { number: "45,000+", label: "Meals Generated" },
            { number: "4.8/5", label: "Average Rating" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center p-6 bg-white rounded-xl shadow-md"
            >
              <h3 className="font-amazigh text-3xl text-terracotta mb-2">
                {stat.number}
              </h3>
              <p className="text-gray-600">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Testimonials Carousel */}
        <TestimonialCarousel />
      </div>
    </section>
  );
}
