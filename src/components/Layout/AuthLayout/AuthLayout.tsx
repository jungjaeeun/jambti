type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FunctionComponent<AuthLayoutProps> = ({ children }) => {
  return <div>{children}</div>;
};

export default AuthLayout;
