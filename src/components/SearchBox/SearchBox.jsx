import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { changeFilter, selectedNameFilter } from "../../redux/filters/slice";
const SearchBox = () => {
  const dispatch = useDispatch();
  const searchValue = useSelector(selectedNameFilter);
  const handleSearch = (event) => {
    dispatch(changeFilter(event.target.value));
  };
  return (
    <>
      <p>Find contacts by name</p>
      <input
        className={css.input}
        type="text"
        value={searchValue}
        onChange={handleSearch}
      />
    </>
  );
};
export default SearchBox;
