import React from "react";

const PrivacyPolicy = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-4 py-12 text-gray-700 bg-green-50 min-h-screen">
      <h1 className="text-4xl font-bold text-green-800 mb-6 text-center">Privacy Policy</h1>

      <p className="mb-4">
        At Connecting NGO, we are committed to protecting your privacy. This policy outlines how we collect, use, and safeguard your personal information when you visit our website.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">1. Information Collection</h2>
      <p className="mb-4">
        We may collect personal details such as your name, email address, phone number, and other relevant information when you register, donate, or connect with us via forms.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">2. Use of Information</h2>
      <p className="mb-4">
        The information we collect is used to communicate with you, improve our services, respond to inquiries, and send updates or newsletters.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">3. Information Sharing</h2>
      <p className="mb-4">
        We do not sell, trade, or rent your personal information to others. We may share data with trusted partners to help operate our website and provide our services, provided they agree to keep the information confidential.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">4. Data Security</h2>
      <p className="mb-4">
        We implement appropriate security measures to protect against unauthorized access or alteration of your personal information.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">5. Third-Party Links</h2>
      <p className="mb-4">
        Our website may contain links to external websites. We are not responsible for the content or privacy practices of these third-party sites.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">6. Changes to This Policy</h2>
      <p className="mb-4">
        We may update this privacy policy from time to time. We encourage you to review this page periodically for any changes.
      </p>

      <h2 className="text-2xl font-semibold text-green-700 mt-8 mb-2">7. Contact Us</h2>
      <p className="mb-4">
        If you have any questions regarding this policy, feel free to contact us at <a href="mailto:info@connectingngo.org" className="text-green-600 underline">info@connectingngo.org</a>.
      </p>
    </div>
  );
};

export default PrivacyPolicy;
