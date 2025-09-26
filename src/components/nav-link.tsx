import { Link, useLocation, type LinkProps } from "react-router";

type NavLinkProps = LinkProps;

export function NavLink(props: NavLinkProps) {
  const { pathname } = useLocation();

  return (
    <Link
      data-current={props.to === pathname ? true : false}
      {...props}
      className="text-muted-foreground hover:text-foreground flex items-center gap-1.5 text-sm font-medium data-[current=true]:text-foreground"
    />
  );
}
