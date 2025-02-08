import { useAuth } from "../utilities/AuthContext";
import UnAuthorized from "./UnAuthorized";
import { Link } from "react-router-dom";
const VendorLayout = () => {
  const { user } = useAuth();
  if (!user) {
    return (
      <div>
        Please <Link to={"/auth"}>log in </Link>to view this page.
      </div>
    );
  }
  if (user?.roleId < 2) {
    console.log("unAuth");
    return <UnAuthorized />;
  }
  return <div>VendorLayout</div>;
};

export default VendorLayout;
