// src/components/Team.tsx
import React from 'react';
import { Users, Calendar, Mail, Award, GitPullRequest, MessageSquare } from 'lucide-react';

const Team = () => {
  const teamMembers = [
    {
      name: 'Sunil Kumar Sukesan',
      role: 'Automation Lead',
      responsibilities: 'Framework design, CI/CD integration, roadmap planning, improves framework features, Review PRs'
    },
    {
      name: '<Placeholder>',
      role: 'Senior Automation Engineer',
      responsibilities: 'Develops and maintains automation scripts, improves framework features'
    },
    {
      name: '<Placeholder>',
      role: 'Test Automation Engineer',
      responsibilities: 'Writes automated test cases, maintains test data'
    }
  ];

  const meetings = [
    { name: 'Daily Standup', description: 'Updates on progress and blockers' },
    { name: 'Sprint Planning', description: 'Discuss upcoming test automation tasks' },
    { name: 'Retrospective', description: 'Identify what went well and areas to improve' }
  ];

  const contributionWays = [
    'Improve existing test scripts and framework components',
    'Suggest and implement new features for the automation suite',
    'Write documentation or create knowledge-sharing sessions'
  ];

  const getStartedSteps = [
    'Set up the framework – Refer to the [Getting Started Guide]',
    'Clone repositories – Get access to Core Automation Framework',
    'Understand coding standards – Review the [Best Practices Guide]',
    'Pick up a task – Start contributing to an open issue or enhancement',
    'Engage with the team – Join discussions and attend standups'
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <section className="mb-12">
            <h1 className="text-3xl font-bold text-[#2D2D2D] mb-6">
              <Users className="inline-block mr-2 h-8 w-8 text-[#FF6B00]" />
              Meet Our Test Automation Team
            </h1>
            <p className="text-gray-600">
              Our test automation team is responsible for designing, developing, and maintaining 
              a scalable automation framework that ensures high-quality software delivery. We focus 
              on test reliability, execution efficiency, and CI/CD integration to improve the overall 
              testing process.
            </p>
          </section>

          {/* Team Structure */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              Team Structure & Roles
            </h2>
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Responsibilities</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {teamMembers.map((member, index) => (
                    <tr key={index}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.name}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{member.role}</td>
                      <td className="px-6 py-4 text-sm text-gray-900">{member.responsibilities}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Collaboration */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              <MessageSquare className="inline-block mr-2 h-6 w-6 text-[#FF6B00]" />
              How We Collaborate
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">
                <GitPullRequest className="inline-block mr-2 h-5 w-5 text-[#FF6B00]" />
                Code Reviews
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Every PR must be reviewed by at least one senior team member before merging</li>
                <li>Follow best practices: write meaningful commit messages, add comments, ensure test stability</li>
              </ul>
            </div>

            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Communication Channels</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Teams Channel – Daily updates, discussions, and issue resolution</li>
                <li>Azure ADO – Task tracking and sprint planning</li>
                <li>Azure Repo Issues – Raise issues/bugs and track progress</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">
                <Calendar className="inline-block mr-2 h-5 w-5 text-[#FF6B00]" />
                Team Meetings
              </h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {meetings.map((meeting, index) => (
                  <li key={index}>
                    <span className="font-medium">{meeting.name}</span> – {meeting.description}
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Contribution & Recognition */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              <Award className="inline-block mr-2 h-6 w-6 text-[#FF6B00]" />
              Contribution & Recognition
            </h2>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">Ways to contribute:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                {contributionWays.map((way, index) => (
                  <li key={index}>{way}</li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Recognition & Acknowledgment:</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-600">
                <li>Best contributions are highlighted in monthly meetings</li>
                <li>Team members with exceptional contributions receive awards/recognition</li>
              </ul>
            </div>
          </section>

          {/* Getting Started */}
          <section className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              How to Get Started as a New Team Member
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-gray-600">
              {getStartedSteps.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ul>
          </section>

          {/* Contact */}
          <section className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-2xl font-bold text-[#2D2D2D] mb-6">
              <Mail className="inline-block mr-2 h-6 w-6 text-[#FF6B00]" />
              Contact & Support
            </h2>
            <p className="text-gray-600">
              For questions or discussions: <a href="mailto:automation-team@example.com" className="text-[#FF6B00] hover:underline">automation-team@example.com</a>
            </p>
          </section>

        </div>
      </div>
    </div>
  );
};

export default Team;
