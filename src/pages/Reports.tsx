import React from 'react';
import { FileCheck, FileText, BarChart2, CheckCircle2, Clock, Bug } from 'lucide-react';

const Reports = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-[#2D2D2D] mb-8">Execution Reports</h1>
          
          {/* Extent Reports Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              1️⃣ What is Extent Reporting?
            </h2>
            <p className="text-gray-600 mb-6">
              Extent Reports is a reporting tool that generates graphical HTML reports for test execution.
            </p>
            
            <div className="grid gap-4 mb-8">
              <h3 className="font-semibold text-lg">Key Features:</h3>
              <ul className="space-y-3">
                {[
                  'Test Summary (Pass/Fail/Skipped)',
                  'Step-by-step execution logs',
                  'Screenshots for passed & failed tests',
                  'Graphs & Charts for better insights'
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <CheckCircle2 className="h-5 w-5 text-[#FF6B00]" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">How to View Extent Reports?</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <FileCheck className="h-5 w-5 text-[#FF6B00]" />
                  <span className="text-gray-700">Location: reports/TestExecutionReports_timestamp.html</span>
                </div>
                <div className="flex items-center space-x-2">
                  <FileCheck className="h-5 w-5 text-[#FF6B00]" />
                  <span className="text-gray-700">How to open? Double-click .html → Opens in the browser</span>
                </div>
                <div className="mb-8">
                <img 
                  src="ExecutionReport.jpg"
                  alt="Screengrab of extent report"
                  className="w-full rounded-lg shadow-md border border-gray-200"
                />
              </div>
              </div>
            </div>
          </section>

          {/* Execution Logs Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              2️⃣ What are Execution Logs?
            </h2>
            <p className="text-gray-600 mb-6">
              Logs capture real-time execution details for debugging.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <FileText className="h-5 w-5 text-[#FF6B00]" />
                <span className="font-semibold">Location: logs/execution.log</span>
              </div>
              
              <h3 className="font-semibold text-lg mb-4">What logs contain?</h3>
              <ul className="space-y-3">
                {[
                  'Test execution start & end time',
                  'Each step performed (e.g., "Clicked login button")',
                  'Errors or failures with stack trace'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <div className="h-2 w-2 rounded-full bg-[#FF6B00]" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Importance Section */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              3️⃣ Why are Extent Reports & Logs Important?
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <BarChart2 className="h-6 w-6 text-[#FF6B00]" />
                  <h3 className="font-semibold text-lg">Extent Reports</h3>
                </div>
                <p className="text-gray-600">Visual Representation of Test Results</p>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center space-x-2 mb-4">
                  <FileText className="h-6 w-6 text-[#FF6B00]" />
                  <h3 className="font-semibold text-lg">Logs</h3>
                </div>
                <p className="text-gray-600">Detailed Debugging Information</p>
              </div>
            </div>

            <p className="text-gray-600 mt-6">
              Together, they help analyze failures, debug issues, and track automation progress. 🚀
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Reports;