import React from "react";
import Modal from 'react-modal';
import {ImCross} from 'react-icons/im'

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  
  Modal.setAppElement('#root');
  

const Card = ({ doc }) => {
  const { name, groupDetail } = doc;

  let subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

//   function afterOpenModal() {
//     subtitle.style.color = '#f00';
//   }

  function closeModal() {
    setIsOpen(false);
  }
  

  const handleRegister = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const groupDetail = e.target.groupDetail.value;
    // const collectionRef = collection(database, `groups`);
    // // console.log(collectionRef);
    // addDoc(collectionRef, {
    //   name: name,
    //   groupDetail: groupDetail,
    // })
    // .then(() => {
    //   console.log('Added');
    // })
    // .catch((err) => {
    //   console.log(err.message);
    // })

    // e.target.reset();
  };
  return (
    <div>
      <div className="card bg-gray-600 text-neutral-content">
        <div className="card-body items-center text-center">
          <h2 className="card-title">{name}</h2>
          <p>{groupDetail}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={openModal}>Register</button>
            <button className="btn btn-bg-cyan-600">Details</button>
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
        <h2 className="text-slate-700 font-semibold text-xl text-center">Register to {name}</h2>

        <form className="flex flex-col w-96" onSubmit={handleRegister}>
            <input
              className="text-1xl border-b-4 outline-0 my-5"
              type="text"
              name="name"
              placeholder="Enter username"
              required
            />
            <input
              className="text-1xl border-b-4 outline-0 my-5"
              type="password"
              name="password"
              placeholder="Enter password"
              required
            />
            <input
              className="text-1xl border-b-4 outline-0 my-5"
              type="password"
              name="password"
              placeholder="Confirm password"
              required
            />

            <button className="btn mt-4
            ">Save</button>
          </form>
      </Modal>

    </div>
  );
};

export default Card;
