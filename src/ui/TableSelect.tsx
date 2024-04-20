import { useSearchParams } from 'react-router-dom';

function TableSelect({ selectField, options, ...props }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const value = searchParams.get(selectField) || options.at(0).value;

  function handleChange(e) {
    searchParams.set(selectField, e.target.value);
    setSearchParams(searchParams);
  }

  return (
    <select
      value={value}
      onChange={handleChange}
      {...props}
      className="dt-header__allsources_select"
    >
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

export default TableSelect;
