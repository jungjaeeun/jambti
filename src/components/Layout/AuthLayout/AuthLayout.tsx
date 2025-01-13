type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FunctionComponent<AuthLayoutProps> = ({ children }) => {
  return (
    <div className="max-w-[400px] mx-auto text-center mt-24">{children}</div>
  );
};

export default AuthLayout;
