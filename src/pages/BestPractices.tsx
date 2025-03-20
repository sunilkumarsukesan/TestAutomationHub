import React from 'react';
import { Check, AlertCircle, GitBranch, Database, FileCode, BookOpen } from 'lucide-react';

const BestPractices = () => {
  const codeBlockStyle = "bg-gray-800 text-white p-4 rounded-md my-4 font-mono text-sm overflow-x-auto";
  
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-[#2D2D2D] mb-8">
            Best Practices for Using Our Automation Framework
          </h1>
          
          <p className="text-gray-600 mb-8">
            To maintain a <strong>scalable, maintainable, and efficient</strong> automation framework, 
            follow these best practices while writing test scripts, managing framework components, and 
            structuring automation tests.
          </p>

          {/* Framework Usage Best Practices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              1️⃣ Framework Usage Best Practices
            </h2>

            {/* XPath & Locators */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Check className="h-5 w-5 text-[#FF6B00] mr-2" />
                Use Correct XPath & Locators
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Why?</strong> Incorrect or brittle XPath can cause test failures when UI changes.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold mb-2">Best Practices:</h4>
                <ul className="list-disc pl-6 space-y-2 text-gray-600">
                  <li>Prefer unique locators (ID, NAME, CSS) over XPath when possible</li>
                  <li>Avoid absolute XPath—use relative XPath instead</li>
                  <li>Use dynamic XPath with contains(), starts-with(), or normalize-space()</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold text-red-500 mb-2">❌ Bad Example:</p>
                <pre className={codeBlockStyle}>
                  driver.findElement(By.xpath("/html/body/div[3]/button")).click();  // Hard to maintain
                </pre>
                <p className="font-semibold text-green-500 mb-2">✅ Good Example:</p>
                <pre className={codeBlockStyle}>
                  locateElement(Locators.XPATH, "//button[contains(text(),'Submit')]");
                </pre>
              </div>
            </div>

            {/* Wrapper Methods */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Check className="h-5 w-5 text-[#FF6B00] mr-2" />
                Use Wrapper Methods Instead of Direct WebDriver Calls
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Why?</strong> Using framework-specific wrappers ensures consistent behavior and better debugging.
              </p>
              <div>
                <p className="font-semibold text-red-500 mb-2">❌ Bad Example:</p>
                <pre className={codeBlockStyle}>
                  driver.findElement(By.id("username")).sendKeys("admin");
                </pre>
                <p className="font-semibold text-green-500 mb-2">✅ Good Example:</p>
                <pre className={codeBlockStyle}>
                  clearAndType(Locators.ID, "username", "admin");
                </pre>
              </div>
            </div>

            {/* Git Process */}
            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GitBranch className="h-5 w-5 text-[#FF6B00] mr-2" />
                Follow Correct Git Process
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Why?</strong> A structured Git process ensures code stability and version control clarity.
              </p>
              <pre className={codeBlockStyle}>
                {`git checkout develop
git pull origin develop
git checkout -b feature/new-test-case
git add .
git commit -m "Added new login test case"
git push origin feature/new-test-case`}
              </pre>
            </div>
          </section>

          {/* Cucumber BDD Best Practices */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              2️⃣ Cucumber BDD Best Practices
            </h2>

            <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <BookOpen className="h-5 w-5 text-[#FF6B00] mr-2" />
                Keep Scenarios Simple & Actionable
              </h3>
              <div>
                <p className="font-semibold text-red-500 mb-2">❌ Bad Example:</p>
                <pre className={codeBlockStyle}>
                  {`Scenario: Login to the application
  Given the user opens Chrome browser
  And the user navigates to the login page
  When the user enters "admin" as username
  And the user enters "password123" as password
  And the user clicks on the login button
  Then the user should be logged in`}
                </pre>
                <p className="font-semibold text-green-500 mb-2">✅ Good Example:</p>
                <pre className={codeBlockStyle}>
                  {`Scenario: Successful login
  Given the user is on the login page
  When they enter valid credentials
  Then they should be redirected to the dashboard`}
                </pre>
              </div>
            </div>
          </section>

          {/* Coding Standards */}
          <section>
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              3️⃣ Coding Standards & Best Practices
            </h2>

            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileCode className="h-5 w-5 text-[#FF6B00] mr-2" />
                Follow Proper Exception Handling
              </h3>
              <p className="text-gray-600 mb-4">
                <strong>Why?</strong> Catching and logging exceptions helps with debugging.
              </p>
              <pre className={codeBlockStyle}>
                {`try {
    clickAndEnter(Locators.ID, "submit"));
} catch (NoSuchElementException e) {
    logFailure("Submit button not found!", e);
}`}
              </pre>
            </div>
          </section>

          {/* Conclusion */}
          <section className="mt-12 bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-xl font-bold text-[#2D2D2D] mb-4">Conclusion</h2>
            <p className="text-gray-600">
              Following these best practices will ensure that our <strong>Core Automation Framework</strong> remains 
              <strong> scalable, maintainable, and efficient</strong>. 🚀
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default BestPractices;