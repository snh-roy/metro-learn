import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Users, Brain, Building2, Target, CheckCircle2, Globe, Rocket, Award, Briefcase, Map, Sparkles, BookOpen, LineChart, TrendingUp, Zap } from 'lucide-react';

const MetroLearnPresentation = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "MetroLearn",
      subtitle: "AI-Powered Career-Inspired Learning Platform",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center gap-4">
              <Rocket className="w-20 h-20 text-blue-600" />
              <Building2 className="w-24 h-24 text-purple-600" />
              <Briefcase className="w-20 h-20 text-green-600" />
            </div>
            <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent">
              MetroLearn
            </h1>
            <p className="text-2xl text-gray-700 font-semibold">
              Where Every Lesson Builds Your Future
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Transform metropolitan education through personalized learning pathways
            </p>
          </div>
          <div className="flex gap-8 text-center">
            <div className="bg-blue-50 px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold text-blue-600">500K+</div>
              <div className="text-sm text-gray-600">Students Inspired</div>
            </div>
            <div className="bg-purple-50 px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold text-purple-600">50+</div>
              <div className="text-sm text-gray-600">Career Pathways</div>
            </div>
            <div className="bg-green-50 px-6 py-4 rounded-lg">
              <div className="text-3xl font-bold text-green-600">34%</div>
              <div className="text-sm text-gray-600">Test Score Gains</div>
            </div>
          </div>
        </div>
      )
    },
    
    {
      title: "The Real Problem",
      subtitle: "Students Ask Why Does This Matter",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-red-50 to-orange-50 p-8 rounded-lg border-l-4 border-red-500">
            <h3 className="font-bold text-2xl mb-4 text-red-900">The Motivation Crisis</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-3">
                <p className="text-gray-700"><span className="font-semibold">40%</span> of students below grade level</p>
                <p className="text-gray-700"><span className="font-semibold">65%</span> report school feels pointless</p>
                <p className="text-gray-700">Teachers work 52+ hours per week</p>
              </div>
              <div className="space-y-3">
                <p className="text-gray-700">Achievement gaps persist</p>
                <p className="text-gray-700">Cannot see how school connects to future</p>
                <p className="text-gray-700">Low-income students lack career exposure</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <Sparkles className="w-12 h-12 text-blue-600 mb-3" />
              <h4 className="font-bold text-lg mb-2 text-blue-900">The Key Insight</h4>
              <p className="text-gray-700 text-sm">Students who see career connections are 3x more likely to persist and achieve mastery</p>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <Target className="w-12 h-12 text-green-600 mb-3" />
              <h4 className="font-bold text-lg mb-2 text-green-900">Our Solution</h4>
              <p className="text-gray-700 text-sm">Make every lesson answer How does this help me become who I want to be</p>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 rounded-lg text-center">
            <p className="text-xl font-bold">
              Transform education from requirement into roadmap to dream futures
            </p>
          </div>
        </div>
      )
    },
    
    {
      title: "MetroLearn Platform",
      subtitle: "Dynamic Career-Driven Ecosystem",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
              <Map className="w-12 h-12 mb-3" />
              <h3 className="font-bold text-lg mb-2">Dream Navigator</h3>
              <p className="text-sm text-blue-100">AI career discovery personalized roadmaps dynamic learning paths</p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
              <Brain className="w-12 h-12 mb-3" />
              <h3 className="font-bold text-lg mb-2">Adaptive AI Engine</h3>
              <p className="text-sm text-purple-100">Context-based learning connects lessons to career goals with real projects</p>
            </div>
            
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
              <Users className="w-12 h-12 mb-3" />
              <h3 className="font-bold text-lg mb-2">Mentor Network</h3>
              <p className="text-sm text-green-100">Connect with professionals portfolio building pathways to internships</p>
            </div>
          </div>
          
          <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
            <h3 className="font-bold text-xl mb-4 text-center text-gray-800">Student Journey</h3>
            <div className="grid grid-cols-5 gap-2">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Sparkles className="w-8 h-8 text-blue-600" />
                </div>
                <p className="text-xs font-semibold text-gray-700">Discover Careers</p>
              </div>
              <div className="flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Map className="w-8 h-8 text-purple-600" />
                </div>
                <p className="text-xs font-semibold text-gray-700">Get Roadmap</p>
              </div>
              <div className="flex items-center justify-center">
                <ChevronRight className="w-6 h-6 text-gray-400" />
              </div>
              <div className="text-center">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-2">
                  <Rocket className="w-8 h-8 text-green-600" />
                </div>
                <p className="text-xs font-semibold text-gray-700">Learn Build</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-4 gap-4 text-sm">
            <div className="bg-blue-50 p-4 rounded-lg text-center">
              <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
              <div className="font-bold text-blue-900">50+ Careers</div>
            </div>
            <div className="bg-purple-50 p-4 rounded-lg text-center">
              <BookOpen className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="font-bold text-purple-900">Adaptive</div>
            </div>
            <div className="bg-green-50 p-4 rounded-lg text-center">
              <Briefcase className="w-8 h-8 text-green-600 mx-auto mb-2" />
              <div className="font-bold text-green-900">Real Mentors</div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg text-center">
              <LineChart className="w-8 h-8 text-orange-600 mx-auto mb-2" />
              <div className="font-bold text-orange-900">Live Progress</div>
            </div>
          </div>
        </div>
      )
    },
    
    {
      title: "The Roadmap Experience",
      subtitle: "Where You Are to Milestones to Career Destination",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border-2 border-blue-200">
            <h3 className="text-xl font-bold text-gray-800 mb-2">Student Selects Career: Video Game Designer</h3>
            <p className="text-gray-600">After interest quiz discovers passion for game design</p>
          </div>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-500">
              <h4 className="font-bold text-green-900 mb-3">Where You Are</h4>
              <div className="text-sm space-y-2 text-gray-700">
                <p>Grade 8 Current Level</p>
                <p>Basic algebra mastered</p>
                <p>Intro to coding</p>
                <p className="text-green-700 font-semibold mt-3">Next: Unlock trig via 3D graphics</p>
              </div>
            </div>
            
            <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-bold text-blue-900 mb-3">Key Milestones</h4>
              <div className="text-sm space-y-2 text-gray-700">
                <p>Master trigonometry</p>
                <p>Learn Unity engine</p>
                <p>Build 3 games</p>
                <p>Studio internship</p>
                <p className="text-blue-700 font-semibold mt-3">Unlocks as you progress</p>
              </div>
            </div>
            
            <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-bold text-purple-900 mb-3">Career Destination</h4>
              <div className="text-sm space-y-2 text-gray-700">
                <p>Video Game Designer</p>
                <p>Salary: $85K-120K</p>
                <p>Growth: 16% faster</p>
                <p>College OR Bootcamp</p>
                <p className="text-purple-700 font-semibold mt-3">Roadmap gets you there</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-red-50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-red-900 mb-2">Traditional</p>
              <p className="text-sm text-gray-700">Learn sine cosine tangent Memorize formulas</p>
            </div>
            <div className="bg-green-50 p-4 rounded-lg">
              <p className="text-sm font-semibold text-green-900 mb-2">MetroLearn</p>
              <p className="text-sm text-gray-700">Want 3D movement Use trig to calculate angles Build jump animation</p>
            </div>
          </div>
        </div>
      )
    },
    
    {
      title: "Dynamic Platform Features",
      subtitle: "200+ Capabilities",
      content: (
        <div className="space-y-5">
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-3 text-blue-900">Student Experience</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>Career Discovery: 50+ pathways</p>
                <p>AI Learning: Tutors context lessons</p>
                <p>Portfolio: Projects skill badges</p>
                <p>Gamification: Milestones competitions</p>
                <p>Flexibility: Switch careers anytime</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-purple-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-3 text-purple-900">Teacher Dashboard</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>Auto-Grade: Saves 12+ hours weekly</p>
                <p>Alerts: At-risk student flags</p>
                <p>Analytics: Career readiness tracking</p>
                <p>Lesson Plans: AI-generated aligned</p>
                <p>Integration: Industry project library</p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-5">
            <div className="bg-white border-2 border-green-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-3 text-green-900">Family Portal</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>Roadmap: See child path progress</p>
                <p>Updates: Grades milestone unlocks</p>
                <p>Languages: 100+ multilingual</p>
                <p>Resources: Career activities</p>
              </div>
            </div>
            
            <div className="bg-white border-2 border-orange-200 rounded-lg p-5">
              <h3 className="font-bold text-lg mb-3 text-orange-900">Industry Integration</h3>
              <div className="space-y-2 text-sm text-gray-700">
                <p>Mentors: 1000+ professionals</p>
                <p>Challenges: Company projects</p>
                <p>Internships: Local companies</p>
                <p>Certs: Google Adobe CompTIA</p>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-5 rounded-lg">
            <h3 className="font-bold text-lg mb-3 text-center">Advanced AI</h3>
            <div className="grid grid-cols-4 gap-4 text-sm text-center">
              <div>
                <div className="font-semibold">Predictive</div>
                <div className="text-blue-100">Early intervention</div>
              </div>
              <div>
                <div className="font-semibold">NLP</div>
                <div className="text-blue-100">Essay feedback</div>
              </div>
              <div>
                <div className="font-semibold">Vision</div>
                <div className="text-blue-100">Handwriting</div>
              </div>
              <div>
                <div className="font-semibold">Adaptive</div>
                <div className="text-blue-100">Style detection</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    {
      title: "Transformational Impact",
      subtitle: "Real Results",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">34%</div>
              <div className="text-blue-100 text-sm">Test Score Boost</div>
            </div>
            <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">89%</div>
              <div className="text-green-100 text-sm">Motivation Increase</div>
            </div>
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg text-center">
              <div className="text-5xl font-bold mb-2">28%</div>
              <div className="text-purple-100 text-sm">Gap Reduction</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-white border-2 border-blue-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-blue-900">Success Stories</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900">Jamal 8th Grade Bronx</p>
                  <p className="text-xs text-gray-700">Cybersecurity Google cert at 14</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Sofia 10th Philadelphia</p>
                  <p className="text-xs text-gray-700">Built 3D prosthetics MIT program</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-900">Marcus 9th Boston</p>
                  <p className="text-xs text-gray-700">Music production radio intern</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white border-2 border-purple-200 rounded-lg p-6">
              <h3 className="font-bold text-lg mb-4 text-purple-900">System Benefits</h3>
              <div className="space-y-3">
                <div className="bg-blue-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-blue-900">Teachers</p>
                  <p className="text-xs text-gray-700">12 hours saved weekly</p>
                </div>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-green-900">Parents</p>
                  <p className="text-xs text-gray-700">89% engagement increase</p>
                </div>
                <div className="bg-purple-50 p-3 rounded-lg">
                  <p className="text-sm font-semibold text-purple-900">Districts</p>
                  <p className="text-xs text-gray-700">$47M savings ROI 18 months</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    
    {
      title: "Moving Forward",
      subtitle: "Partnership Opportunity",
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center">
            Transform Metropolitan Education Together
          </h2>
          
          <div className="grid grid-cols-3 gap-6 w-full max-w-4xl">
            <div className="bg-blue-50 p-6 rounded-lg text-center border-2 border-blue-200">
              <div className="text-3xl font-bold text-blue-600 mb-2">500K+</div>
              <div className="text-sm text-gray-700">Students Ready</div>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center border-2 border-green-200">
              <div className="text-3xl font-bold text-green-600 mb-2">$47M</div>
              <div className="text-sm text-gray-700">Annual Savings</div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200">
              <div className="text-3xl font-bold text-purple-600 mb-2">Q2 2026</div>
              <div className="text-sm text-gray-700">Pilot Launch</div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg shadow-xl text-center max-w-2xl">
            <h3 className="text-2xl font-bold mb-3">Next Steps</h3>
            <p className="mb-4">Join us in reimagining urban education</p>
            <div className="text-sm space-y-1">
              <div>Schedule pilot program discussions</div>
              <div>Review technical specifications</div>
              <div>Explore partnership models</div>
            </div>
          </div>
        </div>
      )
    }
  ];

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="w-full h-screen bg-gray-100 flex flex-col">
      <div className="flex-1 bg-white m-8 rounded-lg shadow-2xl overflow-hidden flex flex-col">
        <div className="flex-1 p-12 overflow-y-auto">
          {slides[currentSlide].content}
        </div>
        
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold">{slides[currentSlide].title}</h2>
              <p className="text-sm text-blue-100">{slides[currentSlide].subtitle}</p>
            </div>
            <div className="text-sm font-semibold bg-white/20 px-4 py-2 rounded-full">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center items-center space-x-4 pb-8">
        <button onClick={prevSlide} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-3 rounded-full shadow-lg">
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <div className="flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${index === currentSlide ? 'bg-blue-600 w-8' : 'bg-gray-300'}`}
            />
          ))}
        </div>
        
        <button onClick={nextSlide} className="bg-white hover:bg-gray-100 text-gray-800 font-semibold p-3 rounded-full shadow-lg">
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default MetroLearnPresentation;
