import Link from 'next/link';

const linkStyle = {
  marginRight: 15
};

const Header = () => (
  <div>
    <Link href="/">
      <a style={linkStyle}>Home</a>
    </Link>
    <Link href="/about">
      <a style={linkStyle}>About</a>
    </Link>
    <form className="example" action="action_page.php">
      <input type="text" placeholder="Search Movie or Show" name="search" />
      <button type="submit">Submit</button>
    </form>
  </div>
);

export default Header;