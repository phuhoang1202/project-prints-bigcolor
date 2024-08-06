import { Route, Routes, useNavigate } from "react-router-dom";
import Homepage from "./pages/users/Homepage";
import DetailProduct from "./pages/users/DetailProduct";
import AllProduct from "./pages/users/AllProduct";
import Loading from "./components/users/loading/Loading";
import { useState } from "react";
import { Button, Result } from "antd";
import NotFound from "./pages/users/NotFound";
import Content from "./components/users/content/index";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userRole, setUserRole] = useState("");
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // const token = getToken("token") || "";
  // useEffect(() => {
  //   if (token) {
  //     const decodedToken = jwtDecode(token);
  //     try {
  //       const userRoles = decodedToken.authorities || [];
  //       setIsAuthenticated(true);
  //       setUserRole(userRoles[0]);

  //       // Get current user
  //       callApiAuthen(`/api/v1/user/current`, "get", null)
  //         .then((res) => {
  //           localStorage.setItem("userInfo", JSON.stringify(res.data));
  //         })
  //         .catch((error) => {
  //           if (error.response.status === 401) {
  //             removeToken("token");
  //             localStorage.removeItem("userInfo");
  //             navigate("/login");
  //           }
  //         });
  //     } catch (error) {
  //       setIsAuthenticated(false);
  //       setUserRole("");
  //     }
  //   } else {
  //     setIsAuthenticated(false);
  //     setUserRole("");
  //   }
  //   setLoading(false);
  // }, [token]);

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/detail-product" element={<DetailProduct />}></Route>
        <Route path="/all-product" element={<AllProduct />}></Route>
        <Route path="/content" element={<Content />}></Route>
        <Route
          path="/admin/*"
          element={
            isAuthenticated && userRole === "role_admin" ? (
              <AdminLayout />
            ) : (
              <Result
                status="403"
                title={<div className="text-black">403</div>}
                subTitle={
                  <div className="text-black">
                    Sorry, you are not authorized to access this page.
                  </div>
                }
                extra={
                  <Button onClick={() => navigate("/login")}>Login now</Button>
                }
              />
            )
          }
        ></Route>
        {/* <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPass />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
