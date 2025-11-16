
export default function Home() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      padding: '40px',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1 style={{ fontSize: '36px', fontWeight: 'bold' }}>
        Junaid Mujawar - Cybersecurity Portfolio
      </h1>

      <p style={{ marginTop: '20px', fontSize: '18px' }}>
        This is a clean replica-style homepage based on your Gamma site layout.
        You can customize content, sections, and styling freely.
      </p>

      <section style={{ marginTop: '40px' }}>
        <h2>About Me</h2>
        <p>
          Add your introduction, background, objectives, and profile summary here.
        </p>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>Projects</h2>
        <ul>
          <li>Project 1 - Description</li>
          <li>Project 2 - Description</li>
          <li>Project 3 - Description</li>
        </ul>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>Contact</h2>
        <p>Email: yourname@example.com</p>
      </section>
    </main>
  );
}
