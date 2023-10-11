import Link from 'next/link';
import "./mainmenu.css";

function Home() {
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Link href="/SubmitArticle">Go to Submit Article</Link>
        <Link href="/ViewArticle">Go to View Articles</Link>
      </div>
    </div>
  );
}

export default Home;
