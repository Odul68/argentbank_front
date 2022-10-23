import { useSelector } from "react-redux";
import store from "../Redux/store";
import { updateProfileInfo } from "../Redux/actions";
import { useState, useRef } from "react";

export default function UserInformation() {
  const [show, setShow] = useState(false);
  const firstNameRef = useRef();
  const lastNameRef = useRef();

  let firstName = useSelector((state) => state.data.body.firstName);
  let lastName = useSelector((state) => state.data.body.lastName);

  const editData = () => {
    store.dispatch(
      updateProfileInfo(firstNameRef.current.value, lastNameRef.current.value)
    );

    setShow(() => false);
  };

  const cancelEdit = () => {
    setShow(() => false);
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName}&nbsp;{lastName}
      </h1>
      {show && (
        <div id="editName">
          <input
            ref={firstNameRef}
            type="text"
            id="inputFirstname"
            placeholder={firstName}
          ></input>
          <input
            ref={lastNameRef}
            type="text"
            id="inputLastname"
            placeholder={lastName}
          ></input>
          <button className="saveButton" onClick={() => editData()}>
            Confirm
          </button>
          <button id="cancelButton" onClick={() => cancelEdit()}>
            Cancel
          </button>
        </div>
      )}
      {!show && (
        <button
          id="editButton"
          className="edit-button"
          onClick={() => setShow(() => true)}
        >
          Edit Name
        </button>
      )}
    </div>
  );
}
