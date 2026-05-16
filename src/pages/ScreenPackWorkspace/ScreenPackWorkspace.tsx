import "./ScreenPackWorkspace.css";

export function ScreenPackWorkspace() {
  return (
    <main className="app-shell">
      <aside className="side-nav" aria-label="Primary navigation">
        <h1 className="side-nav__title">Kaze AI Screen Pack Tester</h1>
        <nav className="side-nav__items">
          <button className="side-nav__item side-nav__item--active" type="button">
            Empty
          </button>
        </nav>
      </aside>

      <section className="empty-page" aria-label="Empty page" />
    </main>
  );
}
