import { useContext } from "react";
import AppContext from "../Context/AppContext";
import { updateSection } from "../Services/services";

export default function () {
  const { token } = useContext(AppContext);
  const addSection = async (name) => {
    let response = await updateSection(name, token);
    return response;
  };

  return { addSection };
}
