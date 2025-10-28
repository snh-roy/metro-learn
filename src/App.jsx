import React, { useState } from 'react';
import { ChevronRight, Home, Target, BookOpen, Trophy, Users, Brain, MessageCircle, BarChart3, FileText, Bell, Settings, Menu, Search, Plus, Filter } from 'lucide-react';

const MetroLearnWireframes = () => {
  const [view, setView] = useState('student-home');
  
  const views = [
    { id: 'student-home', label: 'Student Dashboard', type: 'student' },
    { id: 'student-roadmap', label: 'Student Career Roadmap', type: 'student' },
    { id: 'student-lesson', label: 'Student Lesson View', type: 'student' },
    { id: 'student-portfolio', label: 'Student Portfolio', type: 'student' },
    { id: 'teacher-home', label: 'Teacher Dashboard', type: 'teacher' },
    { id: 'teacher-students', label: 'Teacher Student List', type: 'teacher' },
    { id: 'teacher-grading', label: 'Teacher Auto-Grading', type: 'teacher' },
    { id: 'parent-home', label: 'Parent Dashboard', type: 'parent' },
    { id: 'admin-analytics', label: 'Admin Analytics', type: 'admin' }
  ];

  return (
    <div className="w-full min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow-lg p-6 mb-6">
          <h1 className="text-3xl font-bold mb-2">MetroLearn System Wireframes</h1>
          <p className="text-gray-600 mb-4">Complete UI/UX Design Specification</p>
          
          <div className="flex gap-2 flex-wrap">
            {views.map(v => (
              <button
                key={v.id}
                onClick={() => setView(v.id)}
                className={`px-4 py-2 rounded-lg font-semibold text-sm ${
                  view === v.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {v.label}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          {view === 'student-home' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-4 border-blue-500 pb-2">STUDENT DASHBOARD WIREFRAME</h2>
              
              <div className="border-4 border-gray-800 rounded-lg p-4 bg-gray-50">
                {/* Top Nav */}
                <div className="bg-blue-600 text-white p-4 rounded mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-white/20 rounded"></div>
                    <div className="font-bold text-lg">MetroLearn</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 px-4 py-2 rounded">🔥 7 Day Streak</div>
                    <Bell className="w-6 h-6" />
                    <div className="w-10 h-10 bg-white/30 rounded-full"></div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* Sidebar */}
                  <div className="w-64 bg-white border-2 border-gray-300 rounded p-4 space-y-2">
                    <div className="bg-blue-600 text-white p-3 rounded font-semibold flex items-center gap-2">
                      <Home className="w-5 h-5" />
                      Dashboard
                    </div>
                    <div className="p-3 rounded hover:bg-gray-100 font-semibold flex items-center gap-2 text-gray-700">
                      <Target className="w-5 h-5" />
                      Career Roadmap
                    </div>
                    <div className="p-3 rounded hover:bg-gray-100 font-semibold flex items-center gap-2 text-gray-700">
                      <BookOpen className="w-5 h-5" />
                      My Lessons
                    </div>
                    <div className="p-3 rounded hover:bg-gray-100 font-semibold flex items-center gap-2 text-gray-700">
                      <Trophy className="w-5 h-5" />
                      Portfolio
                    </div>
                    <div className="p-3 rounded hover:bg-gray-100 font-semibold flex items-center gap-2 text-gray-700">
                      <Users className="w-5 h-5" />
                      Mentors
                    </div>
                    <div className="p-3 rounded hover:bg-gray-100 font-semibold flex items-center gap-2 text-gray-700">
                      <Brain className="w-5 h-5" />
                      AI Tutor
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 space-y-4">
                    <div>
                      <div className="text-2xl font-bold mb-1">Hey Marcus! 👋</div>
                      <div className="text-gray-600">Ready to level up?</div>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="border-2 border-blue-300 bg-blue-50 p-4 rounded">
                        <div className="text-3xl font-bold">73%</div>
                        <div className="text-sm font-semibold">Progress to Milestone</div>
                      </div>
                      <div className="border-2 border-green-300 bg-green-50 p-4 rounded">
                        <div className="text-3xl font-bold">7</div>
                        <div className="text-sm font-semibold">Day Streak</div>
                      </div>
                      <div className="border-2 border-purple-300 bg-purple-50 p-4 rounded">
                        <div className="text-3xl font-bold">12</div>
                        <div className="text-sm font-semibold">Badges Earned</div>
                      </div>
                    </div>

                    {/* Up Next */}
                    <div className="border-2 border-gray-300 rounded p-4">
                      <div className="font-bold mb-3">Up Next for You 🎯</div>
                      <div className="border-2 border-blue-200 bg-blue-50 p-3 rounded flex items-center gap-3">
                        <div className="w-12 h-12 bg-blue-400 rounded"></div>
                        <div className="flex-1">
                          <div className="font-semibold">Physics: Sound Waves</div>
                          <div className="text-sm text-gray-600">Learn audio engineering</div>
                        </div>
                        <div className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Start</div>
                      </div>
                    </div>

                    {/* Challenge Alert */}
                    <div className="border-2 border-orange-300 bg-orange-50 p-4 rounded">
                      <div className="font-bold mb-2">🎉 New Challenge Available!</div>
                      <div className="text-sm mb-2">Radio station needs help. Win $500!</div>
                      <div className="bg-orange-500 text-white px-4 py-2 rounded font-semibold inline-block">Check it out →</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
                <div className="font-bold mb-2">🎨 Design Notes:</div>
                <ul className="text-sm space-y-1">
                  <li>• Use gradient backgrounds for stat cards</li>
                  <li>• Add subtle animations on hover</li>
                  <li>• Keep emoji usage consistent for engagement</li>
                  <li>• Progress bars should be animated</li>
                  <li>• Maintain high contrast for accessibility</li>
                </ul>
              </div>
            </div>
          )}

          {view === 'student-roadmap' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-4 border-purple-500 pb-2">CAREER ROADMAP WIREFRAME</h2>
              
              <div className="border-4 border-gray-800 rounded-lg p-4 bg-gray-50">
                {/* Top Banner */}
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white p-6 rounded mb-4">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-white/20 rounded"></div>
                    <div>
                      <div className="text-2xl font-bold">Music Producer</div>
                      <div>Your Dream Career Path</div>
                    </div>
                  </div>
                  <div className="bg-white/20 p-3 rounded">
                    <div className="text-sm mb-1">Overall Progress</div>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-white/30 rounded-full h-4">
                        <div className="bg-white rounded-full h-4 w-1/2"></div>
                      </div>
                      <div className="font-bold">45%</div>
                    </div>
                  </div>
                </div>

                {/* Three Column Layout */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="border-4 border-green-500 bg-green-50 p-4 rounded">
                    <div className="font-bold mb-2 text-lg">✅ Where You Are</div>
                    <div className="space-y-1 text-sm">
                      <div className="font-semibold">9th Grade</div>
                      <div>✓ Basic music theory</div>
                      <div>✓ Intro audio software</div>
                      <div>🔄 Learning physics</div>
                      <div className="bg-green-200 p-2 rounded mt-2 font-semibold">
                        NEXT: Advanced frequency
                      </div>
                    </div>
                  </div>

                  <div className="border-4 border-blue-500 bg-blue-50 p-4 rounded">
                    <div className="font-bold mb-2 text-lg">🎯 Milestones</div>
                    <div className="space-y-1 text-sm">
                      <div>🎯 Master audio physics</div>
                      <div>🎯 Learn Pro Tools</div>
                      <div>🎯 Produce 5 tracks</div>
                      <div>🎯 Radio internship</div>
                      <div>🎯 Get certified</div>
                    </div>
                  </div>

                  <div className="border-4 border-purple-500 bg-purple-50 p-4 rounded">
                    <div className="font-bold mb-2 text-lg">⭐ Dream Job</div>
                    <div className="space-y-1 text-sm">
                      <div className="font-bold text-lg">Music Producer</div>
                      <div>💰 $55K-95K</div>
                      <div>📈 12% job growth</div>
                      <div>🎓 Cert OR degree</div>
                      <div>🏢 Boston studios</div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div className="border-2 border-gray-300 bg-white p-4 rounded">
                  <div className="font-bold mb-3">Unlock Timeline</div>
                  <div className="space-y-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                      <div className="flex-1">
                        <div className="font-semibold">Complete Physics of Sound</div>
                        <div className="text-sm text-gray-600">Unlocks: Advanced Audio Module</div>
                      </div>
                      <div className="text-green-600 font-bold">73% Done</div>
                    </div>
                    <div className="flex items-center gap-3 opacity-50">
                      <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">🔒</div>
                      <div className="flex-1">
                        <div className="font-semibold">Master Pro Tools</div>
                        <div className="text-sm text-gray-600">Unlocks: Studio Internships</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
                <div className="font-bold mb-2">🎨 Design Notes:</div>
                <ul className="text-sm space-y-1">
                  <li>• Use visual progression indicators (checkmarks, locks)</li>
                  <li>• Color-code sections: Green = current, Blue = milestones, Purple = goal</li>
                  <li>• Animate progress bar fills</li>
                  <li>• Make locked items clearly distinguishable</li>
                  <li>• Add hover states showing more milestone details</li>
                </ul>
              </div>
            </div>
          )}

          {view === 'student-lesson' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-4 border-green-500 pb-2">LESSON VIEW WIREFRAME</h2>
              
              <div className="border-4 border-gray-800 rounded-lg p-4 bg-gray-50">
                {/* Header */}
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-4 rounded mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-sm opacity-80">Physics - Sound Waves</div>
                      <div className="text-xl font-bold">How do frequencies create different sounds?</div>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold">67%</div>
                      <div className="text-sm">Complete</div>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4">
                  {/* Left: Content */}
                  <div className="col-span-2 space-y-4">
                    {/* Video Player */}
                    <div className="border-2 border-gray-300 rounded">
                      <div className="bg-gray-800 h-64 rounded-t flex items-center justify-center text-white">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-2 flex items-center justify-center">▶</div>
                          <div>Video: Sound Wave Basics (8:34)</div>
                        </div>
                      </div>
                      <div className="bg-white p-3">
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex-1 bg-gray-200 rounded-full h-2">
                            <div className="bg-blue-500 rounded-full h-2 w-3/4"></div>
                          </div>
                          <div className="text-sm">6:23 / 8:34</div>
                        </div>
                      </div>
                    </div>

                    {/* Career Connection */}
                    <div className="border-2 border-purple-300 bg-purple-50 p-4 rounded">
                      <div className="font-bold mb-2">🎵 How This Helps Your Music Production Career:</div>
                      <div className="text-sm">Understanding frequency lets you mix tracks like a pro. High frequencies = bright sounds. Low frequencies = bass and depth.</div>
                    </div>

                    {/* Interactive Exercise */}
                    <div className="border-2 border-blue-300 bg-blue-50 p-4 rounded">
                      <div className="font-bold mb-3">Interactive: Manipulate Frequencies</div>
                      <div className="bg-white p-4 rounded border-2 border-gray-200">
                        <div className="text-center mb-3">
                          <div className="text-6xl">🎚️</div>
                          <div className="text-sm text-gray-600">Drag sliders to change sound</div>
                        </div>
                        <div className="space-y-2">
                          <div>
                            <div className="text-sm font-semibold">Frequency</div>
                            <div className="bg-gray-200 h-2 rounded-full"></div>
                          </div>
                          <div>
                            <div className="text-sm font-semibold">Amplitude</div>
                            <div className="bg-gray-200 h-2 rounded-full"></div>
                          </div>
                        </div>
                        <div className="bg-blue-500 text-white py-2 rounded text-center font-semibold mt-3">Play Sound</div>
                      </div>
                    </div>
                  </div>

                  {/* Right: Progress Sidebar */}
                  <div className="space-y-4">
                    <div className="border-2 border-gray-300 bg-white p-4 rounded">
                      <div className="font-bold mb-3">Lesson Progress</div>
                      <div className="space-y-2">
                        <div className="flex items-center gap-2 p-2 bg-green-50 rounded">
                          <div className="w-6 h-6 bg-green-500 rounded flex items-center justify-center text-white text-xs">✓</div>
                          <div className="text-sm font-semibold">Video</div>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-blue-50 rounded border-2 border-blue-400">
                          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-xs">2</div>
                          <div className="text-sm font-semibold">Interactive</div>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded opacity-50">
                          <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-xs">🔒</div>
                          <div className="text-sm font-semibold">Quiz</div>
                        </div>
                        <div className="flex items-center gap-2 p-2 bg-gray-50 rounded opacity-50">
                          <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center text-xs">🔒</div>
                          <div className="text-sm font-semibold">Project</div>
                        </div>
                      </div>
                    </div>

                    <div className="border-2 border-purple-300 bg-purple-50 p-4 rounded">
                      <div className="font-bold mb-2">💡 Need Help?</div>
                      <div className="text-sm mb-3">Ask the AI Tutor anything!</div>
                      <div className="bg-purple-500 text-white py-2 rounded text-center font-semibold">Open AI Tutor</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
                <div className="font-bold mb-2">🎨 Design Notes:</div>
                <ul className="text-sm space-y-1">
                  <li>• Embed video player with standard controls</li>
                  <li>• Make interactive elements touch-friendly</li>
                  <li>• Show progress checklist to create sense of achievement</li>
                  <li>• Always connect content to career goal (purple boxes)</li>
                  <li>• One-click access to AI Tutor from any lesson</li>
                </ul>
              </div>
            </div>
          )}

          {view === 'student-portfolio' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-4 border-orange-500 pb-2">PORTFOLIO WIREFRAME</h2>
              
              <div className="border-4 border-gray-800 rounded-lg p-4 bg-gray-50">
                {/* Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="text-2xl font-bold">My Portfolio 🏆</div>
                  <div className="bg-blue-600 text-white px-4 py-2 rounded font-semibold">Share Portfolio Link</div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="border-2 border-blue-300 bg-blue-50 p-4 rounded text-center">
                    <div className="w-10 h-10 bg-blue-400 rounded mx-auto mb-2"></div>
                    <div className="text-2xl font-bold">12</div>
                    <div className="text-sm">Badges</div>
                  </div>
                  <div className="border-2 border-green-300 bg-green-50 p-4 rounded text-center">
                    <div className="w-10 h-10 bg-green-400 rounded mx-auto mb-2"></div>
                    <div className="text-2xl font-bold">3</div>
                    <div className="text-sm">Projects</div>
                  </div>
                  <div className="border-2 border-purple-300 bg-purple-50 p-4 rounded text-center">
                    <div className="w-10 h-10 bg-purple-400 rounded mx-auto mb-2"></div>
                    <div className="text-2xl font-bold">Lvl 12</div>
                    <div className="text-sm">Current</div>
                  </div>
                  <div className="border-2 border-orange-300 bg-orange-50 p-4 rounded text-center">
                    <div className="w-10 h-10 bg-orange-400 rounded mx-auto mb-2"></div>
                    <div className="text-2xl font-bold">85%</div>
                    <div className="text-sm">Rating</div>
                  </div>
                </div>

                {/* Projects */}
                <div className="border-2 border-gray-300 bg-white p-4 rounded mb-4">
                  <div className="font-bold mb-3">Featured Projects</div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="border-2 border-purple-200 rounded p-3">
                      <div className="bg-purple-100 h-32 rounded mb-2 flex items-center justify-center text-4xl">▶</div>
                      <div className="font-bold mb-1">Lofi Hip-Hop Beat</div>
                      <div className="text-sm text-gray-600 mb-2">Created using physics of sound waves</div>
                      <div className="flex gap-2">
                        <div className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">Physics</div>
                        <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Math</div>
                      </div>
                    </div>
                    <div className="border-2 border-blue-200 rounded p-3">
                      <div className="bg-blue-100 h-32 rounded mb-2 flex items-center justify-center text-4xl">▶</div>
                      <div className="font-bold mb-1">Podcast Audio Engineering</div>
                      <div className="text-sm text-gray-600 mb-2">Mixed using frequency analysis</div>
                      <div className="flex gap-2">
                        <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Audio Tech</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="border-2 border-gray-300 bg-white p-4 rounded">
                  <div className="font-bold mb-3">Skills Earned</div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="border-2 border-green-200 bg-green-50 p-3 rounded text-center">
                      <div className="w-8 h-8 bg-green-400 rounded mx-auto mb-2"></div>
                      <div className="font-semibold text-sm">Sound Wave Physics</div>
                      <div className="text-xs text-gray-600">Expert</div>
                    </div>
                    <div className="border-2 border-blue-200 bg-blue-50 p-3 rounded text-center">
                      <div className="w-8 h-8 bg-blue-400 rounded mx-auto mb-2"></div>
                      <div className="font-semibold text-sm">Audio Software</div>
                      <div className="text-xs text-gray-600">Intermediate</div>
                    </div>
                    <div className="border-2 border-purple-200 bg-purple-50 p-3 rounded text-center">
                      <div className="w-8 h-8 bg-purple-400 rounded mx-auto mb-2"></div>
                      <div className="font-semibold text-sm">Rhythm Math</div>
                      <div className="text-xs text-gray-600">Advanced</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
                <div className="font-bold mb-2">🎨 Design Notes:</div>
                <ul className="text-sm space-y-1">
                  <li>• Portfolio should be shareable via unique URL</li>
                  <li>• Projects displayed with media previews (video/image)</li>
                  <li>• Tag system to show which skills were used</li>
                  <li>• Skill badges with proficiency levels</li>
                  <li>• Clean, professional layout suitable for college apps or job applications</li>
                </ul>
              </div>
            </div>
          )}

          {view === 'teacher-home' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-4 border-indigo-500 pb-2">TEACHER DASHBOARD WIREFRAME</h2>
              
              <div className="border-4 border-gray-800 rounded-lg p-4 bg-gray-50">
                {/* Top Nav */}
                <div className="bg-indigo-600 text-white p-4 rounded mb-4 flex items-center justify-between">
                  <div>
                    <div className="text-xl font-bold">MetroLearn Teacher Portal</div>
                    <div className="text-sm opacity-90">Ms Rodriguez - Physics Math</div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 px-3 py-2 rounded text-sm">
                      <div className="opacity-80">Time Saved</div>
                      <div className="font-bold">14 hours</div>
                    </div>
                    <div className="w-10 h-10 bg-white/30 rounded-full"></div>
                  </div>
                </div>

                <div className="flex gap-4">
                  {/* Sidebar */}
                  <div className="w-56 bg-white border-2 border-gray-300 rounded p-3 space-y-1">
                    <div className="bg-indigo-600 text-white p-2 rounded font-semibold text-sm">Dashboard</div>
                    <div className="p-2 rounded hover:bg-gray-100 font-semibold text-sm">My Students</div>
                    <div className="p-2 rounded hover:bg-gray-100 font-semibold text-sm">Auto-Grading</div>
                    <div className="p-2 rounded hover:bg-gray-100 font-semibold text-sm">Lesson Plans</div>
                    <div className="p-2 rounded hover:bg-gray-100 font-semibold text-sm">Analytics</div>
                    <div className="p-2 rounded hover:bg-gray-100 font-semibold text-sm flex items-center justify-between">
                      <span>Smart Alerts</span>
                      <span className="bg-red-500 text-white text-xs px-2 rounded-full">3</span>
                    </div>
                  </div>

                  {/* Main Content */}
                  <div className="flex-1 space-y-4">
                    <div className="text-xl font-bold">Welcome back Ms Rodriguez</div>

                    {/* Stats */}
                    <div className="grid grid-cols-4 gap-3">
                      <div className="bg-white border-l-4 border-blue-500 p-3 rounded shadow">
                        <div className="text-2xl font-bold">127</div>
                        <div className="text-sm text-gray-600">Total Students</div>
                      </div>
                      <div className="bg-white border-l-4 border-green-500 p-3 rounded shadow">
                        <div className="text-2xl font-bold">94%</div>
                        <div className="text-sm text-gray-600">Avg Completion</div>
                      </div>
                      <div className="bg-white border-l-4 border-purple-500 p-3 rounded shadow">
                        <div className="text-2xl font-bold">14h</div>
                        <div className="text-sm text-gray-600">Time Saved</div>
                      </div>
                      <div className="bg-white border-l-4 border-orange-500 p-3 rounded shadow">
                        <div className="text-2xl font-bold">3</div>
                        <div className="text-sm text-gray-600">Need Help</div>
                      </div>
                    </div>

                    {/* Activity Feed */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white border-2 border-gray-300 rounded p-3">
                        <div className="font-bold mb-2">Recent Activity</div>
                        <div className="space-y-2">
                          <div className="bg-green-50 p-2 rounded border border-green-200 text-sm">
                            <div className="font-semibold">45 assignments auto-graded</div>
                            <div className="text-xs text-gray-500">10 min ago</div>
                          </div>
                          <div className="bg-blue-50 p-2 rounded border border-blue-200 text-sm">
                            <div className="font-semibold">AI lesson plan ready</div>
                            <div className="text-xs text-gray-500">1h ago</div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-white border-2 border-gray-300 rounded p-3">
                        <div className="font-bold mb-2">Class Performance</div>
                        <div className="space-y-2">
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Period 1 Physics</span>
                              <span className="font-bold">87%</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2">
                              <div className="bg-green-500 rounded-full h-2" style={{width: '87%'}}></div>
                            </div>
                          </div>
                          <div>
                            <div className="flex justify-between text-sm mb-1">
                              <span>Period 3 Physics</span>
                              <span className="font-bold">92%</span>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2">
                              <div className="bg-blue-500 rounded-full h-2" style={{width: '92%'}}></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
                <div className="font-bold mb-2">🎨 Design Notes:</div>
                <ul className="text-sm space-y-1">
                  <li>• Use professional color scheme (indigo/purple primary)</li>
                  <li>• Highlight time saved prominently - key teacher benefit</li>
                  <li>• Show at-a-glance class performance metrics</li>
                  <li>• Activity feed shows recent AI actions</li>
                  <li>• Alert badge on sidebar for urgent items</li>
                </ul>
              </div>
            </div>
          )}

          {view === 'teacher-students' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-4 border-teal-500 pb-2">TEACHER STUDENT LIST WIREFRAME</h2>
              
              <div className="border-4 border-gray-800 rounded-lg p-4 bg-gray-50">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-xl font-bold">My Students</div>
                  <div className="flex gap-2">
                    <div className="border-2 border-gray-300 px-3 py-2 rounded">
                      <select className="bg-transparent">
                        <option>All Classes</option>
                        <option>Period 1</option>
                        <option>Period 3</option>
                      </select>
                    </div>
                    <div className="border-2 border-gray-300 px-3 py-2 rounded flex items-center gap-2">
                      <Search className="w-4 h-4" />
                      Search
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded overflow-hidden">
                  <div className="bg-indigo-600 text-white p-3 grid grid-cols-5 gap-4 font-semibold text-sm">
                    <div>Student</div>
                    <div>Career Path</div>
                    <div>Progress</div>
                    <div>Last Active</div>
                    <div>Status</div>
                  </div>
                  
                  <div className="divide-y">
                    <div className="p-3 grid grid-cols-5 gap-4 items-center hover:bg-gray-50 text-sm">
                      <div>
                        <div className="font-semibold">Marcus Johnson</div>
                        <div className="text-xs text-gray-500">Grade 9</div>
                      </div>
                      <div>
                        <span className="bg-purple-100 text-purple-700 px-2 py-1 rounded text-xs font-semibold">Music Producer</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-200 rounded-full h-2 flex-1">
                          <div className="bg-green-500 rounded-full h-2" style={{width: '73%'}}></div>
                        </div>
                        <span className="text-xs font-semibold">73%</span>
                      </div>
                      <div className="text-xs">2 hours ago</div>
                      <div>
                        <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold">On Track</span>
                      </div>
                    </div>

                    <div className="p-3 grid grid-cols-5 gap-4 items-center hover:bg-gray-50 text-sm bg-orange-50">
                      <div>
                        <div className="font-semibold">Jessica Smith</div>
                        <div className="text-xs text-gray-500">Grade 10</div>
                      </div>
                      <div>
                        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-semibold">Biomedical Eng</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-gray-200 rounded-full h-2 flex-1">
                          <div className="bg-orange-500 rounded-full h-2" style={{width: '45%'}}></div>
                        </div>
                        <span className="text-xs font-semibold">45%</span>
                      </div>
                      <div className="text-xs">5 days ago</div>
                      <div>
                        <span className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold">Needs Help</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
                <div className="font-bold mb-2">🎨 Design Notes:</div>
                <ul className="text-sm space-y-1">
                  <li>• Sortable columns for easy filtering</li>
                  <li>• Color-code status (green = good, orange = warning, red = urgent)</li>
                  <li>• Show career path to help teachers contextualize interventions</li>
                  <li>• Click student row to see detailed profile</li>
                  <li>• Highlight at-risk students with background color</li>
                </ul>
              </div>
            </div>
          )}

          {view === 'teacher-grading' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-4 border-emerald-500 pb-2">AUTO-GRADING CENTER WIREFRAME</h2>
              
              <div className="border-4 border-gray-800 rounded-lg p-4 bg-gray-50">
                <div className="text-xl font-bold mb-4">Auto-Grading Center</div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-green-500 text-white p-4 rounded">
                    <div className="text-3xl font-bold">142</div>
                    <div className="font-semibold">Graded This Week</div>
                    <div className="text-sm opacity-90">Saved 14 hours</div>
                  </div>
                  <div className="bg-blue-500 text-white p-4 rounded">
                    <div className="text-3xl font-bold">23</div>
                    <div className="font-semibold">Pending Review</div>
                    <div className="text-sm opacity-90">AI flagged items</div>
                  </div>
                  <div className="bg-purple-500 text-white p-4 rounded">
                    <div className="text-3xl font-bold">98%</div>
                    <div className="font-semibold">Accuracy Rate</div>
                    <div className="text-sm opacity-90">vs manual grading</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded p-4 mb-4">
                  <div className="font-bold mb-3">Recently Auto-Graded</div>
                  <div className="space-y-2">
                    <div className="bg-green-50 border border-green-200 p-3 rounded flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">Physics Quiz Sound Waves</div>
                        <div className="text-xs text-gray-600">45 submissions in 3 minutes</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">Avg 84%</div>
                        <div className="text-xs text-gray-500">10 min ago</div>
                      </div>
                    </div>

                    <div className="bg-blue-50 border border-blue-200 p-3 rounded flex items-center justify-between">
                      <div>
                        <div className="font-semibold text-sm">Essay Applications of Frequency</div>
                        <div className="text-xs text-gray-600">AI feedback on 38 essays</div>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-blue-600">Avg 88%</div>
                        <div className="text-xs text-gray-500">2 hours ago</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded p-4">
                  <div className="font-bold mb-3">Items for Review</div>
                  <div className="bg-orange-50 border border-orange-200 p-3 rounded flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-sm">Marcus Johnson Physics Problem Set</div>
                      <div className="text-xs text-gray-600">AI detected unusual approach verify answer</div>
                    </div>
                    <div className="bg-orange-500 text-white px-4 py-2 rounded font-semibold text-sm">Review</div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
                <div className="font-bold mb-2">🎨 Design Notes:</div>
                <ul className="text-sm space-y-1">
                  <li>• Emphasize time saved metric prominently</li>
                  <li>• Show grading accuracy to build teacher trust</li>
                  <li>• Separate completed vs needs-review sections</li>
                  <li>• One-click review for flagged items</li>
                  <li>• Display class averages for quick assessment</li>
                </ul>
              </div>
            </div>
          )}

          {view === 'parent-home' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-4 border-pink-500 pb-2">PARENT DASHBOARD WIREFRAME</h2>
              
              <div className="border-4 border-gray-800 rounded-lg p-4 bg-gray-50">
                <div className="bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded mb-4">
                  <div className="text-xl font-bold">Welcome Parent of Marcus Johnson</div>
                  <div className="text-sm opacity-90">Track your student progress and stay connected</div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="bg-white border-2 border-blue-200 p-4 rounded">
                    <div className="font-bold mb-2">Career Path</div>
                    <div className="text-2xl font-bold text-blue-600">Music Producer</div>
                    <div className="text-sm text-gray-600">Overall Progress: 73%</div>
                  </div>
                  <div className="bg-white border-2 border-green-200 p-4 rounded">
                    <div className="font-bold mb-2">Current Grade</div>
                    <div className="text-2xl font-bold text-green-600">B+</div>
                    <div className="text-sm text-gray-600">Above class average</div>
                  </div>
                  <div className="bg-white border-2 border-purple-200 p-4 rounded">
                    <div className="font-bold mb-2">Last Active</div>
                    <div className="text-2xl font-bold text-purple-600">2 hrs ago</div>
                    <div className="text-sm text-gray-600">7 day streak</div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded p-4 mb-4">
                  <div className="font-bold mb-3">Recent Activity</div>
                  <div className="space-y-2">
                    <div className="bg-green-50 p-2 rounded text-sm">
                      <div className="font-semibold">Completed Physics Sound Waves lesson</div>
                      <div className="text-xs text-gray-500">Score 87% 2 hours ago</div>
                    </div>
                    <div className="bg-blue-50 p-2 rounded text-sm">
                      <div className="font-semibold">Unlocked new milestone Audio Engineering</div>
                      <div className="text-xs text-gray-500">Yesterday</div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded p-4">
                  <div className="font-bold mb-3">Career Roadmap Progress</div>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Master Audio Physics</span>
                        <span className="font-bold">73%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 rounded-full h-2" style={{width: '73%'}}></div>
                      </div>
                    </div>
                    <div className="opacity-50">
                      <div className="flex justify-between text-sm mb-1">
                        <span>Learn Pro Tools Locked</span>
                        <span className="font-bold">0%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2"></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
                <div className="font-bold mb-2">🎨 Design Notes:</div>
                <ul className="text-sm space-y-1">
                  <li>• Simple non-technical language for parents</li>
                  <li>• Show career path prominently so parents understand context</li>
                  <li>• Real-time activity feed to stay connected</li>
                  <li>• Visual progress bars easy to understand</li>
                  <li>• Available in 100+ languages</li>
                </ul>
              </div>
            </div>
          )}

          {view === 'admin-analytics' && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold border-b-4 border-cyan-500 pb-2">ADMIN ANALYTICS WIREFRAME</h2>
              
              <div className="border-4 border-gray-800 rounded-lg p-4 bg-gray-50">
                <div className="text-xl font-bold mb-4">District Analytics Dashboard</div>

                <div className="grid grid-cols-4 gap-3 mb-4">
                  <div className="bg-blue-500 text-white p-3 rounded">
                    <div className="text-2xl font-bold">12,847</div>
                    <div className="text-sm">Total Students</div>
                  </div>
                  <div className="bg-green-500 text-white p-3 rounded">
                    <div className="text-2xl font-bold">92%</div>
                    <div className="text-sm">Avg Completion</div>
                  </div>
                  <div className="bg-purple-500 text-white p-3 rounded">
                    <div className="text-2xl font-bold">$2.1M</div>
                    <div className="text-sm">Cost Savings</div>
                  </div>
                  <div className="bg-orange-500 text-white p-3 rounded">
                    <div className="text-2xl font-bold">-18%</div>
                    <div className="text-sm">Gap Reduction</div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-white border-2 border-gray-300 rounded p-4">
                    <div className="font-bold mb-3">Student Progress by School</div>
                    <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
                      <BarChart3 className="w-16 h-16 text-gray-400" />
                    </div>
                  </div>

                  <div className="bg-white border-2 border-gray-300 rounded p-4">
                    <div className="font-bold mb-3">Career Path Distribution</div>
                    <div className="h-40 bg-gray-100 rounded flex items-center justify-center">
                      <div className="w-32 h-32 border-8 border-blue-400 rounded-full flex items-center justify-center text-gray-400">
                        Chart
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white border-2 border-gray-300 rounded p-4">
                  <div className="font-bold mb-3">School Performance Comparison</div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Lincoln High School</span>
                        <span className="font-bold">94%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-green-500 rounded-full h-2" style={{width: '94%'}}></div>
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-1">
                        <span>Washington Middle School</span>
                        <span className="font-bold">88%</span>
                      </div>
                      <div className="bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 rounded-full h-2" style={{width: '88%'}}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 border-2 border-yellow-400 p-4 rounded">
                <div className="font-bold mb-2">🎨 Design Notes:</div>
                <ul className="text-sm space-y-1">
                  <li>• Focus on district-wide metrics and ROI</li>
                  <li>• Data visualization with charts and graphs</li>
                  <li>• School-by-school comparison for identifying needs</li>
                  <li>• Export functionality for board presentations</li>
                  <li>• Real-time data updates</li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MetroLearnWireframes;