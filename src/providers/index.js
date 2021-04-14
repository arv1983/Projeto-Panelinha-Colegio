import { UserProvider } from "./UserProvider";
import { LogRegProvider } from "./LogRegProvider";
import { VacProvider } from "./VacancieProvider";
import { TokenProvider } from "./TokenProvider";

const Providers = ({ children }) => {
  return (
    <UserProvider>
      <LogRegProvider>
        <VacProvider>
          <TokenProvider>{children}</TokenProvider>
        </VacProvider>
      </LogRegProvider>
    </UserProvider>
  );
};

export default Providers;
