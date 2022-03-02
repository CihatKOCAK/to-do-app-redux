import React from "react";

function Footer() {
  return (
    <footer className="info">
      <p>Click to edit a todo</p>
      <p>
        Configrated by <a href="https://cihatkocak.com/">Cihat KOÇAK</a>
      </p>
    </footer>
  );
}

export default React.memo(Footer);