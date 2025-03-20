// src/components/Contact.tsx
import React from 'react';
import { Mail, MessageSquare, Github, Clock, Video, FileText, AlertTriangle } from 'lucide-react';

const Contact = () => {
  const escalationMatrix = [
    {
      type: 'Framework Bug',
      primaryContact: 'framework-support@example.com',
      escalationContact: 'Automation Lead: lead@example.com'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <section className="mb-12">
            <h1 className="text-3xl font-bold text-[#2D2D2D] mb-6">
              Get in Touch with Us
            </h1>
            <p className="text-gray-600">
              Have questions about the Test Automation Framework? Need support or want to contribute? 
              We're here to help! Reach out through the channels below.
            </p>
          </section>

          {/* Communication Channels */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6 flex items-center">
              <MessageSquare className="mr-2 h-6 w-6 text-[#FF6B00]" />
              Communication Channels
            </h2>

            {/* Email Support */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Mail className="mr-2 h-5 w-5 text-[#FF6B00]" />
                Email Support
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>
                  <span className="font-medium">General Inquiries:</span>{' '}
                  <a href="mailto:automation-team@example.com" className="text-[#FF6B00] hover:underline">
                    automation-team@example.com
                  </a>
                </li>
                <li>
                  <span className="font-medium">Framework Issues & Enhancements:</span>{' '}
                  <a href="mailto:framework-support@example.com" className="text-[#FF6B00] hover:underline">
                    framework-support@example.com
                  </a>
                </li>
              </ul>
            </div>

            {/* Team Communication */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4">Team Communication</h3>
              <p className="text-gray-600">
                <span className="font-medium">Teams Channel:</span> Automation Framework Support
                <span className="text-gray-500 italic ml-2">(For real-time updates & announcements)</span>
              </p>
            </div>

            {/* Azure Repo */}
            <div>
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Github className="mr-2 h-5 w-5 text-[#FF6B00]" />
                Azure Repo Repository
              </h3>
              <p className="text-gray-600 mb-4">
                <a href="#" className="text-[#FF6B00] hover:underline">Raise an issue or contribute</a>
              </p>
              <h4 className="font-medium text-gray-700 mb-2">How to report bugs?</h4>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Check existing issues before raising a new one.</li>
                <li>Provide detailed steps to reproduce, expected vs. actual results, and logs/screenshots if applicable.</li>
              </ul>
            </div>
          </section>

          {/* Escalation Matrix */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6 flex items-center">
              <AlertTriangle className="mr-2 h-6 w-6 text-[#FF6B00]" />
              Escalation Matrix
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Issue Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Primary Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Escalation Contact</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {escalationMatrix.map((item, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.type}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.primaryContact}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{item.escalationContact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Knowledge & Self-Help Resources */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Knowledge & Self-Help Resources</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Video className="h-5 w-5 text-[#FF6B00] mr-2" />
                <span className="font-medium">Video Tutorials:</span>
                <a href="#" className="text-[#FF6B00] hover:underline ml-2">Teams recording (To be added)</a>
              </div>
              <div className="flex items-center">
                <FileText className="h-5 w-5 text-[#FF6B00] mr-2" />
                <span className="font-medium">FAQs & Troubleshooting Guide:</span>
                <a href="#" className="text-[#FF6B00] hover:underline ml-2">Common Issues & Fixes (To be added)</a>
              </div>
            </div>
          </section>

          {/* Office Hours & Support Availability */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6 flex items-center">
              <Clock className="mr-2 h-6 w-6 text-[#FF6B00]" />
              Office Hours & Support Availability
            </h2>
            <h3 className="text-xl font-semibold mb-4">Automation Support Availability:</h3>
            <ul className="space-y-2 text-gray-600 mb-6">
              <li>Monday - Friday: <span className="font-medium">9 AM - 6 PM (MYT)</span></li>
              <li>Weekend & Off-Hours: <span className="font-medium">On-call support for critical issues</span></li>
            </ul>
            <p className="text-gray-600">
              <span className="font-bold">Need immediate support?</span> Contact us via Teams or Email!
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Contact;
