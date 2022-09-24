import React from 'react';
import AddGroupBtn from './AddGroup/AddGroupBtn';
import AddGroupModal from './AddGroup/AddGroupModal';
import PageContent from "./PageContent";
import SideBar from "./SideBar";

const Home = () => {
    return (
        <div class="drawer drawer-mobile">
      <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
      <div class="drawer-content bg-slate-100">
        {/* <!-- Page content here --> */}
        <label
          tabindex="0"
          class="btn btn-primary btn-circle drawer-button lg:hidden"
          for="my-drawer-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h7"
            />
          </svg>
        </label>

        <PageContent />
        
      </div>
      <div class="drawer-side">
        <label for="my-drawer-2" class="drawer-overlay"></label>
        <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-gray-600">
          {/* <!-- Sidebar content here --> */}

          <SideBar />
        </ul>
      </div>
    </div>
    );
};

export default Home;