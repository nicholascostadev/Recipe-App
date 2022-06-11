import { useEffect, useState } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";

function Recipe() {
  let params = useParams();

  const [details, setDetails] = useState();
  const [activeTab, setActiveTab] = useState("instructions");

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await fetch(
        `https://api.spoonacular.com/recipes/${params.name}/information?apiKey=${process.env.REACT_APP_API_KEY}`
      );
      const detailData = await data.json();
      setDetails(detailData);
      console.log(detailData);
    };
    fetchDetails();
  }, [params.name]);

  return (
    <DetailWrapper>
      <div className="imageWrapper">
        <h2>{details?.title}</h2>
        <img src={details?.image} alt="" />
      </div>
      <Info>
        <Button
          className={activeTab === "instructions" ? "active" : ""}
          onClick={() => setActiveTab("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={activeTab === "ingredients" ? "active" : ""}
          onClick={() => setActiveTab("ingredients")}
        >
          Ingredients
        </Button>

        {activeTab === "instructions" && (
          <div>
            <p dangerouslySetInnerHTML={{ __html: details?.summary }}></p>
            <p dangerouslySetInnerHTML={{ __html: details?.instructions }}></p>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul>
            {details?.extendedIngredients.map((ingredient) => {
              return <li key={ingredient.id}>{ingredient.original}</li>;
            })}
          </ul>
        )}
      </Info>
    </DetailWrapper>
  );
}

const DetailWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  color: var(--gray-800);

  .active {
    background: var(--gray-900);
    color: var(--gray-50);
  }

  p {
    color: var(--gray-800);
    line-height: 1.25rem;
  }

  h2 {
    margin-bottom: 2rem;
  }

  ul {
    margin-top: 2rem;
    color: var(--gray-800);
  }

  li {
    margin-top: 0.5rem;
    font-size: 1rem;
    line-height: 1.25rem;

    @media (max-width: 865px) {
      margin-left: 1rem;
    }
  }

  img {
    border-radius: 0.5rem;
    box-shadow: 5px 5px 4px 2px rgba(0, 0, 0, 0.27);
  }

  @media (max-width: 1400px) {
    img {
      width: 450px;
    }
  }

  @media (max-width: 1120px) {
    img {
      width: 350px;
    }
  }

  @media (max-width: 865px) {
    flex-direction: column;

    img {
      width: 100%;
    }

    .imageWrapper {
      display: flex;
      flex-direction: column;
      justifycontent: center;
      align-items: center;
    }
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  margin-bottom: 1rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
  cursor: pointer;

  transition: all 0.2s;

  &:hover {
    background: var(--gray-800);
    color: var(--gray-50);
  }
`;

const Info = styled.div`
  margin-left: 5rem;
  display: flex;
  justifycontent: center;
  flex-direction: column;
  width: 700px;
  max-width: 100%;

  ul {
    margin-top: 0;
  }

  @media (max-width: 865px) {
    button {
      width: 100%;
    }
    margin-top: 2rem;
    margin-left: 0;
  }
`;

export default Recipe;
