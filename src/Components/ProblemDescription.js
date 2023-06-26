import React,{useState , useEffect} from "react";
import Data from "./data.json";
import { useParams } from "react-router-dom";


const ProblemDescription = () => {
  const {id} = useParams();
 
  const [itemData, setItemData] = useState(null);

  useEffect(() => {
    if (id) {
      const selectedItem = Data.find((item) => item.id === id);
      setItemData(selectedItem);
    }
    // const selectedItem = Data.find(item => item.id === id);
    // setItemData(selectedItem);
  }, [id]);

  if (!itemData) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="problem-container">
      <p>{itemData.id}</p>
      <h1>{itemData.title}</h1>
      <h2>{itemData.description}</h2>
    </div>
  );
};

export default ProblemDescription;
