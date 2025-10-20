export default function Footer() {
  return (
    <footer className="footer-balanced">
      <div className="footer-inner">
        <p className="footer-left">
          © {new Date().getFullYear()} Färkkilä Lab — All rights reserved.
        </p>
        <div className="footer-right">
          <a
            href="https://github.com/farkkilab"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://wiki.helsinki.fi/xwiki/bin/login/XWiki/XWikiLogin?srid=nIcMvTO7&xredirect=%2Fxwiki%2Fbin%2Fview%2FFL%2FFarkkila%2520Lab%2F%3Fsrid%3DnIcMvTO7"
            target="_blank"
            rel="noopener noreferrer"
          >
            Wiki
          </a>
        </div>
      </div>
    </footer>
  );
}
