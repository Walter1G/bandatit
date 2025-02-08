import { useAuth } from "../utilities/AuthContext";
import UnAuthorized from "./UnAuthorized";
import { Link } from "react-router-dom";

const AdminLayout = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div>
        Please <Link to={"/auth"}>log in </Link>to view this page.
      </div>
    );
  }
  if (user?.roleId < 3) {
    console.log("unAuth");
    return <UnAuthorized />;
  }

  return <div>AdminLayout</div>;
};

export default AdminLayout;
