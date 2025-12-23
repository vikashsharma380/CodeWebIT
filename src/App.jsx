import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import HomePage from "./HomePage";
import RegistrationPage from "./RegistrationPage";
import CoursesPage from "./CoursesPage";
import AboutPage from "./AboutPage";
import ContactPage from "./ContactPage";
import CertificateGenerator from "./CertificateGenerator";
import LoginPage from "./Login/LoginPage";

import AdminNavbar from "./Admin/AdminNavbar"; // ✅ ADDED
import AdminDashboard from "./Admin/AdminDashboard";
import AdminRoute from "./Admin/AdminRoute";
import AdminCreateUser from "./Admin/AdminCreateUser";
import AdminUsers from "./Admin/AdminUsers";
import AdminCollectFee from "./Admin/AdminCollectFee";
import EnrollPage from "./Student/EnrollPage";
import ManageCourses from "./Admin/ManageCourses";
import ManageBatches from "./Admin/ManageBatches";
import Problems from "./Student/Problems";
import Verification from "./Admin/CertificateVerification";
import MarksheetVerification from "./Admin/MarksheetVerification";
import TypingCertificateVerification from "./Admin/TypingCertificateVerification";
import CertificatesList from "./Admin/CertificatesList";

const AppContent = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  const hideWebsiteLayoutRoutes = ["/certificate"];

  const hideWebsiteLayout = hideWebsiteLayoutRoutes.includes(
    location.pathname
  );

  return (
    <div className="flex flex-col min-h-screen antialiased text-secondary bg-background">
      {/* ✅ WEBSITE HEADER */}
      {!isAdminRoute && <Header />}

      {/* ✅ ADMIN NAVBAR (STICKY & ALWAYS VISIBLE) */}
      {isAdminRoute && <AdminNavbar />}

      <main className={`flex-grow ${isAdminRoute ? "pt-28" : ""}`}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/courses" element={<CoursesPage />} />
          <Route path="/register" element={<RegistrationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/certificate" element={<CertificateGenerator />} />
          <Route path="/login" element={<LoginPage />} />

          <Route
            path="/admin"
            element={
              <AdminRoute>
                <AdminDashboard />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/create-user"
            element={
              <AdminRoute>
                <AdminCreateUser />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/users"
            element={
              <AdminRoute>
                <AdminUsers />
              </AdminRoute>
            }
          />
          <Route path="/problems" element={<Problems />} />
          <Route
            path="/admin/collect-fee"
            element={
              <AdminRoute>
                <AdminCollectFee />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/enroll"
            element={
              <AdminRoute>
                <EnrollPage />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/courses"
            element={
              <AdminRoute>
                <ManageCourses />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/verification"
            element={
              <AdminRoute>
                <Verification />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/marksheet-verification"
            element={
              <AdminRoute>
                <MarksheetVerification />
              </AdminRoute>
            }
          />
          <Route
            path="/admin/typing-verification"
            element={
              <AdminRoute>
                <TypingCertificateVerification />
              </AdminRoute>
            }
          />

          <Route
            path="/admin/batches"
            element={
              <AdminRoute>
                <ManageBatches />
              </AdminRoute>
            }
          />


          <Route
  path="/admin/certificates"
  element={
    <AdminRoute>
      <CertificatesList />
    </AdminRoute>
  }
/>

        </Routes>
      </main>

      {/* ✅ WEBSITE FOOTER */}
      {!isAdminRoute && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
