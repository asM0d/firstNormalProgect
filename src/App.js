import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "./table/table";
import "bootstrap/dist/css/bootstrap.min.css";
import Loader from "./loader/loader";
import DetailedItem from "./detaile/detaleItem"; 

function App() {
  const baseUrl =
    "http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D";

  const [contactData, setContactData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [directionSort, setDirectionSort] = useState(true);
  const [rowItem, setrowItem] = useState("");

  const sortData = (field) => {
    //console.log(field);
    const copyData = contactData.concat();
    let sortData;
    if (directionSort) {
      sortData = copyData.sort((a, b) => {
        return a[field] > b[field] ? 1 : -1;
      });
    }
    sortData = copyData.reverse((a, b) => {
      return a[field] > b[field] ? 1 : -1;
    });
    setContactData(sortData);
    setDirectionSort(!directionSort);
    //console.log(directionSort);
  };

  useEffect(() => {
    axios.get(baseUrl).then((res) => {
      //console.log(res);
      setContactData(res.data);
      setIsLoading(false);
    });
  }, []);

  const detailRow = (row) => {
    //console.log(row)
    setrowItem(row);
  };
  return (
    <div className="container">
      {isLoading ? (
        <Loader />
      ) : (
        <Table
          contactData={contactData}
          sortData={sortData}
          directionSort={directionSort}
          detailRow={detailRow}
        />
      )}
      <DetailedItem detailItemData={rowItem}  />
      
    </div>
  );
}

export default App;
