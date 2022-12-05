import Link from "next/link";

const NextLink = ({ children, ...props }) => {
  const { href, scroll } = props;

  return (
    <Link href {...props} scroll={scroll === true}>
      {children}
    </Link>
  );
};

export default NextLink;
