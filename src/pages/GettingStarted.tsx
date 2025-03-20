import React from 'react';
import { Terminal, Download, CheckCircle2, HelpCircle } from 'lucide-react';

const GettingStarted = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#2D2D2D] mb-8">Getting Started with Test Automation 🚀</h1>
          <p className="text-lg text-gray-600 mb-12">Welcome to the Test Automation Framework! Follow this step-by-step guide to set up your environment and start running tests.</p>

          {/* Prerequisites Section */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">1️⃣ Prerequisites</h2>
            
            <h3 className="text-xl font-semibold mb-4">Required Software</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tool</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Version</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Download</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {[
                    { tool: 'JDK', version: '11+', link: 'https://adoptopenjdk.net/' },
                    { tool: 'IntelliJ IDEA', version: 'Latest', link: 'https://www.jetbrains.com/idea/download/' },
                    { tool: 'Maven', version: '3.6+', link: 'https://maven.apache.org/download.cgi' },
                    { tool: 'Git', version: 'Latest', link: 'https://git-scm.com/downloads' }
                  ].map((item) => (
                    <tr key={item.tool}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{item.tool}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{item.version}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-[#FF6B00] hover:text-[#FF6B00]/80 inline-flex items-center">
                          <Download className="h-4 w-4 mr-1" />
                          Download
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-4">Setting Up Environment Variables</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Windows</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <pre className="text-white overflow-x-auto">
                      <code>JAVA_HOME = C:\Program Files\Java\jdk-11{'\n'}MAVEN_HOME = C:\apache-maven-3.6</code>
                    </pre>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-lg mb-2">Mac/Linux</h4>
                  <div className="bg-gray-800 rounded-lg p-4">
                    <pre className="text-white overflow-x-auto">
                      <code>export JAVA_HOME=$(/usr/libexec/java_home -v 11){'\n'}export MAVEN_HOME=/opt/apache-maven-3.6{'\n'}export PATH=$JAVA_HOME/bin:$MAVEN_HOME/bin:$PATH</code>
                    </pre>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Repository Setup */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">2️⃣ Clone the Repositories</h2>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <pre className="text-white overflow-x-auto">
                <code>git clone &lt;core-framework-repo-url&gt;{'\n'}git clone &lt;test-automation-suite-repo-url&gt;</code>
              </pre>
            </div>
          </section>

          {/* Build & Install */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">3️⃣ Build & Install Core Framework</h2>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <pre className="text-white overflow-x-auto">
                <code>cd core-framework{'\n'}mvn clean install</code>
              </pre>
            </div>
          </section>

          {/* Run Tests */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">4️⃣ Run Smoke Tests</h2>
            <div className="bg-gray-800 rounded-lg p-4 mb-4">
              <pre className="text-white overflow-x-auto">
                <code>cd ../test-automation-suite{'\n'}mvn clean test -Dtags=@smoke</code>
              </pre>
            </div>
          </section>

          {/* Troubleshooting */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">5️⃣ Troubleshooting & FAQs</h2>
            <div className="space-y-6">
              {[
                {
                  issue: '"mvn command not found"',
                  solution: 'Ensure Maven is installed and the MAVEN_HOME/bin path is added to system variables.'
                },
                {
                  issue: 'Tests failing due to missing dependencies',
                  solution: 'Run: mvn clean install -U'
                },
                {
                  issue: 'WebDriver version mismatch',
                  solution: 'Check if the correct WebDriver version is installed.'
                }
              ].map((item, index) => (
                <div key={index} className="border-l-4 border-[#FF6B00] pl-4">
                  <h3 className="font-semibold text-lg mb-2">Issue: {item.issue}</h3>
                  <p className="text-gray-600">{item.solution}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Next Steps */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">Next Steps</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'Framework Architecture', icon: <Terminal className="h-6 w-6" /> },
                { title: 'How to Write Tests', icon: <CheckCircle2 className="h-6 w-6" /> },
                { title: 'Best Practices', icon: <HelpCircle className="h-6 w-6" /> }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 rounded-lg bg-gray-50">
                  <div className="text-[#FF6B00]">{item.icon}</div>
                  <span className="font-medium">{item.title}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

export default GettingStarted;