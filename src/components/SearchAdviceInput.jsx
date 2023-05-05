import { useEffect, useState } from "react";
import "./styles/SearchAdviceInput.css";
import { adviceSlipService } from "../services/AdviceSlipService";

export default function SearchAdviceInput() {
  const [query, setQuery] = useState("");

  const searchAdvice = async (query) => {
    return await adviceSlipService
      .searchAdviceByQuery(query)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
  };

  useEffect(() => {
    if (query.length >= 3) {
      searchAdvice(query);
    }
  }, [query]);

  return (
    <>
      <input
        className="search-advice-input"
        type="text"
        placeholder="Search for advice"
        onChange={(event) => setQuery(event.target.value)}
      />
    </>
  );
}
