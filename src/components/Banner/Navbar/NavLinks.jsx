const NavLinks = () => {
  return (
    <>
      <li>
        <a
          onClick={() => {
            document.getElementById("home")?.scrollIntoView();
          }}
          className="font-bold cursor-pointer"
        >
          HOME
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            document.getElementById("about")?.scrollIntoView();
          }}
          className="cursor-pointer"
        >
          ABOUT
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            document.getElementById("name-input").focus();
            document.getElementById("book-now")?.scrollIntoView();
          }}
          className="cursor-pointer"
        >
          BOOK A RIDE
        </a>
      </li>
      <li>
        <a
          onClick={() => {
            document.getElementById("contact")?.scrollIntoView();
          }}
          className="cursor-pointer"
        >
          CONTACT
        </a>
      </li>
    </>
  );
};

export default NavLinks;
