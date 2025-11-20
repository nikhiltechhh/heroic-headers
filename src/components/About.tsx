import React from 'react';
import { Heart, Leaf, Award, Users, CheckCircle, Sparkles, Globe, Shield } from 'lucide-react';

const About: React.FC = () => {
  const values = [
    {
      icon: <Leaf className="w-8 h-8" />,
      title: "Clean Beauty",
      description: "We believe in transparent, clean formulations free from harmful ingredients. Every product is crafted with your skin's health as our priority."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Dermatologist-Tested",
      description: "All our products undergo rigorous testing and clinical trials to ensure safety and efficacy for all skin types."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Cruelty-Free",
      description: "We're committed to ethical beauty. None of our products are tested on animals, and we're proud to be certified cruelty-free."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Sustainable",
      description: "From sourcing to packaging, we prioritize sustainability. Our containers are recyclable and made from eco-friendly materials."
    }
  ];

  const milestones = [
    { year: "2018", title: "Founded", description: "GlowSkin was born from a passion for clean, effective skincare" },
    { year: "2019", title: "First Launch", description: "Launched our signature Glass Skin Serum to overwhelming success" },
    { year: "2021", title: "Global Expansion", description: "Expanded to 15 countries, bringing radiant skin worldwide" },
    { year: "2023", title: "Sustainability Award", description: "Recognized for our commitment to eco-friendly practices" },
    { year: "2025", title: "1M+ Happy Customers", description: "Reached a milestone of transforming over a million skin journeys" }
  ];

  const teamMembers = [
    {
      name: "Dr. Sarah Kim",
      role: "Founder & Chief Scientist",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
      bio: "With 15+ years in dermatological research, Sarah founded GlowSkin to make clinical-grade skincare accessible to everyone."
    },
    {
      name: "Emma Chen",
      role: "Head of Product Development",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Emma brings innovation to every formula, combining ancient beauty wisdom with cutting-edge science."
    },
    {
      name: "Michael Park",
      role: "Sustainability Director",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Michael ensures every step of our process honors our planet, from ingredient sourcing to packaging."
    },
    {
      name: "Dr. Lisa Martinez",
      role: "Clinical Director",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
      bio: "Board-certified dermatologist overseeing all clinical trials and ensuring product safety and efficacy."
    }
  ];

  const stats = [
    { number: "1M+", label: "Happy Customers" },
    { number: "50+", label: "Premium Products" },
    { number: "15", label: "Countries Worldwide" },
    { number: "98%", label: "Satisfaction Rate" }
  ];

  const certifications = [
    "Cruelty-Free Certified",
    "Vegan Society Approved",
    "EWG Verified",
    "PETA Certified",
    "Clean Beauty Standard",
    "B Corp Certified"
  ];

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section id="about" className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-light mb-6 tracking-tight">
                Where Tradition
                <br />
                <span className="text-emerald-600">Meets Couture</span>
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Swanky Styles is a premium ethnic design boutique creating handcrafted outfits for weddings, festivities, celebrity appearances, photoshoots, and once-in-a-lifetime moments. We specialise in custom couture, blending traditional artistry with modern silhouettes.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Every outfit is made-to-measure, hand-detailed, and designed with intentional elegance. From bridal lehengas to designer sarees, from trousseau planning to AI visual previews — everything begins with your story.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-black text-white hover:bg-gray-800 transition-colors font-medium">
                  Explore Collections
                </button>
                <button className="px-8 py-3 border-2 border-black text-black  hover:bg-black hover:text-white transition-colors font-medium">
                  Book Consultation
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=800&h=800&fit=crop"
                  alt="Designer ethnic wear"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-emerald-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-2xl">100%</p>
                    <p className="text-sm text-gray-600">Handcrafted Couture</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-emerald-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <p className="text-4xl sm:text-5xl font-light mb-2">{stat.number}</p>
                <p className="text-emerald-100">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              What We Stand For
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our values guide every decision we make, from formulation to packaging
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mb-6 text-emerald-600">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=800&h=600&fit=crop"
                alt="Our story"
                className="rounded-2xl shadow-xl"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-light mb-6 tracking-tight">
                From Lab to Your Skin
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  GlowSkin was born in 2018 when Dr. Sarah Kim, a dermatological researcher, noticed a gap in the market for truly clean, effective skincare that didn't compromise on results.
                </p>
                <p>
                  After years of working in clinical labs, she realized that many skincare products were either filled with harmful chemicals or lacked the potency to deliver real results. She set out to change that.
                </p>
                <p>
                  Today, we're proud to offer a complete range of products that combine the best of nature and science. Every formula is meticulously crafted, clinically tested, and designed to work in harmony with your skin's natural processes.
                </p>
                <p>
                  Our commitment extends beyond skincare. We're dedicated to sustainability, ethical practices, and making a positive impact on both our customers and the planet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Our Journey
            </h2>
            <p className="text-lg text-gray-600">Milestones that shaped our story</p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-emerald-200 hidden lg:block"></div>

            {milestones.map((milestone, index) => (
              <div
                key={index}
                className={`relative mb-12 lg:mb-16 ${
                  index % 2 === 0 ? 'lg:pr-1/2' : 'lg:pl-1/2 lg:text-right'
                }`}
              >
                <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <div className={`flex items-center gap-4 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                    <div className="w-20 h-20 bg-emerald-600 text-white rounded-full flex items-center justify-center font-light text-xl flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      {/* <section className="bg-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-4 tracking-tight">
              Meet Our Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate experts behind your favorite products
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group cursor-pointer"
              >
                <div className="relative aspect-square overflow-hidden rounded-xl mb-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-emerald-600 text-sm mb-3">{member.role}</p>
                <p className="text-sm text-gray-600 leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Certifications */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-light mb-4 tracking-tight">
              Certified Excellence
            </h2>
            <p className="text-lg text-gray-600">
              Our commitment to quality, backed by industry recognition
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow flex flex-col items-center justify-center text-center"
              >
                <CheckCircle className="w-8 h-8 text-emerald-600 mb-3" />
                <p className="text-sm font-medium text-gray-700">{cert}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section  className="bg-black text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light mb-6 tracking-tight">
            Join the GlowSkin Family
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience the difference of clean, effective skincare. Start your journey to radiant skin today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-white text-black rounded-full hover:bg-gray-100 transition-colors font-medium">
              Shop Now
            </button>
            <button className="px-8 py-3 border-2 border-white text-white rounded-full hover:bg-white hover:text-black transition-colors font-medium">
              Find Your Routine
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;