import { useState } from "react";
import * as S from "./styles";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

type SearchProps = {
  filterValue?: string;
};

export const Input = ({ filterValue }: SearchProps) => {
  const navigate = useNavigate();
  const [filter, setFilter] = useState(filterValue || "");

  const handleSearch = () => {
    navigate(`/questions?filter=${filter}`);
  };

  return (
    <S.Container>
      <S.Input value={filter} onChange={(e) => setFilter(e.target.value)} />
      <S.SearchButton onClick={handleSearch}>
        Search
        <FiSearch color={"white"} />
      </S.SearchButton>
    </S.Container>
  );
};
