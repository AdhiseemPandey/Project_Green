import React from "react";

const TermsOfServicePage = () => {
  return (
    <div className="w-full max-w-4xl mx-auto px-6 py-12 text-gray-800 bg-green-50 min-h-screen">
      <header className="mb-10">
        <h1 className="text-4xl font-bold text-green-700 text-center">Terms of Service</h1>
        <p className="text-center text-sm text-gray-600 mt-2">
          Last updated: April 8, 2025
        </p>
      </header>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">1. Acceptance of Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          By accessing and using the Connecting NGO website, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">2. Changes to Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to update the Terms of Service at any time without notice. It is your responsibility to review this page periodically for changes.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">3. Use of the Site</h2>
        <p className="text-gray-700 leading-relaxed">
          You agree to use this site only for lawful purposes and in a way that does not infringe on the rights of, restrict or inhibit anyone else's use of the site.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">4. Intellectual Property</h2>
        <p className="text-gray-700 leading-relaxed">
          All content on this website, including text, graphics, logos, and images, is the property of Connecting NGO or its content suppliers and is protected by intellectual property laws.
        </p>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold text-green-600 mb-2">5. Termination</h2>
        <p className="text-gray-700 leading-relaxed">
          We reserve the right to terminate or restrict access to our services for any reason, including violation of these terms.
        </p>
      </section>

      <footer className="text-sm text-center text-gray-500 mt-16">
        &copy; 2025 Connecting NGO. All rights reserved.
      </footer>
    </div>
  );
};

export default TermsOfServicePage;
