import { useEffect, useState } from "react";
import Input from "../Themes/Input";

const Home = () => {
  const initialFormData = {
    nameone: "",
    nametwo: "",
    namethree: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const [disable, setDisable] = useState(false);

  const handleCreate = (event) => {
    event.preventDefault();
    setDisable((prev) => !prev);
    setFormData(initialFormData);
  };

  const inputFieldData = ({ name, value }) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <div className="max-w-lg p-3 mx-auto mt-5">
      <form onSubmit={handleCreate}>
        <div className="mb-3">
          <Input
            name="nameone"
            change={inputFieldData}
            value={formData.nameone}
          />
        </div>
        <div className="mb-3">
          <Input
            name="nametwo"
            change={inputFieldData}
            value={formData.nametwo}
          />
        </div>
        <div className="mb-3">
          <Input
            name="namethree"
            change={inputFieldData}
            value={formData.namethree}
          />
        </div>
        <button disabled={disable} className="bg-blue-500 p-2 rounded-lg px-3">
          Craete New
        </button>
      </form>
    </div>
  );
};

export default Home;
