import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "./useForm";
import queryString from "query-string";
import { getHeroesByName } from "../heroes/helpers";

export const useSearch = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const { q = "" } = queryString.parse(location.search);
    const heroes = getHeroesByName(q);

    const showSearch = q == "";
    const showError = q !== "" && heroes.length === 0;

    const { searchText, onInputChange, onResetForm } = useForm({
        searchText: "",
    });

    const onSubmitSearch = (e) => {
        e.preventDefault();
        navigate(`?q=${searchText.toLowerCase().trim()}`);
        onResetForm();
    };

    return {
        searchText,
        onInputChange,
        onSubmitSearch,
        showSearch,
        showError,
        heroes,
        q
    };
};
