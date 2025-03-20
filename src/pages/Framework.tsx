import React from 'react';
import { 
  Layers, 
  FolderTree, 
  Code2, 
  Settings, 
  Database, 
  TestTube, 
  FileCheck, 
  CheckCircle2,
  Rocket,
  BrainCircuit
} from 'lucide-react';

const Framework = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-[#2D2D2D] mb-8">Core Automation Framework Architecture</h1>

          {/* Introduction */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">1️⃣ Introduction</h2>
            <p className="text-gray-600 mb-6">
              The Core Automation Framework is a scalable, modular, and robust test automation solution designed for enterprise-level testing needs.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-lg">Key Features:</h3>
                <ul className="space-y-2">
                  {[
                    'Web UI Automation using Selenium',
                    'API Testing using Rest Assured',
                    'BDD with Cucumber',
                    'Parallel Execution & Cross-Browser Testing',
                    'Advanced Reporting with Extent Reports',
                    'CI/CD Readiness'
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <CheckCircle2 className="h-5 w-5 text-[#FF6B00]" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* High-Level Architecture */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">2️⃣ High-Level Framework Architecture</h2>
            <div className="space-y-6">
              <div className="mb-8">
                <img 
                  src="Core Automation Framework Architecture.png"
                  alt="Framework Architecture Diagram"
                  className="w-full rounded-lg shadow-md border border-gray-200"
                />
              </div>
              <div className="grid gap-6">
                {[
                  {
                    title: 'Framework Layer',
                    description: 'Core components (Base classes, Config Management, WebDriver setup, Reporting)',
                    icon: <Layers className="h-6 w-6 text-[#FF6B00]" />
                  },
                  {
                    title: 'Test Automation Layer',
                    description: 'BDD-based feature files, step definitions, and test execution logic',
                    icon: <TestTube className="h-6 w-6 text-[#FF6B00]" />
                  },
                  {
                    title: 'Execution & Reporting',
                    description: 'Browser interactions, parallel execution, and reporting integration',
                    icon: <FileCheck className="h-6 w-6 text-[#FF6B00]" />
                  }
                ].map((layer) => (
                  <div key={layer.title} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    {layer.icon}
                    <div>
                      <h3 className="font-semibold text-lg">{layer.title}</h3>
                      <p className="text-gray-600">{layer.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Folder Structure */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">3️⃣ Folder Structure</h2>
            <div className="bg-gray-800 rounded-lg p-6 font-mono text-sm text-white">
              <pre className="whitespace-pre-wrap">
{`📂 CoreAutomationFramework/
   ├── 📁 src/main/java/com/automation/core/
   │   ├── 📂 api/         → API automation utilities
   │   ├── 📂 base/        → Base test execution setup
   │   ├── 📂 config/      → Configuration management
   │   ├── 📂 design/      → Custom framework design patterns
   │   ├── 📂 drivers/     → WebDriver handling
   │   ├── 📂 hooks/       → Cucumber test setup & teardown
   │   ├── 📂 listeners/   → TestNG execution listeners
   │   ├── 📂 reporting/   → Extent Reports & logging
   │   ├── 📂 testData/    → Test data storage
   │   ├── 📂 utils/       → Generic utilities
   │   └── 📂 web/         → Web automation actions
   │
   ├── 📁 src/test/java/com/automation/tests/
   ├── 📄 pom.xml
   └── 📄 README.md`}
              </pre>
            </div>
          </section>

          {/* Framework Layer */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">4️⃣ Framework Layer (Core Components)</h2>
            <div className="space-y-8">
              {[
                {
                  title: 'Base Module',
                  path: 'com.automation.core.base',
                  components: ['BaseTest.java', 'BasePage.java'],
                  description: 'Handles test setup & teardown, provides reusable WebDriver actions',
                  icon: <Code2 />
                },
                {
                  title: 'Config Module',
                  path: 'com.automation.core.config',
                  components: ['ConfigManager.java'],
                  description: 'Reads properties from config.properties, handles environment-based configuration',
                  icon: <Settings />
                },
                {
                  title: 'WebDriver Management',
                  path: 'com.automation.core.drivers',
                  components: ['DriverManager.java'],
                  description: 'Initializes browser drivers, supports Chrome, Edge, Firefox',
                  icon: <BrainCircuit />
                }
              ].map((module) => (
                <div key={module.title} className="border-l-4 border-[#FF6B00] pl-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-[#FF6B00]">{module.icon}</div>
                    <h3 className="font-semibold text-lg">{module.title}</h3>
                  </div>
                  <code className="text-sm text-gray-600 block mb-2">{module.path}</code>
                  <ul className="list-disc list-inside text-gray-600 mb-2">
                    {module.components.map((component) => (
                      <li key={component}>{component}</li>
                    ))}
                  </ul>
                  <p className="text-gray-600">{module.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Test Automation Layer */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">5️⃣ Test Automation Layer</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-4">Cucumber BDD Structure</h3>
                <pre className="bg-gray-800 text-white p-4 rounded-lg font-mono text-sm">
{`📂 Test Automation Suite
   └── 📁 src/test/java/com/automation/tests/
       ├── 📂 features/  → BDD Scenarios
       ├── 📂 steps/     → Step Definitions
       ├── 📂 pages/     → Page Object Model
       └── 📄 TestRunner.java`}
                </pre>
              </div>
            </div>
          </section>

          {/* Execution & Reporting */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">6️⃣ Execution & Reporting</h2>
            
            <div className="space-y-8">
              {/* Running Tests */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Running Tests</h3>
                <div className="space-y-4">
                  {[
                    {
                      title: 'TestNG Execution',
                      command: 'mvn test'
                    },
                    {
                      title: 'Cucumber Execution',
                      command: 'mvn clean test -Dtags=@smoke'
                    },
                    {
                      title: 'Parallel Execution',
                      command: 'Set @Dataprovider(parallel=true) in runner class'
                    }
                  ].map((item) => (
                    <div key={item.title} className="bg-gray-50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">{item.title}</h4>
                      <pre className="bg-gray-800 text-white p-3 rounded font-mono text-sm">
                        {item.command}
                      </pre>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="bg-white rounded-lg shadow-sm p-8 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">7️⃣ Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Scalability → Modular architecture for growth',
                'Reusability → Common test components reduce redundancy',
                'Cross-Browser Testing → Supports Chrome, Edge, Firefox',
                'Parallel Execution → Faster test completion',
                'CI/CD Integration → Compatible with Jenkins, GitHub Actions',
                'Advanced Reporting → Extent Reports for structured execution logs'
              ].map((benefit, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle2 className="h-5 w-5 text-[#FF6B00] mt-1" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Future Enhancements */}
          <section className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">8️⃣ Future Enhancements</h2>
            <div className="space-y-4">
              {[
                'Automated dispatch of execution reports using a dedicated mailbox',
                'AI-driven Test Healing and Failure Analysis',
                'Dockerized Test Execution for Cloud Readiness'
              ].map((enhancement, index) => (
                <div key={index} className="flex items-center space-x-3 bg-gray-50 p-4 rounded-lg">
                  <Rocket className="h-5 w-5 text-[#FF6B00]" />
                  <span className="text-gray-700">{enhancement}</span>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Framework;