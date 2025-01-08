import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Navigation";

type DefaultLayoutProps = {
  children: React.ReactNode;
};

const DefaultLayout: React.FunctionComponent<DefaultLayoutProps> = ({
  children,
}) => {
  return (
    <div>
      <Navigation />
      {children}
      <Footer />
    </div>
  );
};

export default DefaultLayout;
