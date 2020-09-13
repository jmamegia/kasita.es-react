import { useContext, useEffect } from "react";
import Context from "../Context/SectionsContext";
import {
  getSections,
  deleteSection,
  updateSection,
} from "../Services/services";
import AppContext from "../Context/AppContext";

export default () => {
  const { sections, setSections } = useContext(Context);
  const { token } = useContext(AppContext);

  const updateSections = () => {
    getSections().then((data) => {
      setSections(data);
    });
  };
  useEffect(updateSections, []);

  const addSection = async (name) => {
    let response = await updateSection(name, token);
    if (response) updateSections();
  };

  const delSection = async (section) => {
    let response = await deleteSection(section, token);
    if (response) updateSections();
  };
  return { sections, updateSections, addSection, delSection };
};
