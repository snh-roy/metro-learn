import React, { useState } from 'react';
import { MapPin, Briefcase, Award, TrendingUp, Users, Building2, DollarSign, Target, CheckCircle, Search, Filter, Map, Network, FileText, Star, Clock, Plus } from 'lucide-react';

const MetroLearnNetworkWireframe = () => {
  const [activeTab, setActiveTab] = useState('student');
  
  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold mb-2">MetroLearn Network Platform</h1>
          <p className="text-gray-600 mb-4">Cross-Institutional Opportunity Matching System - Northeastern Metro Regions</p>
          
          <div className="flex gap-4">
            <button
              onClick={() => setActiveTab('student')}
              className={`flex-1 py-4 rounded-xl font-bold text-lg ${
                activeTab === 'student' 
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Student Portal
            </button>
            <button
              onClick={() => setActiveTab('teacher')}
              className={`flex-1 py-4 rounded-xl font-bold text-lg ${
                activeTab === 'teacher' 
                  ? 'bg-gradient-to-r from-green-600 to-teal-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Teacher Portal
            </button>
            <button
              onClick={() => setActiveTab('admin')}
              className={`flex-1 py-4 rounded-xl font-bold text-lg ${
                activeTab === 'admin' 
                  ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white shadow-lg' 
                  : 'bg-gray-100 text-gray-700'
              }`}
            >
              Administrative Portal
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {activeTab === 'student' && (
            <div className="space-y-6">
              <div className="border-4 border-gray-800 rounded-lg p-6 bg-gray-50 space-y-6">
                {/* Top Navigation Bar */}
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Marcus Johnson</h3>
                    <p className="text-sm opacity-90">Lincoln High School Boston MA</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <div className="text-xs">Skills Built</div>
                      <div className="font-bold">7 Certifications</div>
                    </div>
                    <div className="w-12 h-12 bg-white/30 rounded-full"></div>
                  </div>
                </div>

                {/* Search Bar */}
                <div className="bg-white border-4 border-blue-300 rounded-xl p-6">
                  <h4 className="font-bold text-lg mb-3">Search for Disciplines Programs</h4>
                  <div className="flex gap-3">
                    <div className="flex-1 border-2 border-gray-300 rounded-lg p-3 flex items-center gap-2">
                      <Search className="w-5 h-5 text-gray-400" />
                      <input 
                        type="text" 
                        placeholder="e.g. Advanced Audio Engineering Biomedical Engineering Culinary Arts"
                        className="flex-1 outline-none"
                      />
                    </div>
                    <div className="border-2 border-gray-300 rounded-lg p-3 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-gray-400" />
                      <select className="outline-none">
                        <option>10 miles</option>
                        <option>25 miles</option>
                        <option>50 miles</option>
                      </select>
                    </div>
                    <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-bold">
                      Search Network
                    </button>
                  </div>
                </div>

                {/* Search Results - Available Programs */}
                <div className="bg-white border-4 border-green-300 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-xl">Programs Found in Your Network</h4>
                    <div className="text-sm text-gray-600">Showing results within 10 miles</div>
                  </div>

                  <div className="space-y-4">
                    {/* Result 1 */}
                    <div className="border-2 border-green-200 bg-green-50 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-green-400 rounded-lg flex items-center justify-center">
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h5 className="font-bold text-lg">Advanced Audio Engineering Certificate</h5>
                            <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-bold">
                              AVAILABLE
                            </span>
                          </div>
                          <div className="text-sm space-y-1 mb-3">
                            <div className="flex items-center gap-2 text-gray-700">
                              <Building2 className="w-4 h-4" />
                              <span className="font-semibold">Berklee College of Music Community Program</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <MapPin className="w-4 h-4" />
                              <span>3.2 miles from Lincoln High School</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <Clock className="w-4 h-4" />
                              <span>Evening classes available Tue Thu 6-8 PM</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                              Request Enrollment
                            </button>
                            <button className="border-2 border-green-600 text-green-600 px-4 py-2 rounded-lg font-semibold text-sm">
                              View Details
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                            Network Partner
                          </div>
                          <div className="text-xs text-gray-600">Commute: 12 min</div>
                        </div>
                      </div>
                    </div>

                    {/* Result 2 */}
                    <div className="border-2 border-blue-200 bg-blue-50 rounded-lg p-4">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-blue-400 rounded-lg flex items-center justify-center">
                          <Building2 className="w-8 h-8 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <h5 className="font-bold text-lg">Music Production Bootcamp</h5>
                            <span className="bg-blue-200 text-blue-800 px-3 py-1 rounded-full text-xs font-bold">
                              SEATS AVAILABLE
                            </span>
                          </div>
                          <div className="text-sm space-y-1 mb-3">
                            <div className="flex items-center gap-2 text-gray-700">
                              <Building2 className="w-4 h-4" />
                              <span className="font-semibold">Boston Media Arts Center</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <MapPin className="w-4 h-4" />
                              <span>5.7 miles from Lincoln High School</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-700">
                              <Clock className="w-4 h-4" />
                              <span>Weekend program Sat 9 AM - 3 PM</span>
                            </div>
                          </div>
                          <div className="flex gap-2">
                            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                              Request Info
                            </button>
                            <button className="border-2 border-blue-600 text-blue-600 px-4 py-2 rounded-lg font-semibold text-sm">
                              View Details
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-xs font-bold mb-2">
                            Scholarship Available
                          </div>
                          <div className="text-xs text-gray-600">Commute: 22 min</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills Analytics Section */}
                <div className="bg-white border-4 border-purple-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-purple-600" />
                    <h4 className="font-bold text-xl">Your Skills Analytics</h4>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-4 text-center">
                      <Award className="w-10 h-10 text-purple-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">7</div>
                      <div className="text-sm text-gray-600">Certifications Earned</div>
                    </div>
                    <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-4 text-center">
                      <Target className="w-10 h-10 text-blue-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">85%</div>
                      <div className="text-sm text-gray-600">Skill Proficiency</div>
                    </div>
                    <div className="bg-green-50 border-2 border-green-200 rounded-lg p-4 text-center">
                      <Briefcase className="w-10 h-10 text-green-600 mx-auto mb-2" />
                      <div className="text-2xl font-bold">12</div>
                      <div className="text-sm text-gray-600">Matched Opportunities</div>
                    </div>
                  </div>

                  {/* Request Teacher Referral Section */}
                  <div className="bg-gradient-to-r from-teal-50 to-cyan-50 border-2 border-teal-300 rounded-lg p-4 mb-4">
                    <div className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Users className="w-6 h-6 text-teal-600" />
                      Request Teacher/Mentor Referral
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Connect with a teacher or mentor who knows your work and can recommend you to employers or industry experts
                    </p>
                    
                    <div className="bg-white p-4 rounded-lg border-2 border-teal-200 mb-3">
                      <div className="font-semibold mb-3 text-sm">Select someone who can vouch for you:</div>
                      <div className="space-y-2">
                        <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 cursor-pointer">
                          <input type="radio" name="referrer" className="w-4 h-4" />
                          <div className="flex-1">
                            <div className="font-semibold">Ms Rodriguez</div>
                            <div className="text-xs text-gray-600">Physics Teacher knows your audio engineering work</div>
                          </div>
                        </label>
                        
                        <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 cursor-pointer">
                          <input type="radio" name="referrer" className="w-4 h-4" />
                          <div className="flex-1">
                            <div className="font-semibold">Mr Thompson</div>
                            <div className="text-xs text-gray-600">Music Teacher mentored you in production</div>
                          </div>
                        </label>

                        <label className="flex items-center gap-3 p-3 border-2 border-gray-200 rounded-lg hover:border-teal-400 hover:bg-teal-50 cursor-pointer">
                          <input type="radio" name="referrer" className="w-4 h-4" />
                          <div className="flex-1">
                            <div className="font-semibold">Sarah Chen (Mentor)</div>
                            <div className="text-xs text-gray-600">Audio Engineer previously mentored you</div>
                          </div>
                        </label>
                      </div>
                    </div>

                    <div className="bg-white p-3 rounded-lg border-2 border-teal-200 mb-3">
                      <label className="block font-semibold mb-2 text-sm">What opportunity are you interested in?</label>
                      <textarea 
                        className="w-full border-2 border-gray-300 rounded-lg p-2 text-sm h-20"
                        placeholder="e.g. Audio Engineering Internship at WBOS Radio Station"
                      ></textarea>
                    </div>

                    <button className="bg-teal-600 text-white px-6 py-3 rounded-lg font-bold w-full">
                      Request Referral
                    </button>
                  </div>

                  <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border-2 border-orange-300 rounded-lg p-4">
                    <div className="font-bold text-lg mb-3 flex items-center gap-2">
                      <Briefcase className="w-6 h-6 text-orange-600" />
                      AI-Recommended Internships Test Your Path
                    </div>
                    <div className="space-y-3">
                      <div className="bg-white p-3 rounded-lg border-2 border-orange-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">Audio Engineering Intern</div>
                            <div className="text-sm text-gray-600">WBOS Radio Station 2.1 miles away</div>
                            <div className="text-xs text-green-600 font-semibold mt-1">
                              Match: 92% based on your Audio Physics cert
                            </div>
                          </div>
                          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                            Apply Now
                          </button>
                        </div>
                      </div>

                      <div className="bg-white p-3 rounded-lg border-2 border-orange-200">
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="font-semibold">Music Production Assistant</div>
                            <div className="text-sm text-gray-600">Local Recording Studio 4.5 miles</div>
                            <div className="text-xs text-green-600 font-semibold mt-1">
                              Match: 88% Test if production is your path
                            </div>
                          </div>
                          <button className="bg-orange-500 text-white px-4 py-2 rounded-lg font-semibold text-sm">
                            Apply Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skill Obsolescence Prevention */}
                <div className="bg-white border-4 border-red-300 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp className="w-8 h-8 text-red-600" />
                    <h4 className="font-bold text-xl text-red-900">Skill Enhancement Suggestions</h4>
                  </div>
                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-gray-700 mb-3">
                      Based on your current skills and industry trends we recommend exploring these areas to keep your options open:
                    </p>
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 p-2 bg-white rounded border-2 border-red-200">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        <span className="font-semibold text-sm">Digital Audio Workstation DAW Software</span>
                        <span className="ml-auto text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">High Demand</span>
                      </div>
                      <div className="flex items-center gap-2 p-2 bg-white rounded border-2 border-red-200">
                        <CheckCircle className="w-5 h-5 text-red-600" />
                        <span className="font-semibold text-sm">Live Sound Engineering</span>
                        <span className="ml-auto text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full">Growing Field</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'teacher' && (
            <div className="space-y-6">
              <div className="border-4 border-gray-800 rounded-lg p-6 bg-gray-50 space-y-6">
                {/* Top Nav */}
                <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Ms Rodriguez</h3>
                    <p className="text-sm opacity-90">Physics Teacher Lincoln High School</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/20 px-4 py-2 rounded-lg">
                      <div className="text-xs">Successful Referrals</div>
                      <div className="font-bold">34 Students Placed</div>
                    </div>
                    <div className="w-12 h-12 bg-white/30 rounded-full"></div>
                  </div>
                </div>

                {/* Student List for Recommendation */}
                <div className="bg-white border-4 border-green-300 rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-4">Students Ready for Industry Referral</h4>
                  <p className="text-sm text-gray-600 mb-4">Students who meet academic expectations show excellent attitude and are excelling in their track</p>

                  <div className="space-y-3">
                    {/* Student 1 */}
                    <div className="border-2 border-green-200 bg-green-50 rounded-lg p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          MJ
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg">Marcus Johnson</div>
                          <div className="text-sm text-gray-600">Grade 9 Music Production Track</div>
                          <div className="flex gap-2 mt-2">
                            <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-bold">A Average</span>
                            <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-bold">Excellent Attitude</span>
                            <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-bold">7 Certifications</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                            Write Recommendation
                          </button>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                            Refer to Industry
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Student 2 */}
                    <div className="border-2 border-blue-200 bg-blue-50 rounded-lg p-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold text-xl">
                          TC
                        </div>
                        <div className="flex-1">
                          <div className="font-bold text-lg">Tyler Chen</div>
                          <div className="text-sm text-gray-600">Grade 10 Game Development Track</div>
                          <div className="flex gap-2 mt-2">
                            <span className="bg-green-200 text-green-800 px-2 py-1 rounded text-xs font-bold">A- Average</span>
                            <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-xs font-bold">Strong Work Ethic</span>
                            <span className="bg-purple-200 text-purple-800 px-2 py-1 rounded text-xs font-bold">9 Certifications</span>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <button className="bg-green-600 text-white px-4 py-2 rounded-lg font-semibold">
                            Write Recommendation
                          </button>
                          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold">
                            Refer to Industry
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Industry Network Connections */}
                <div className="bg-white border-4 border-blue-300 rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <Network className="w-6 h-6" />
                    Your Industry Network Connections
                  </h4>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-purple-400 rounded-full flex items-center justify-center text-white font-bold">
                          SC
                        </div>
                        <div>
                          <div className="font-bold">Sarah Chen</div>
                          <div className="text-xs text-gray-600">Audio Engineer WBOS Radio</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">Accepting student referrals for internships</div>
                      <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-semibold inline-block">
                        3 students placed
                      </div>
                    </div>

                    <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-blue-400 hover:bg-blue-50 transition-all cursor-pointer">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold">
                          DM
                        </div>
                        <div>
                          <div className="font-bold">David Martinez</div>
                          <div className="text-xs text-gray-600">Sr Software Engineer Google</div>
                        </div>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">Mentoring computer science students</div>
                      <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs font-semibold inline-block">
                        5 students mentored
                      </div>
                    </div>
                  </div>
                </div>

                {/* Recommendation Writing Interface */}
                <div className="bg-white border-4 border-purple-300 rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-4">Write Recommendation for Marcus Johnson</h4>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block font-semibold mb-2 text-sm">Refer to:</label>
                      <select className="w-full border-2 border-gray-300 rounded-lg p-3">
                        <option>Sarah Chen Audio Engineer WBOS Radio</option>
                        <option>David Martinez Sr Software Engineer Google</option>
                        <option>Local Recording Studio Owner</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-semibold mb-2 text-sm">Student Strengths Check all that apply:</label>
                      <div className="grid grid-cols-3 gap-2">
                        <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded">
                          <input type="checkbox" className="w-4 h-4" />
                          <span className="text-sm">Technical Skills</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded">
                          <input type="checkbox" className="w-4 h-4" />
                          <span className="text-sm">Work Ethic</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded">
                          <input type="checkbox" className="w-4 h-4" />
                          <span className="text-sm">Creativity</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded">
                          <input type="checkbox" className="w-4 h-4" />
                          <span className="text-sm">Leadership</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded">
                          <input type="checkbox" className="w-4 h-4" />
                          <span className="text-sm">Collaboration</span>
                        </label>
                        <label className="flex items-center gap-2 p-2 border-2 border-gray-200 rounded">
                          <input type="checkbox" className="w-4 h-4" />
                          <span className="text-sm">Problem Solving</span>
                        </label>
                      </div>
                    </div>

                    <div>
                      <label className="block font-semibold mb-2 text-sm">Your Recommendation:</label>
                      <textarea 
                        className="w-full border-2 border-gray-300 rounded-lg p-3 h-32"
                        placeholder="Describe why this student would be an excellent fit for this opportunity..."
                      ></textarea>
                    </div>

                    <div className="flex gap-3">
                      <button className="bg-green-600 text-white px-6 py-3 rounded-lg font-bold">
                        Send Recommendation
                      </button>
                      <button className="border-2 border-gray-300 px-6 py-3 rounded-lg font-bold">
                        Save Draft
                      </button>
                    </div>
                  </div>
                </div>

                {/* Referral Success Tracker */}
                <div className="bg-gradient-to-r from-green-100 to-blue-100 border-2 border-green-300 rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-4">Your Referral Impact</h4>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-green-600">34</div>
                      <div className="text-sm text-gray-600">Total Referrals</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-blue-600">28</div>
                      <div className="text-sm text-gray-600">Students Placed</div>
                    </div>
                    <div className="bg-white p-4 rounded-lg text-center">
                      <div className="text-3xl font-bold text-purple-600">82%</div>
                      <div className="text-sm text-gray-600">Success Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'admin' && (
            <div className="space-y-6">
              <div className="border-4 border-gray-800 rounded-lg p-6 bg-gray-50 space-y-6">
                <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-xl flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">Boston Metro Education Network</h3>
                    <p className="text-sm opacity-90">District Administrator Dashboard</p>
                  </div>
                  <div className="flex gap-4">
                    <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
                      <div className="text-xs">Network Institutions</div>
                      <div className="font-bold text-lg">47</div>
                    </div>
                    <div className="bg-white/20 px-4 py-2 rounded-lg text-center">
                      <div className="text-xs">Total Students</div>
                      <div className="font-bold text-lg">12,847</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-4">
                  <div className="bg-blue-500 text-white p-4 rounded-xl">
                    <Building2 className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold">47</div>
                    <div className="text-sm">Institutions in Network</div>
                  </div>
                  <div className="bg-green-500 text-white p-4 rounded-xl">
                    <Award className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold">234</div>
                    <div className="text-sm">Programs Shared</div>
                  </div>
                  <div className="bg-purple-500 text-white p-4 rounded-xl">
                    <DollarSign className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold">$4.2M</div>
                    <div className="text-sm">Annual Savings</div>
                  </div>
                  <div className="bg-orange-500 text-white p-4 rounded-xl">
                    <Users className="w-8 h-8 mb-2" />
                    <div className="text-3xl font-bold">1,234</div>
                    <div className="text-sm">Cross-Enrollments</div>
                  </div>
                </div>

                <div className="bg-white border-4 border-blue-300 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="font-bold text-xl">Network Institutions Database</h4>
                    <div className="flex gap-2">
                      <button className="border-2 border-gray-300 px-4 py-2 rounded-lg flex items-center gap-2">
                        <Filter className="w-4 h-4" />
                        Filter
                      </button>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
                        <Plus className="w-4 h-4" />
                        Add Institution
                      </button>
                    </div>
                  </div>

                  <div className="overflow-hidden border-2 border-gray-200 rounded-lg">
                    <table className="w-full">
                      <thead className="bg-orange-600 text-white">
                        <tr>
                          <th className="text-left p-3 font-semibold">Institution</th>
                          <th className="text-left p-3 font-semibold">Type</th>
                          <th className="text-left p-3 font-semibold">Programs Offered</th>
                          <th className="text-left p-3 font-semibold">Enrolled Students</th>
                          <th className="text-left p-3 font-semibold">Status</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y">
                        <tr className="hover:bg-gray-50">
                          <td className="p-3">
                            <div className="font-semibold">Lincoln High School</div>
                            <div className="text-xs text-gray-500">Boston MA</div>
                          </td>
                          <td className="p-3 text-sm">Public High School</td>
                          <td className="p-3 text-sm">
                            <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">
                              18 Programs
                            </span>
                          </td>
                          <td className="p-3 text-sm font-semibold">847</td>
                          <td className="p-3">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3">
                            <div className="font-semibold">Berklee Music Community Program</div>
                            <div className="text-xs text-gray-500">Boston MA</div>
                          </td>
                          <td className="p-3 text-sm">Community College</td>
                          <td className="p-3 text-sm">
                            <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">
                              6 Specialized Programs
                            </span>
                          </td>
                          <td className="p-3 text-sm font-semibold">234</td>
                          <td className="p-3">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                              Active
                            </span>
                          </td>
                        </tr>
                        <tr className="hover:bg-gray-50">
                          <td className="p-3">
                            <div className="font-semibold">Boston Technical Institute</div>
                            <div className="text-xs text-gray-500">Cambridge MA</div>
                          </td>
                          <td className="p-3 text-sm">Vocational School</td>
                          <td className="p-3 text-sm">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                              12 Trade Programs
                            </span>
                          </td>
                          <td className="p-3 text-sm font-semibold">456</td>
                          <td className="p-3">
                            <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">
                              Active
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div className="bg-white border-4 border-green-300 rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-4">Industry Network Affiliations</h4>
                  <p className="text-sm text-gray-600 mb-4">
                    Real-world employers and organizations connected to the education network for job opportunities
                  </p>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-blue-400 rounded"></div>
                        <div className="font-bold">WBOS Radio Station</div>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">Audio Engineering Internships</div>
                      <div className="text-xs">
                        <span className="font-semibold">12 students placed</span> this year
                      </div>
                    </div>

                    <div className="border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-green-400 rounded"></div>
                        <div className="font-bold">Local Recording Studios</div>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">Music Production Opportunities</div>
                      <div className="text-xs">
                        <span className="font-semibold">8 students placed</span> this year
                      </div>
                    </div>

                    <div className="border-2 border-gray-200 rounded-lg p-4">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-10 h-10 bg-purple-400 rounded"></div>
                        <div className="font-bold">Tech Startups Network</div>
                      </div>
                      <div className="text-xs text-gray-600 mb-2">Software Engineering Internships</div>
                      <div className="text-xs">
                        <span className="font-semibold">34 students placed</span> this year
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-4 border-purple-300 rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-4 flex items-center gap-2">
                    <DollarSign className="w-6 h-6 text-purple-600" />
                    Cost Savings Analysis
                  </h4>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold mb-3">Resource Sharing Savings</h5>
                      <div className="space-y-2">
                        <div className="flex justify-between p-2 bg-green-50 rounded">
                          <span className="text-sm">Shared Specialized Programs</span>
                          <span className="font-bold text-green-600">$1.8M</span>
                        </div>
                        <div className="flex justify-between p-2 bg-blue-50 rounded">
                          <span className="text-sm">Cross-Institutional Faculty</span>
                          <span className="font-bold text-blue-600">$890K</span>
                        </div>
                        <div className="flex justify-between p-2 bg-purple-50 rounded">
                          <span className="text-sm">Shared Equipment Lab Access</span>
                          <span className="font-bold text-purple-600">$650K</span>
                        </div>
                        <div className="flex justify-between p-2 bg-orange-50 rounded">
                          <span className="text-sm">Reduced Duplication</span>
                          <span className="font-bold text-orange-600">$860K</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h5 className="font-semibold mb-3">Annual Impact</h5>
                      <div className="bg-gradient-to-br from-green-100 to-blue-100 p-6 rounded-lg text-center">
                        <div className="text-5xl font-black text-green-600 mb-2">$4.2M</div>
                        <div className="text-sm text-gray-700 font-semibold">Total Annual Savings</div>
                        <div className="text-xs text-gray-600 mt-2">Through Network Resource Sharing</div>
                      </div>

                      <div className="mt-4 bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm font-semibold mb-2">Cost Per Student Reduction</div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">Before Network</span>
                          <span className="font-bold">$12,450</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-gray-600">After Network</span>
                          <span className="font-bold text-green-600">$9,127</span>
                        </div>
                        <div className="mt-2 pt-2 border-t border-blue-200">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold">Savings Per Student</span>
                            <span className="font-bold text-green-600">$3,323</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-4 border-orange-300 rounded-xl p-6">
                  <h4 className="font-bold text-xl mb-4">Cross-Enrollment Analytics</h4>
                  
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-orange-50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-orange-600">1,234</div>
                      <div className="text-sm text-gray-600">Students Taking Courses Outside Home Institution</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <div className="text-3xl font-bold text-blue-600">96%</div>
                      <div className="text-sm text-gray-600">Successfully Complete Cross-Enrolled Courses</div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="font-semibold mb-3 text-sm">Most Popular Cross-Enrollment Programs</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Advanced Audio Engineering</span>
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 rounded-full h-2 w-32">
                            <div className="bg-purple-500 rounded-full h-2" style={{width: '78%'}}></div>
                          </div>
                          <span className="text-xs font-semibold">234 students</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Biomedical Engineering</span>
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 rounded-full h-2 w-32">
                            <div className="bg-blue-500 rounded-full h-2" style={{width: '65%'}}></div>
                          </div>
                          <span className="text-xs font-semibold">187 students</span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">Culinary Arts Certification</span>
                        <div className="flex items-center gap-2">
                          <div className="bg-gray-200 rounded-full h-2 w-32">
                            <div className="bg-green-500 rounded-full h-2" style={{width: '52%'}}></div>
                          </div>
                          <span className="text-xs font-semibold">156 students</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetroLearnNetworkWireframe;