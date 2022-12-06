import Link from "next/link";

const NextLink = ({ children, ...props }) => {
  const { scroll, className = "", target } = props;

  return (
    <Link {...props} scroll={scroll === true}>
      <a className={className} target={target}>
        {children}
      </a>
    </Link>
  );
};

export default NextLink;
