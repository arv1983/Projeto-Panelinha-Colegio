import { UserProvider } from "./UserProvider";
import { LogRegProvider } from "./LogRegProvider";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <LogRegProvider>{children}</LogRegProvider>
    </UserProvider>
  );
};

export default Providers;
