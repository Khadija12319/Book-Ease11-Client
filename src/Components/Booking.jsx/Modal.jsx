import { useState } from "react";

const Modal = ({ isOpen, onClose, onSave }) => {
  const [newStartDate, setNewStartDate] = useState("");
  const [newEndDate, setNewEndDate] = useState("");

  const handleSave = () => {
    onSave(newStartDate, newEndDate);
    setNewStartDate("");
    setNewEndDate("");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-white p-10 rounded-md">
        <h2 className="text-2xl font-semibold mb-2">Update Date</h2>
        <div className="mb-4">
          <label className="block mb-1 text-xl">New Start Date:</label>
          <input
            type="date"
            value={newStartDate}
            onChange={(e) => setNewStartDate(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-8"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-1 text-xl">New End Date:</label>
          <input
            type="date"
            value={newEndDate}
            onChange={(e) => setNewEndDate(e.target.value)}
            className="border border-gray-300 rounded-md py-2 px-8"
          />
        </div>
        <div className="flex justify-between">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-md mr-2"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-md"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
