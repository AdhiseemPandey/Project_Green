import React from "react";

const FAQsPage = () => {
  const faqs = [
    {
      question: "What is Connecting NGO?",
      answer:
        "Connecting NGO is a platform that bridges the gap between non-profits, donors, and volunteers to create a greater social impact."
    },
    {
      question: "How can I join as a volunteer?",
      answer:
        "Simply go to our 'NGOs Connect' section and register as a volunteer. We will connect you with NGOs based on your interests."
    },
    {
      question: "Can my NGO partner with Connecting NGO?",
      answer:
        "Absolutely! Visit our 'Partner With Us' page to fill out a short form. Our team will get back to you promptly."
    },
    {
      question: "Is there any cost involved?",
      answer:
        "No, Connecting NGO is a free platform for both NGOs and volunteers. We believe in empowering change without financial barriers."
    }
  ];

  return (
    <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">Frequently Asked Questions</h1>
      <div className="space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-6 border-l-4 border-green-500"
          >
            <h3 className="text-xl font-semibold text-green-800 mb-2">
              {faq.question}
            </h3>
            <p className="text-gray-700 text-base leading-relaxed">
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQsPage;
