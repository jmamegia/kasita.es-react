import { useContext } from "react";
import useSection from "./useSection";
import AppContext from "../Context/AppContext";
import { deleteLink, updateLink } from "../Services/services";
export const useLink = () => {
  const { token } = useContext(AppContext);
  const { updateSections } = useSection();

  const delLink = async (link) => {
    let res = await deleteLink(link, token);
    if (res) updateSections();
  };
  const updtLink = async (link) => {
    let res = await updateLink(link, token);
    if (res) updateSections();
  };
  return { delLink, updtLink };
};
