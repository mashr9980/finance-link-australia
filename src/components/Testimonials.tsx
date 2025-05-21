// src/components/Testimonials.tsx
import { useState, useRef, useEffect } from "react";
import { useInView } from "framer-motion";

export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [isAnimated, setIsAnimated] = useState(false);
  
  // Animated dots for pagination
  const [activeDot, setActiveDot] = useState(0);
  
  // Auto-slide functionality
  useEffect(() => {
    if (isInView && !isAnimated) {
      setIsAnimated(true);
    }
    
    const interval = setInterval(() => {
      if (isInView) {
        handleNext();
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isInView, activeSlide, isAnimated]);

  const testimonials = [
    {
      id: 1,
      name: "Mariah Samartzis",
      time: "a week ago",
      avatar: "MS",
      avatarColor: "#8B5CF6",
      text: "I had the pleasure of working with Cody, and I can honestly say he made the entire process so smooth. He was incredibly easy to contact and always quick to respond to my questions, no matter how small. Cody went above and beyond to ensure I was getting the best possible deal, and his customer service was top-notch. Highly recommend working with him if you're looking for someone reliable and responsive!",
      rating: 5,
    },
    {
      id: 2,
      name: "W B",
      time: "3 weeks ago",
      avatar: "W",
      avatarColor: "#9333EA",
      text: "I couldn't be happier with Finance Link Australia. The process was smooth and hustle free, David was very accessible and ready to assist at any moment.",
      rating: 5,
    },
    {
      id: 3,
      name: "Tonino Luketic",
      time: "3 weeks ago",
      avatar: "T",
      avatarColor: "#A855F7",
      text: "David honestly made this process so easy...Barely needed to move a pinky during my busy day, enquired for the money Friday and it was in my account Monday afternoon. Would recommend to anyone!",
      rating: 5,
    },
    {
      id: 4,
      name: "Ulamila Luva",
      time: "6 months ago",
      avatar: "U",
      avatarColor: "#C084FC",
      text: "Credit Wipe recommended me to Finance Link Australia. I want to say a very BIG THANK YOU to Vassi!! He is very professional and knowledgeable. He helped get my application for a car loan approve very quickly plus finding the car that I wanted. Vassi kept me in the loop throughout the whole process. Within a week, I was picking up my car and I absolutely love it!! I fully recommend Finance Link Australia, trust me, you will not be disappointed! THANK YOU VASSI!!! 😊",
      rating: 5,
    },
    {
      id: 5,
      name: "Job Edmunds",
      time: "9 months ago",
      avatar: "J",
      avatarColor: "#D8B4FE",
      text: "David was incredible in making our financial loan happen. They were always ready to pick up the phone and to respond to any questions I had in the process. If you want results and real genuine service this is the business to go with. Couldn't recommend David high enough!",
      rating: 5,
    }
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setActiveDot((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    setActiveDot((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };
  
  const handleDotClick = (index: number) => {
    setActiveSlide(index);
    setActiveDot(index);
  };

  const renderStars = (rating: number) => {
    return Array(5)
      .fill(0)
      .map((_, i) => (
        <span key={i} className="text-2xl text-yellow-400">
          ★
        </span>
      ));
  };

  // Get visible testimonials based on screen size
  const getVisibleTestimonials = () => {
    const isMobile = window.innerWidth < 768;
    const isTablet = window.innerWidth >= 768 && window.innerWidth < 1024;
    
    if (isMobile) {
      return [testimonials[activeSlide]];
    } else if (isTablet) {
      return [
        testimonials[activeSlide],
        testimonials[(activeSlide + 1) % testimonials.length]
      ];
    } else {
      return [
        testimonials[activeSlide],
        testimonials[(activeSlide + 1) % testimonials.length],
        testimonials[(activeSlide + 2) % testimonials.length]
      ];
    }
  };

  const visibleTestimonials = getVisibleTestimonials();

  return (
    <section ref={containerRef} className="relative py-20 bg-dark-surface overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM4QjVDRjYiIGZpbGwtb3BhY2l0eT0iMC4wNCI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6bS0zMiA0aDR2MWgtNHYtMXptMC0yaDF2NGgtMXYtNHptMTYgNGg0djFoLTR2LTF6bTAtMmgxdjRoLTF2LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-1/4 bg-gradient-to-b from-teal-900/10 to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-1/4 bg-gradient-to-t from-teal-900/10 to-transparent"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`mb-12 text-center transition-all duration-700 ${isAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <h2 className="mb-2 text-3xl font-bold md:text-4xl text-white">What our awesome clients say</h2>
          <div className="flex items-center justify-center">
            <h2 className="gradient-text text-3xl font-bold md:text-4xl">about Finance
              <span className="relative mx-1 inline-block">
                <svg width="24" height="24" viewBox="0 0 24 24" className="text-teal-400 rotate-90 transform">
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 10.5L21 3M21 3H15M21 3V9M10.5 13.5L3 21M3 21H9M3 21L3 15"
                  />
                </svg>
              </span>
              Link
            </h2>
          </div>
        </div>

        <div className={`mx-auto mb-12 max-w-3xl text-center transition-all duration-700 delay-100 ${isAnimated ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-10'}`}>
          <p className="text-lg text-gray-300">
            See how we've helped our clients take control of their finances with easy access, 
            flexible, fair, and transparent financing options that make a real difference in their lives.
          </p>
        </div>

        <div className="relative">
          <div className={`grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 transition-all duration-500 ${isAnimated ? 'opacity-100' : 'opacity-0'}`}>
            {visibleTestimonials.map((testimonial, index) => (
              <div
                key={`visible-${testimonial.id}`}
                className="testimonial-card rounded-xl p-6 transform transition-all duration-700"
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <div className="mb-4 flex items-center">
                  <div
                    className="avatar flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl font-bold text-white glow"
                    style={{ backgroundColor: testimonial.avatarColor }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">
                      {testimonial.time}
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex items-center">
                  <div className="google-icon mr-3 opacity-75">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#FFC107"/>
                      <path d="M3.15295 7.3455L6.43845 9.755C7.32745 7.554 9.48045 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C8.15895 2 4.82795 4.1685 3.15295 7.3455Z" fill="#FF3D00"/>
                      <path d="M12 22C14.583 22 16.93 21.0115 18.7045 19.404L15.6095 16.785C14.5717 17.5742 13.3037 18.001 12 18C9.39905 18 7.19045 16.3415 6.35895 14.027L3.09695 16.5395C4.75245 19.778 8.11345 22 12 22Z" fill="#4CAF50"/>
                      <path d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.785L18.7045 19.404C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z" fill="#1976D2"/>
                    </svg>
                  </div>
                  <div className="stars flex">{renderStars(testimonial.rating)}</div>
                </div>

                <p className="text-gray-300">{testimonial.text}</p>
              </div>
            ))}
          </div>

          {/* Navigation arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-4 md:-left-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-dark-card border border-teal-500/30 p-2 shadow-lg transition-all hover:scale-105 hover:border-teal-500/60 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            aria-label="Previous testimonial"
          >
            <svg
              className="h-6 w-6 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 md:-right-4 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-dark-card border border-teal-500/30 p-2 shadow-lg transition-all hover:scale-105 hover:border-teal-500/60 focus:outline-none focus:ring-2 focus:ring-teal-500/50"
            aria-label="Next testimonial"
          >
            <svg
              className="h-6 w-6 text-teal-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9 5l7 7-7 7" 
              />
            </svg>
          </button>
        </div>
        
        {/* Dots pagination */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${activeDot === index ? 'bg-teal-500 w-8' : 'bg-teal-900/40'}`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}