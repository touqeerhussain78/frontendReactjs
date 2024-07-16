import { Routes, Route, BrowserRouter } from "react-router-dom";
import RecipientRoutes from "./recipients/Index";

function InternalRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<RecipientRoutes />} />
      </Routes>
    </BrowserRouter>
  )
}

export default InternalRoutes;