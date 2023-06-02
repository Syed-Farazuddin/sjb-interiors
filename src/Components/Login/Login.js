// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "../common/common.css";
// import axios from "axios";
// export const Login = (props) => {
//   // const [email, setEmail] = useState("");
//   // const [password, setPassword] = useState("");
//   const [data, setData] = useState([]);

//   // const navigate = useNavigate();
//   useEffect(() => {
//     console.log("Login Details ", data);
//   }, [data]);
//   // const handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   axios
//   //     .get(
//   //       `http://localhost:9090/interior/login?email=${email}&password=${password}`
//   //     )
//   //     .then((response) => {
//   //       setData(response.data);
//   //       console.log("Login Details ", data);
//   //       if (response.data.flag === "1") {
//   //         navigate("/admin-dashboard");
//   //       }
//   //     })
//   //     .catch((err) => {
//   //       console.log("Error ", err);
//   //     });
//   // };

//   return (
//     <>
//       <section id="login">
//         <div className="background"></div>
//         <div className="container">
//           {/* Left container */}

//           <div className="left-container">
//             <img src="/test9.jpg" alt="img" />
//             <div className="content">
//               <h2 className="logo">SBJ Interiors</h2>

//               <div className="text">
//                 <h2>
//                   Welcome! <br />
//                   <span>To our Website</span>
//                 </h2>
//                 <p>
//                   djfah asdf l osdafjo adsfj sdj askjd jh dasj la lasdfjlsd l{" "}
//                 </p>
//               </div>
//             </div>
//           </div>

//           {/* Right container */}

//           <div className="right-container">
//             <div className="logreg-box">
//               <div className="form_box login">
//                 <form action="#">
//                   <h2>Sign in</h2>

//                   <div className="input_box">
//                     <span className="icon">
//                       <i class="fa-solid fa-envelope"></i>
//                     </span>
//                     <input type="email" placeholder="Email" required />
//                     {/* <label>Email</label> */}
//                   </div>

//                   <div className="input_box">
//                     <span className="icon">
//                       <i class="fa-solid fa-lock"></i>
//                     </span>
//                     <input type="password" placeholder="Password" required />
//                     {/* <label>Password</label> */}
//                   </div>

//                   <div className="remember-forgot">
//                     <label>
//                       <input type="checkbox" />
//                       Remember me
//                     </label>
//                     <div>
//                       <a href="#">Forgot password? </a>
//                     </div>
//                   </div>

//                   <button className="button">Sign In</button>

//                   <div className="login-register">
//                     <p>
//                       Don't have an account?
//                       <a href="/register" className="register-link">
//                         {" "}
//                         Sign up
//                       </a>
//                     </p>
//                   </div>
//                 </form>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };
