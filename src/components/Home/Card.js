import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useState } from "react";
import { ImCross } from "react-icons/im";
import Modal from "react-modal";
import { database } from "../../firebase.init";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const Card = ({ doc }) => {
  // const [docs, dbLoading, dbError] = useCollectionData(qury);
  const { name, groupDetail } = doc;
  const [users, setUsers] = useState([]);

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  // function openModal() {

  // }

  //   function afterOpenModal() {
  //     subtitle.style.color = '#f00';
  //   }

  function closeModal() {
    setIsOpen(false);
  }

    const collectionRef = collection(database, `groups`);
    const docRef = query(collectionRef, where("name", "==", name));
    const snapshot =  getDocs(docRef);
    const results = snapshot.docs?.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    results?.forEach( (result) => {
      const newCollectionRef = collection(
        database,
        `groups/${result.id}/users`
      );
      const snapshot2 =  getDocs(newCollectionRef);
      const results2 = snapshot2.docs?.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      console.log(results2);
      // results2?.forEach( (result2) => {
      //   console.log(results2);
      //   setUsers(result2);
      // })
    });

  const handleGroupDetail = async () => {
    // to open the modal
    setIsOpen(true);

    // const groupDetail = e.target.groupDetail.value;

    // const collectionRef = collection(database, `groups`);
    // const docRef = query(collectionRef, where("name", "==", name));
    // const snapshot = await getDocs(docRef);
    // const results = snapshot.docs?.map((doc) => ({
    //   ...doc.data(),
    //   id: doc.id,
    // }));
    // results.forEach(async (result) => {
    //   const newCollectionRef = collection(
    //     database,
    //     `groups/${result.id}/users`
    //   );
    //   const snapshot2 = await getDocs(newCollectionRef);
    //   const results2 = snapshot2.docs?.map((doc) => ({
    //     ...doc.data(),
    //     id: doc.id,
    //   }));
    //   results2.forEach(async (result2) => {
    //     console.log(result2);
    //     users=result;
    //     // await users.push(result2);
    //   })
    // });

  };
  console.log(users);
  return (
    <div>
      <div className="card bg-gray-600 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{groupDetail}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Register</button>
            <button className="btn btn-bg-cyan-600" onClick={handleGroupDetail}>
              Details
            </button>
          </div>
        </div>
      </div>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className="flex justify-end">
          <button onClick={closeModal}>
            <ImCross className="text-slate-700"></ImCross>
          </button>
        </div>
        <h2 className="text-slate-700 font-semibold text-xl text-center">
          {/* {users?.map((user) => (
            <h2>{user.name}</h2>
          ))} */}
        </h2>
      </Modal>
    </div>
  );
};

export default Card;
