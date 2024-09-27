import React from 'react';

const Sidebar = () => {
  return (
    <aside className="bg-white p-4 w-1/4 h-screen fixed top-16">
      <div className="mb-6">
        <h3 className="font-bold mb-2">Category</h3>
        <select className="border w-full p-2 rounded">
          <option>Select</option>
          {/* Add more options */}
        </select>
      </div>
      <div className="mb-6">
        <h3 className="font-bold mb-2">Expertise</h3>
        <input
          type="text"
          className="border w-full p-2 rounded"
          placeholder="Search"
        />
         
      </div>
       
    </aside>
  );
};

export default Sidebar;
