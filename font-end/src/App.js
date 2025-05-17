// import React, { Fragment } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import { routes } from './routes';
// import DefaultComponent from './components/DefaultComponent';

// export default function App() {
//   return (
//     <Router>
//       <Routes>
//         {routes.map((route, index) => {
//           const Page = route.page;
//           const Layout = route.isShowHeader ? DefaultComponent : Fragment;

//           return (
//             <Route
//               key={index}
//               path={route.path}
//               element={
//                 <Layout>
//                   <Page />
//                 </Layout>
//               }
//             >
//               {route.children && route.children.map((child, childIndex) => (
//                 <Route
//                   key={childIndex}
//                   path={child.path}
//                   element={<child.page />}
//                 />
//               ))}
//             </Route>
//           );
//         })}
//       </Routes>
//     </Router>
//   );
// }
import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import DefaultComponent from './components/DefaultComponent';
import PrivateRoute from './routes/PrivateRoute'; 
import { routes } from './routes';

export default function App() {
  const user = useSelector((state) => state.user.current);

  return (
    <ErrorBoundary>
       <Router>
      <Routes>
        {routes.map((route, index) => {
          const Page = route.page;
          const Layout = route.isShowHeader ? DefaultComponent : Fragment;

          if (route.isPrivate) {
            return (
              <Route
                key={index}
                path={route.path}
                element={
                  <PrivateRoute user={user}>
                    <Layout>
                      <Page />
                    </Layout>
                  </PrivateRoute>
                }
              >
                {route.children && route.children.map((child, childIndex) => (
                  <Route
                    key={childIndex}
                    path={child.path}
                    element={<child.page />}
                  />
                ))}
              </Route>
            );
          }

          return (
            <Route
              key={index}
              path={route.path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            >
              {route.children && route.children.map((child, childIndex) => (
                <Route
                  key={childIndex}
                  path={child.path}
                  element={<child.page />}
                />
              ))}
            </Route>
          );
        })}
        <Route path="*" element={<Navigate to="/not-found" />} />
      </Routes>
    </Router>
      </ErrorBoundary>
   
  );
}




class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Cập nhật state để hiển thị giao diện fallback
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Bạn có thể log lỗi vào một service logging ở đây
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Giao diện fallback khi có lỗi
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
