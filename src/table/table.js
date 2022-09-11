import React, {useState} from "react";
import ArrowDown from "../bow/arrow-down";
import ArrowUp from "../bow/arrow-up";


const Table = ({ sortData, contactData, directionSort, detailRow }) => {
 const [fieldData, setFieldData] = useState('')
 const Arrow = () => {
  return (
    directionSort? <ArrowDown/> : <ArrowUp/>
  )
 }

 const fieldSortData = (field) => {
 sortData(field)
 //console.log(field)
 setFieldData(field)
 }
  return (

    <table className="table">
      <thead className = 'thead'>
        <tr>
          <th onClick={() => {fieldSortData("id")}}>
        id {fieldData=== 'id'? <Arrow/> : null}
          </th>
          <th
            onClick={() => {fieldSortData("firstName");}}>
            firstName {fieldData=== 'firstName'? <Arrow/> : null}
          </th>
          <th
            onClick={() => {fieldSortData("lastName");}}>
            lastName {fieldData=== 'lastName'? <Arrow/> : null}
          </th>
          <th
            onClick={() => {fieldSortData("email");}}>
            email {fieldData=== 'email'? <Arrow/> : null}
          </th>
          <th
            onClick={() => {fieldSortData("phone");}}>
            phone {fieldData=== 'phone'? <Arrow/> : null}
          </th>
        </tr>
      </thead>
      <tbody>
        {contactData.map((item) => (
          <tr key={item.id + item.email}
           onClick={() => detailRow(item)}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
export default Table;
