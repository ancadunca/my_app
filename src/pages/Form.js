import React, { useState } from "react";
import "tailwindcss/tailwind.css";
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "/firebase";
import SourcesInput from "./SourcesInput";
import "../styles/form.module.css";

const Form = () => {
  const [name, setName] = useState("");
  const [access, setAccess] = useState("");
  const [purpose, setPurpose] = useState("");
  const [mode, setMode] = useState("");
  const [refference, setRefference] = useState("");
  const [chat, setChat] = useState("");
  const [size, setSize] = useState("");
  const [selectedSources, setSelectedSources] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const db = firebase.firestore();
    const docRef = db.collection("users").doc();
    await docRef.set({
      name,
      access,
      purpose,
      mode,
      refference,
      chat,
      size,
      selectedSources,
    });
    // reset the form fields
    setName("");
    setAccess("");
    setPurpose("");
    setMode("");
    setRefference("");
    setChat("");
    setSize("");
    setSelectedSources([]);
  };

  return (
    <div className="container_form flex justify-center">
      <form onSubmit={handleSubmit} className=" form w-full max-w-lg">
        <div className="input flex flex-wrap -mx-3 mb-6" id="header">
          <div className="flex w-full justify-between px-3">
            <label className="general_label" htmlFor="name">
              General
            </label>
            <button>Save</button>
          </div>
        </div>
        <div className="input name_input flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label htmlFor="name">Name</label>
            <input
              className="appearance-none block w-full bg-white-200 text-textcolor-700 border border-customlight-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-custom"
              id="name"
              type="text"
              placeholder="Active input text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="input flex flex-wrap -mx-3 mb-6">
          <div className="flex-1 px-3">
            <label htmlFor="email">Access</label>
            <select
              className="block appearance-none w-full bg-white-200 border border-customlight-200 text-textcolor-700 py-3 px-4  rounded leading-tight focus:outline-none focus:bg-white focus:border-custom"
              id="email"
              type="email"
              placeholder="Public"
              value={access}
              onChange={(e) => setAccess(e.target.value)}
            >
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
          <div className="flex-1 px-3">
            <label htmlFor="email">Purpose</label>
            <select
              className="block appearance-none w-full bg-white-200 border border-customlight-200 text-textcolor-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-custom"
              id="email"
              type="email"
              placeholder="Support Agent"
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
            >
              <option>Support Agent</option>
              <option>Sales Agent</option>
              <option>Development</option>
            </select>
          </div>
        </div>
        <div className="input flex flex-wrap -mx-3 mb-6">
          <div className="flex-1 px-3">
            <label htmlFor="email">Mode</label>
            <select
              className="block appearance-none w-full bg-white-200 border border-customlight-200 text-textcolor-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-custom"
              id="email"
              type="email"
              placeholder="Chat"
              value={mode}
              onChange={(e) => setMode(e.target.value)}
            >
              <option>Chat</option>
              <option>Email</option>
              <option>Phone</option>
            </select>
          </div>
          <div className="flex-1 px-3">
            <label htmlFor="email">Refference</label>
            <select
              className="block appearance-none w-full bg-white-200 border border-customlight-200 text-textcolor-200 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-custom"
              id="email"
              type="email"
              placeholder="Inlcude as link"
              value={refference}
              onChange={(e) => setRefference(e.target.value)}
            >
              <option>Inlcude as link</option>
              <option>Inlcude as pdf</option>
              <option>Inlcude as image</option>
            </select>
          </div>
        </div>
        <div className="input flex flex-wrap -mx-3 mb-6">
          <div className="flex-1 px-3">
            <label htmlFor="email">Limit chat to x messages</label>
            <input
              placeholder="10"
              className="appearance-none block w-full bg-white-200 text-textcolor-700 border border-customlight-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-custom"
              value={chat}
              onChange={(e) => setChat(e.target.value)}
            />
          </div>
          <div className="flex-1 px-3">
            <label htmlFor="email">Context size</label>
            <select
              className="block appearance-none w-full bg-white-200 border border-customlight-200 text-textcolor-700 py-3 px-4 rounded leading-tight focus:outline-none focus:bg-white focus:border-custom"
              id="email"
              type="email"
              placeholder="Small"
              value={size}
              onChange={(e) => setSize(e.target.value)}
            >
              <option>Small</option>
              <option>Medium</option>
              <option>Big</option>
            </select>
          </div>
        </div>

        <div className="input flex flex-wrap -mx-3 mb-6">
          <div className="flex-1 px-3">
            <label htmlFor="email">Sources</label>
            <SourcesInput
              selectedSources={selectedSources}
              setSelectedSources={setSelectedSources}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
