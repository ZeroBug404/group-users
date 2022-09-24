import React from "react";
import { collection, addDoc } from "firebase/firestore";
import { database } from "../../../firebase.init";

const AddGroupModal = () => {
  //api to add group
  const handleAddGroupSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const groupDetail = e.target.groupDetail.value;
    const collectionRef = collection(database, `groups`);
    // console.log(collectionRef);
    addDoc(collectionRef, {
      name: name,
      groupDetail: groupDetail,
    })
    .then(() => {
      console.log('Added');
    })
    .catch((err) => {
      console.log(err.message);
    })

    e.target.reset();
  };

  return (
    <div>
      <input type="checkbox" id="addTaskModal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box text-gray-700 font-sans">
          <label
            htmlFor="addTaskModal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h2 className="text-center my-5 font-bold text-2xl">Add New Group</h2>
          <form className="flex flex-col" onSubmit={handleAddGroupSubmit}>
            <input
              className="text-1xl border-b-4 outline-0 my-5"
              type="text"
              name="name"
              placeholder="Enter new group name"
            />

            <textarea
              className="h-24 outline-0 py-5 border-b-4 text-1xl"
              name="groupDetail"
              id=""
              cols="20"
              rows="10"
              placeholder="Enter group deatil"
            ></textarea>
            
            {/* <label >
              Save
            </label> */}
            <button htmlFor="addTaskModal" className="btn mt-4
            ">Save</button>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddGroupModal;
