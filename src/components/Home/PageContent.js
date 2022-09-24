/* eslint-disable no-unused-vars */
import { collection } from "firebase/firestore";
import React from "react";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { database } from "../../firebase.init";
import AddGroupBtn from "./AddGroup/AddGroupBtn";
import AddGroupModal from "./AddGroup/AddGroupModal";
import Card from "./Card";

const PageContent = () => {
  const query = collection(database, "groups");
  const [docs, loading, error, snapshot] = useCollectionData(query);

  return (
    <>
      <div className="p-5 text-gray-700">
        <h3 className="font-bold">Hi Shakir!</h3>
        {loading && "Loading..."}

        <div className="grid grid-cols-3 gap-6 my-5">
          {docs?.map((doc) => (
            <Card 
            key={Math.random()}
            doc={doc}
            ></Card>
          ))}
        </div>
      </div>

      <AddGroupBtn />
      <AddGroupModal />
    </>
  );
};

export default PageContent;
