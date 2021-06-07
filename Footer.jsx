import React from "react";

function Footer() {
  var curryear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright @ {curryear}</p>
    </footerr>
  );
}

export default Footer;
