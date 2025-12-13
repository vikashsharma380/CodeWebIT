import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import RegistrationPage from "./RegistrationPage";
import CoursesPage from "./CoursesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import CertificateGenerator from "./CertificateGenerator";
import LoginPage from "./Login/LoginPage";
import AdminDashboard from "./Admin/AdminDashboard";
import AdminRoute from "./Admin/AdminRoute";
import AdminCreateUser from "./Admin/AdminCreateUser";
import AdminUsers from "./Admin/AdminUsers";
import AdminCollectFee from "./Admin/AdminCollectFee";
import EnrollPage from "./Student/EnrollPage";
import ManageCourses from "./Admin/ManageCourses";  
import ManageBatches from "./Admin/ManageBatches";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen antialiased text-secondary bg-background">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/courses" element={<CoursesPage />} />
            <Route path="/register" element={<RegistrationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
           <Route path="/certificate" element={<CertificateGenerator />} />
           <Route path="/login" element={<LoginPage />} />
          <Route path="/admin"element={<AdminRoute><AdminDashboard /></AdminRoute>}/>
<Route
  path="/admin/create-user"
  element={
    <AdminRoute>
      <AdminCreateUser />
    </AdminRoute>
  }
/>


<Route path="/admin/users" element={<AdminRoute><AdminUsers/></AdminRoute>} />
<Route path="/admin/collect-fee" element={<AdminRoute><AdminCollectFee/></AdminRoute>} />
<Route path="/admin/enroll" element={<AdminRoute><EnrollPage/></AdminRoute>} />
<Route path="/admin/courses" element={<AdminRoute><ManageCourses/></AdminRoute>} />
<Route path="/admin/batches" element={<AdminRoute><ManageBatches/></AdminRoute>} />


          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
