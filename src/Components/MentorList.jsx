import React from 'react';
import ProfileCard from './ProfileCard';

const MentorList = ({ mentors }) => {
  return (
 
<div className="flex justify-end">
  <div className="w-4/5"> {/* Set a max-width for the container */}
  <ProfileCard/>
     
  </div>
</div>

  );
};

export default MentorList;
