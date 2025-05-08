import React, { useState } from "react";
import "./Testimonials.css";
import { useIsMobile } from "@/hooks/isMobile";
export function Testimonials() {
  const [activeSlide, setActiveSlide] = useState(0);
  const isMobile = useIsMobile();
  const itemsPerPage = isMobile ? 1 : 3;

  const testimonials = [
    {
      id: 1,
      name: "Mariah Samartzis",
      handle: "@mariah",
      time: "a week ago",
      avatar: "MS",
      avatarColor: "#f06292",
      text: "I had the pleasure of working with Cody, and I can honestly say he made the entire process so smooth. He was incredibly easy to contact and always quick to respond to my questions, no matter how small. Cody went above and beyond to ensure I was getting the best possible deal, and his customer service was top-notch. Highly recommend working with him if you're looking for someone reliable and responsive!",
      rating: 5,
    },
    {
      id: 2,
      name: "W B",
      handle: "@deon.deeral",
      time: "3 weeks ago",
      avatar: "W",
      avatarColor: "#1976d2",
      text: "I couldn't be happier with Finance Link Australia. The process was smooth and hustle free, David was very accessible and ready to assist at any moment.",
      rating: 5,
    },
    {
      id: 3,
      name: "Tonino Luketic",
      handle: "@tom.hissey",
      time: "3 weeks ago",
      avatar: "T",
      avatarColor: "#9c27b0",
      text: "David honestly made this process so easy...Barely needed to move a pinky during my busy day, enquired for the money Friday and it was in my account Monday afternoon. Would recommend to anyone!",
      rating: 5,
    },
    {
      id: 4,
      name: "Ulamila Luva",
      handle: "@sarah.chen",
      time: "6 months ago",
      avatar: "U",
      avatarColor: "#43a047",
      text: "Credit Wipe recommended me to Finance Link Australia. I want to say a very BIG THANK YOU to Vassi!! He is very professional and knowledgeable. He helped get my application for a car loan approve very quickly plus finding the car that I wanted. Vassi kept me in the loop throughout the whole process. Within a week, I was picking up my car and I absolutely love it!! I fully recommend Finance Link Australia, trust me, you will not be disappointed! THANK YOU VASSI!!! 😊",
      rating: 5,
    },
    {
      id: 5,
      name: "Job Edmunds",
      handle: "@sarah.chen",
      time: "9 months ago",
      avatar: "J",
      avatarColor: "#43a047",
      text: "David was incredible in making our financial loan happen. They were always ready to pick up the phone and to respond to any questions I had in the process. If you want results and real genuine service this is the business to go with. Couldn’t recommend David high enough!",
      rating: 5,
    },
    {
      id: 6,
      name: "Sophie smith",
      handle: "@sarah.chen",
      time: "10 months ago",
      avatar: "S",
      avatarColor: "#43a047",
      text: "David has been a pleasure to deal with in regards to refinancing our caravan loan. He got us the best interest rate and low monthly repayment as possible. Definitely recommend having a chat with David to solve your finances.",
      rating: 5,
    },
    {
      id: 7,
      name: "Elliot Webb",
      handle: "@sarah.chen",
      time: "10 months ago",
      avatar: "S",
      avatarColor: "#43a047",
      text: "We've been working with FinanceLink Australia for over 3 years now. Having a top 1% finance broker in your corner is a must in today's age. Dan is one of the hardest-working and nicest people I've ever met. He consistently goes above and beyond to help out, finding some truly unique solutions to very complex situations! If you haven't already, give them a call and see what they can do to help you!",
      rating: 5,
    },
    {
      id: 8,
      name: "Elliot Webb",
      handle: "@sarah.chen",
      time: "a year ago",
      avatar: "EL",
      avatarColor: "#43a047",
      text: "David was a pleasure to deal with from start to finish. Talked us through the process, what was required and got us a great deal in the end. Would definitely recommend financelink to anyone needing assistance with their finance. Five star service.",
      rating: 5,
    },
  ];

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveSlide((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
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

  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (activeSlide + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  return (
    <section className="testimonials-section py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">What our awesome clients say</h2>
          <div className="flex items-center justify-center">
            <h2 className="text-3xl font-bold md:text-4xl">about Finance<span className="inline-block rotate-90">🔗</span>Link</h2>
          </div>
        </div>

        <div className="mx-auto mb-12 max-w-3xl text-center">
          <p className="text-lg">
            Intrigued? You should be. It's time to fast forward your finances with Float Me, a local
            Australian-based company that helps people just like you take control of their money.
            See how we've helped our clients live happier lives by providing easy access, flexible,
            fair, and transparent financing options!
          </p>
        </div>

        <div className="relative">
          <div className="testimonials-container grid grid-cols-1 gap-4 md:grid-cols-1 lg:grid-cols-3 ">
            {visibleTestimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="testimonial-card rounded-lg border border-gray-100 bg-white p-6 shadow-lg"
              >
                <div className="mb-4 flex items-center">
                  <div
                    className="avatar flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full text-xl font-bold text-white"
                    style={{ backgroundColor: testimonial.avatarColor }}
                  >
                    {testimonial.avatar}
                  </div>
                  <div className="ml-4">
                    <div className="font-bold">{testimonial.name}</div>
                    <div className="text-sm text-gray-600">
                      {testimonial.time}
                    </div>
                  </div>
                </div>

                <div className="mb-4 flex items-center">
                  <div className="google-icon mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      width="24px"
                      height="24px"
                    >
                      <path
                        fill="#FFC107"
                        d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                      <path
                        fill="#FF3D00"
                        d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                      />
                      <path
                        fill="#4CAF50"
                        d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                      />
                      <path
                        fill="#1976D2"
                        d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                      />
                    </svg>
                  </div>
                  <div className="stars flex">{renderStars(testimonial.rating)}</div>
                </div>

                <p className="text-gray-800">{testimonial.text}</p>
              </div>
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="nav-button absolute left-4 sm:left-6 md:left-8 lg:left-10 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md transition hover:scale-105 focus:outline-none"
            aria-label="Previous testimonial"
            title="Previous testimonial"
          >
            <svg
              className="h-6 w-6"
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
            className="nav-button absolute right-4 sm:right-6 md:right-8 lg:right-10 top-1/2 z-10 -translate-y-1/2 transform rounded-full bg-white p-2 shadow-md transition hover:scale-105 focus:outline-none"
            aria-label="Next testimonial"
            title="Next testimonial"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
