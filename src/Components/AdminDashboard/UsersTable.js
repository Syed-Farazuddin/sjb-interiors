import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./table.css";

const UsersTable = () => {
  const email = "syedfaiz@gmail.com";
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  console.log("Data ", data);

  useEffect(() => {
    if (data.length === 0) {
      axios
        .get(`http://localhost:9090/interior/getAllEmployees?email=${email}`)
        .then((response) => {
          setData(response.data);
          console.log("DataBase ", data);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    }
  }, [data]);

  return (
    <div className="full-width">
      <div className="table-wrapper">
        <div className="table-container">
          <table>
            <tr key="index">
              <th >USERID</th>
              <th>FIRSTNAME</th>
              <th>LASTNAME</th>
              <th>EMAIL</th>
              <th>PHONENUMBER</th>
              <th>ADDRESS</th>
              <th>PASSWORD</th>
              <th>FLAG</th>
              <th>ACTIONS</th>
            </tr>
            {data.map((obj, index) => {
              return (
                <tr key="index">
                  <td>{obj.userId}</td>
                  <td>{obj.firstName} </td>
                  <td>{obj.lastName}</td>
                  <td>{obj.email}</td>
                  <td>{obj.phoneNumber}</td>
                  <td>{obj.address}</td>
                  <td>{obj.password}</td>
                  <td>{obj.flag}</td>
                  <td>Edit  Delete</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <button onClick={() => navigate("/")}>BACK TO HOME</button>
    </div>
  );
};

export default UsersTable;
