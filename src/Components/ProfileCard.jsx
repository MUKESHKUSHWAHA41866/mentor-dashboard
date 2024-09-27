 


import React, { useState } from "react";

const ProfileCard = ({profile}) => {
  const [selectedTab, setSelectedTab] = useState("Expertise");

 

 

   
  const renderContent = () => {
    switch (selectedTab) {
      case "Expertise":
        return profile?.expertise?.join(", ");
      case "Industries":
        return profile?.industries?.join(", ");
      case "Stages":
        return profile?.stages?.join(", ");
      default:
        return "Select a tab";
    }
  };

  return (
     
    <div className="flex justify-center p-4">
  <div className="w-screen"> 
    <div className=" p-6 bg-white rounded-lg shadow-md flex  justify-center items-center divide-x-2">
     

    <div className="flex">
      <div className="text-nowrap p-2">
        <img
          src={profile?.image}
          alt={profile?.name}
          className="w-24 h-24 rounded-md object-cover mr-6"
        />
        <div className="flex items-center mt-3">
          <span className="text-2xl">⭐</span>
          <span className="text-lg font-bold ml-1">{profile.ratings} Ratings</span>
        </div>
        <p className="text-gray-500 mt-1">{profile.sessions} Sessions</p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold">
          {profile?.name} <span className="text-blue-500">✔</span>
        </h2>
        <p className="text-gray-500">{profile.Position}</p>
        <p className="text-gray-600">🌐 {profile?.languages.join(", ")}</p>
        <p className="text-gray-700">{profile?.role}</p>
        <p className="text-gray-600 mt-2 text-sm">
          {profile.description}
        </p>

         
        <div className="flex space-x-2 mt-3">
          <button
            className={`${
              selectedTab === "Expertise"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-purple-600"
            } px-3 py-1 rounded-full`}
            onClick={() => setSelectedTab("Expertise")}
          >
            Expertise
          </button>
          <button
            className={`${
              selectedTab === "Industries"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-purple-600"
            } px-3 py-1 rounded-full`}
            onClick={() => setSelectedTab("Industries")}
          >
            Industries
          </button>
          <button
            className={`${
              selectedTab === "Stages"
                ? "bg-purple-600 text-white"
                : "bg-gray-200 text-purple-600"
            } px-3 py-1 rounded-full`}
            onClick={() => setSelectedTab("Stages")}
          >
            Stages
          </button>
        </div>

        {/* Content Section */}
        <p className="text-gray-700 mt-2">{renderContent()}</p>
      </div>
    </div>

    {/* Right Section - Booking */}
    <div className="w-1/2 p-2">
      <h3 className="text-lg font-semibold mb-2">Book a session</h3>
      <ul className="space-y-2">
        {profile?.sessionsData?.map((session, index) => (
          <div key={index}>
            <li className="flex justify-between">
              <span>● {session.title}</span>
            </li>
            <li className="flex text-nowrap justify-between">
              <span>{session.duration}</span>
              <span>{session.price}</span>
            </li>
            <hr />
          </div>
        ))}
      </ul>
      <button className="mt-4 bg-blue-500 text-white px-6 py-2 rounded-lg w-full">
        Follow
      </button>
    </div>
  </div>
  </div>
  </div>

  );
};

export default ProfileCard;


