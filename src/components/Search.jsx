import styled from "styled-components";
import { useState } from "react";

import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

function Search() {
  const [input, setInput] = useState("");
  const navigate = useNavigate();

  const submitHandler = (e) => {
    e.preventDefault();
    // navigate("/searched/" + input);
    navigate("/searched/" + input);
  };

  return (
    <div>
      <FormStyle>
        <form onSubmit={submitHandler}>
          <div>
            <FaSearch></FaSearch>
            <input
              onChange={(e) => {
                setInput(e.target.value);
              }}
              type="text"
              value={input}
            />
            </div>
            {/* <h1>{search}</h1> */}
        
        </form>
      </FormStyle>
    </div>
  );
}
const FormStyle = styled.div`
  margin: 0rem 12rem;
  div {
    position: relative;
    width: 100%;
  }
  input {
    border: none;
    outline: none;
    padding: 1rem;
    background: linear-gradient(35deg, #494949, #313131);
    border-radius: 1rem;
    color: white;
    font-size: 1.2rem;
    width: 100%;
  }
  svg {
    color: white;
    position: absolute;
    top: 50%;
    right: 0%;
    transform: translate(-50%,-50%);
  }
`;

export default Search;
