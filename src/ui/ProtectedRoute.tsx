import { PropsWithChildren } from "react";
import Spinner from "./Spinner";

type ProtectedRouteProps = {
  roles: string[];
};

function ProtectedRoute({ children, roles }: PropsWithChildren<ProtectedRouteProps>) {
  // const { isPending, user, error } = useUser();
  // const navigate = useNavigate();
  const isPending = false;
  console.log(roles);
  // useEffect(
  //   () => {
  //     if ((!user && !isPending) || (error && roles && !roles.some(role => user?.roles.includes(role)))) {

  //       return navigate('/login');
  //     }
  //   },
  //   [user, roles, navigate, isPending, error]
  // );


  if (isPending) {
    return (
      <div className="full-page">
        <Spinner />
      </div>
    );
  }

  return children;
}

export default ProtectedRoute;
