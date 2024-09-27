       

import React, { useState } from 'react';
import MentorList from './MentorList';
import ProfileCard from './ProfileCard';

const Home = () => {
  const mockMentors = [
    {
      name: 'John Foley',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s',
      role: 'Full Stack Developer at Freelance | Freelancing mentor',
      languages: ['English', 'French'],
      description:
        'John Foley is a passionate UX designer with over 5 years of experience in creating user-centric designs for web and mobile applications.',
      ratings: 4.5,
      sessions: '62 Review / 56',
      expertise: ['JavaScript', 'Python', 'React.js', 'UX Design'],
      industries: ['E-commerce', 'Health Tech', 'EdTech', 'FinTech'],
      stages: ['Startup', 'Growth Stage', 'Enterprise'],
      price: '₹ 299 per session',
      Position: 'Mentor',
    },
    {
            name: 'John Foley',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s',
            role: 'Full Stack Developer at Freelance | Freelancing mentor',
            languages: ['English', 'French'],
            description:
              'John Foley is a passionate UX designer with over 5 years of experience in creating user-centric designs for web and mobile applications.',
            ratings: 4.5,
            sessions: '62 Review / 56',
            expertise: ['JavaScript', 'Python', 'React.js', 'UX Design'],
            industries: ['E-commerce', 'Health Tech', 'EdTech', 'FinTech'],
            stages: ['Startup', 'Growth Stage', 'Enterprise'],
            price: '₹ 299 per session',
            Position:'Mentor'
          },
          {
            name: 'Emily Johnson',
            role: 'Frontend Developer at TechCorp',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s',
            languages: ['English', 'Spanish'],
            description:
              'Emily has 7 years of experience specializing in responsive web designs and accessibility improvements for large-scale web applications.',
            ratings: 4.7,
            sessions: '62 Review / 60',
            expertise: ['HTML', 'CSS', 'JavaScript', 'React'],
            industries: ['E-commerce', 'SaaS', 'Marketing'],
            stages: ['Growth', 'Enterprise'],
            price: '₹ 399 per session',
             Position:'Mentor'
          },
          {
                  "name": "John Foley",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "role": "Full Stack Developer at Freelance | Freelancing mentor",
                  "languages": ["English", "French"],
                  "description": "John Foley is a passionate UX designer with over 5 years of experience in creating user-centric designs for web and mobile applications.",
                  "ratings": 4.5,
                  "sessions":"62 Review / 56" ,
                  "expertise": ["JavaScript", "Python", "React.js", "UX Design"],
                  "industries": ["E-commerce", "Health Tech", "EdTech", "FinTech"],
                  "stages": ["Startup", "Growth Stage", "Enterprise"],
                  "price": "₹ 299 per session",
                   Position:'Investor',
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                },
                {
                  "name": "Emily Johnson",
                  "role": "Frontend Developer at TechCorp",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "languages": ["English", "Spanish"],
                  "description": "Emily has 7 years of experience specializing in responsive web designs and accessibility improvements for large-scale web applications.",
                  "ratings": 4.7,
                  "sessions":"62 Review / 60" ,
                  "expertise": ["HTML", "CSS", "JavaScript", "React"],
                  "industries": ["E-commerce", "SaaS", "Marketing"],
                  "stages": ["Growth", "Enterprise"],
                  "price": "₹ 399 per session",
                  Position:'Investor',
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                },
                {
                  "name": "Michael Green",
                  "role": "Senior Backend Engineer at CloudX Solutions",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "languages": ["English", "German"],
                  "description": "Michael has 10+ years of experience in backend architecture, specializing in cloud-based solutions and API development.",
                  "ratings": 4.9,
                  "sessions": "62 Review / 85" ,
                  "expertise": ["Node.js", "Express", "AWS", "Docker"],
                  "industries": ["Cloud Computing", "Healthcare", "Finance"],
                  "stages": ["Startup", "Scale-up"],
                  "price": "₹ 499 per session",
                  Position:'Investor',
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                },
                {
                  "name": "Sophia Martin",
                  "role": "UX/UI Designer at DesignPro",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "languages": ["English", "French"],
                  "description": "Sophia has a strong background in designing user-friendly interfaces and improving the user experience for mobile applications.",
                  "ratings": 4.6,
                  "sessions":"62 Review / 54" ,
                  "expertise": ["Figma", "Sketch", "Adobe XD", "Wireframing"],
                  "industries": ["FinTech", "E-commerce", "SaaS"],
                  "stages": ["Startup", "Growth"],
                  "price": "₹ 350 per session",
                  Position:'Investor',
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                },
                {
                  "name": "David Carter",
                  "role": "Data Scientist at DataVision",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "languages": ["English", "Hindi"],
                  "description": "David has 6 years of experience in data analysis, machine learning, and AI-driven solutions for business intelligence.",
                  "ratings": 4.8,
                  "sessions": "72 Review / 74" ,
                  "expertise": ["Python", "R", "Machine Learning", "TensorFlow"],
                  "industries": ["Healthcare", "Finance", "Marketing"],
                  "stages": ["Growth", "Enterprise"],
                  "price": "₹ 450 per session",
                  Position:'Cofounder',
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                },
                {
                  "name": "Alice Rodriguez",
                  "role": "Mobile Developer at Appify",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "languages": ["English", "Portuguese"],
                  "description": "Alice is a mobile app developer with 8 years of experience building cross-platform applications.",
                  "ratings": 4.7,
                  "sessions": "66 Review / 74" ,
                  "expertise": ["React Native", "Swift", "Kotlin"],
                  "industries": ["HealthTech", "Fitness", "Education"],
                  "stages": ["Startup", "Growth"],
                  "price": "₹ 399 per session",
                  Position:'Cofounder',
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                },
                {
                  "name": "Liam Brown",
                  "role": "Cloud Engineer at ServerNet",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "languages": ["English", "Spanish"],
                  "description": "Liam has 9 years of experience with cloud infrastructure, focusing on deployment automation and security.",
                  "ratings": 4.8,
                  "sessions": 73,
                  "expertise": ["AWS", "Azure", "Kubernetes", "Terraform"],
                  "industries": ["Cloud Computing", "E-commerce", "Healthcare"],
                  "stages": ["Scale-up", "Enterprise"],
                  "price": "₹ 499 per session",
                  Position:'Cofounder',
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                },
                {
                  "name": "Emma White",
                  "role": "Full Stack Developer at Freelance",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "languages": ["English"],
                  "description": "Emma is a full stack developer with 5+ years of experience building scalable web applications.",
                  "ratings": 4.6,
                  "sessions": 59,
                  "expertise": ["JavaScript", "Node.js", "MongoDB", "React"],
                  "industries": ["FinTech", "E-commerce", "SaaS"],
                  "stages": ["Startup", "Growth"],
                  "price": "₹ 349 per session",
                  Position:'Cofounder',
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                },
                {
                  "name": "James Lee",
                  "role": "DevOps Engineer at InfraTech",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "languages": ["English", "Korean"],
                  "description": "James has extensive experience in managing development operations for enterprise applications.",
                  "ratings": 4.9,
                  "sessions": 80,
                  "expertise": ["Docker", "Jenkins", "Kubernetes", "AWS"],
                  "industries": ["SaaS", "E-commerce", "Finance"],
                  "stages": ["Enterprise"],
                  "price": "₹ 499 per session",
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                },
                {
                  "name": "Olivia Davis",
                  "role": "Product Manager at InnovateNow",
                  "image":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAXPQ4zKTX0LFVmTeldb5xNWxvGWBoB-c_dQ&s",
                  "languages": ["English", "Spanish"],
                  "description": "Olivia has 7 years of experience managing product roadmaps and leading teams in agile environments.",
                  "ratings": 4.7,
                  "sessions": 64,
                  "expertise": ["Agile", "Scrum", "Product Management", "Jira"],
                  "industries": ["SaaS", "FinTech", "E-commerce"],
                  "stages": ["Growth", "Scale-up"],
                  "price": "₹ 399 per session",
                  Position:'Cofounder',
                  sessionsData: [
                    { title: "Introduction", duration: "45 minutes", price: "₹ 299 per session" },
                    { title: "Advanced UX", duration: "60 minutes", price: "₹ 499 per session" }
                  ],
                }
     
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedExpertise, setSelectedExpertise] = useState([]);
  const [selectedIndustry, setSelectedIndustry] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState('');
  const [rating, setRating] = useState('');

  const handleCategoryChange = (event) => setSelectedCategory(event.target.value);
  const handleExpertiseChange = (event) => {
    const { value, checked } = event.target;
    setSelectedExpertise((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)));
  };
  const handleIndustryChange = (event) => {
    const { value, checked } = event.target;
    setSelectedIndustry((prev) => (checked ? [...prev, value] : prev.filter((item) => item !== value)));
  };
  const handleLocationChange = (event) => setSelectedLocation(event.target.value);
  const handleRatingChange = (event) => setRating(event.target.value);

  const filterMentors = () => {
    return mockMentors.filter((mentor) => {
      const matchesCategory = selectedCategory ? mentor.Position?.includes(selectedCategory) : true;
      const matchesExpertise = selectedExpertise.length
        ? selectedExpertise.every((expertise) => mentor.expertise?.includes(expertise))
        : true;
      const matchesIndustry = selectedIndustry.length
        ? selectedIndustry.every((industry) => mentor.industries?.includes(industry))
        : true;
      const matchesLocation = selectedLocation ? mentor.languages?.includes(selectedLocation) : true;
      const matchesRating = rating ? mentor.ratings >= parseInt(rating, 10) : true;

      return matchesCategory && matchesExpertise && matchesIndustry && matchesLocation && matchesRating;
    });
  };

  const filteredMentors = filterMentors();

  return (
    <div className="flex justify-between pt-20">
      <div className="w-1/5 h-full bg-blue-200">
        <div className="bg-white p-4 shadow rounded-lg">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Category</label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={selectedCategory}
              onChange={handleCategoryChange}
            >
              <option value="">Select</option>
              <option value="Mentor">Mentor</option>
              <option value="Investor">Investor</option>
              <option value="Cofounder">Cofounder</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Expertise</label>
            {['JavaScript', 'Python', 'UX Design', 'React'].map((expertise) => (
              <div key={expertise}>
                <input
                  type="checkbox"
                  value={expertise}
                  checked={selectedExpertise.includes(expertise)}
                  onChange={handleExpertiseChange}
                />{' '}
                {expertise}
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Industries</label>
            {['E-commerce', 'Health Tech', 'EdTech', 'FinTech'].map((industry) => (
              <div key={industry}>
                <input
                  type="checkbox"
                  value={industry}
                  checked={selectedIndustry.includes(industry)}
                  onChange={handleIndustryChange}
                />{' '}
                {industry}
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Location</label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={selectedLocation}
              onChange={handleLocationChange}
            >
              <option value="">Select</option>
              <option value="English">English</option>
              <option value="Spanish">Spanish</option>
              <option value="French">French</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">Rating</label>
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={rating}
              onChange={handleRatingChange}
            >
              <option value="">Select</option>
              <option value="2">2 and above</option>
              <option value="3">3 and above</option>
              <option value="4">4 and above</option>
            </select>
          </div>
        </div>
      </div>
      <div className="w-4/5">
        
        {filteredMentors.map((profile, index) => (
          <ProfileCard key={index} profile={profile} />
        ))}
      </div>
    </div>
  );
};

export default Home;


