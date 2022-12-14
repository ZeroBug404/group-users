/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { addDoc, collection, getDocs, setDoc, where, query } from "firebase/firestore";
import React, { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import auth, { database } from "../../../firebase.init";

const Register = () => {
  const [group, setGroup] = useState();
  const queryAll = collection(database, "groups");
  const [docs, dbLoading, dbError, snapshot] = useCollectionData(queryAll);

  // console.log(group);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    createUserWithEmailAndPassword(email, password);

    // const groupDetail = e.target.groupDetail.value;

    const collectionRef = collection(database, `groups`);
    const payload = { name, password, group };
    const docRef = query(collectionRef, where('name','==',group));
    const snapshot =  await getDocs(docRef);
    const results = snapshot.docs.map(doc => ({...doc.data(), id: doc.id}))
    console.log(results);
    results.forEach(async result => {
      const newCollectionRef = collection(database, `groups/${result.id}/users`);
      await addDoc(newCollectionRef, payload);
    })

    e.target.reset();
  };

  if (user) {
    navigate("/home");
  }

  const navigateLogin = () => {
    navigate("/login");
  };


  return (
    <section class="h-screen">
      <div class="px-6 h-full text-gray-800">
        <div class="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6">
          <div class="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="w-full"
              alt="Sample image"
            />
          </div>
          <div class="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
            <form onSubmit={handleRegister}>
              <div class="flex flex-row items-center justify-center lg:justify-start">
                <p class="text-lg mb-0 mr-4">Sign up with</p>
                <button
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="light"
                  class="inline-block p-3 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded-full shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out mx-1"
                >
                  {/* <!-- Facebook --> */}
                  <BsGoogle />
                </button>
              </div>

              <div class="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5">
                <p class="text-center font-semibold mx-4 mb-0">Or</p>
              </div>

              {/* <!-- Name input --> */}
              <div class="mb-6">
                <input
                  type="text"
                  name="name"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Full name"
                />
              </div>

              {/* <!-- Email input --> */}
              <div class="mb-6">
                <input
                  type="email"
                  name="email"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Email address"
                />
              </div>

              {/* <!-- Password input --> */}
              <div class="mb-6">
                <input
                  type="password"
                  name="password"
                  class="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  placeholder="Password"
                />
              </div>

              <div className="">

                <h1>Selected Group: {group}</h1>
                <select
                  id="fruits"
                  value={group}
                  onChange={(e) => setGroup(e.target.value)}
                >
                  {docs?.map((doc) => (
                    <option>{doc.name}</option>
                  ))}
                </select>

                
              </div>

              <div class="text-center lg:text-left">
                <input
                  type="Submit"
                  class="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                />

                <p class="text-sm font-semibold mt-2 pt-1 mb-0">
                  Already have an account?
                  <Link
                    to="/login"
                    className="text-primary pe-auto text-decoration-none"
                    onClick={navigateLogin}
                  >
                    Please Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
