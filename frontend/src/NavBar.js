// components/NavBar.js

import Link from 'next/link';

function NavBar() {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/SubmitArticle">Submit Article</Link>
        </li>
        <li>
          <Link href="/ViewArticle">View Articles</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
