// src/components/About/TeamSection.js
import React from 'react';

const TeamSection = () => (
  <div className="bg-[#CBD2A4] text-[#4A4947] py-16 px-8 font-sans flex flex-col items-center space-y-8">
    <h2 className="text-4xl font-bold mb-6 text-center">Meet the Team</h2>
    <p className="text-lg text-center max-w-2xl mb-12">
      Our team is comprised of talented and dedicated professionals who specialize in various aspects of hairstyling, color, and customer service. Each member brings their unique expertise, ensuring every client feels cared for and inspired.
    </p>

    {/* Team Members */}
    <div className="grid gap-10 md:grid-cols-3 text-center max-w-6xl">
      {/* Team Member 1 */}
      <div className="bg-[#9A7E6F] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <img
          src="/images/team-member-1.jpg"
          alt="Team Member 1"
          className="w-48 h-48 rounded-lg object-cover shadow-md"
        />
        <h3 className="text-2xl font-semibold">Alex Johnson</h3>
        <p className="text-md font-medium text-[#B17457]">Master Stylist & Founder</p>
        <p className="text-sm text-[#4A4947]">
          Alex is the creative visionary behind AYEONE, bringing over 15 years of experience in precision cuts and high-fashion styling.
        </p>
      </div>

      {/* Team Member 2 */}
      <div className="bg-[#9A7E6F] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <img
          src="/images/team-member-2.jpg"
          alt="Team Member 2"
          className="w-48 h-48 rounded-lg object-cover shadow-md"
        />
        <h3 className="text-2xl font-semibold">Taylor Reed</h3>
        <p className="text-md font-medium text-[#B17457]">Color Specialist</p>
        <p className="text-sm text-[#4A4947]">
          Taylor is our expert in color transformations, from natural highlights to bold, vibrant colors that bring out the best in every client.
        </p>
      </div>

      {/* Team Member 3 */}
      <div className="bg-[#9A7E6F] p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
        <img
          src="/images/team-member-3.jpg"
          alt="Team Member 3"
          className="w-48 h-48 rounded-lg object-cover shadow-md"
        />
        <h3 className="text-2xl font-semibold">Jordan Kim</h3>
        <p className="text-md font-medium text-[#B17457]">Customer Experience Manager</p>
        <p className="text-sm text-[#4A4947]">
          Jordan ensures every client has a memorable experience, from the moment they walk in the door to the final reveal.
        </p>
      </div>
    </div>
  </div>
);

export default TeamSection;
