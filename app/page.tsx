"use client"
import Link from 'next/link';
import "./styles.css"


export default function HomePage() {
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        justifyContent: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
        }}
      >
        SafoneApi
      </h1>
      <code
        style={{
          fontSize: '1.2rem',
          fontWeight: 'bold',
          marginBottom: '1rem',
          border: '1px solid #eaeaea',
          borderRadius: '5px',
          width: 'fit-content',
          padding: '1rem',
          alignSelf: 'center',
          cursor: 'pointer',
          background: 'black',
          color: '#eaeaea',
        }}
        onClick={() => {
          navigator.clipboard.writeText('pip install -U multifeatures');
          alert('Copied to clipboard!');
        }}
      >
        <pre
          style={{
            margin: '0',
            display: 'flex-horizontal',
          }}
        >
          <b style={{ color: '#f39c12' }}>pip</b>
          <b style={{ color: '#3498db' }}> install</b>
          <b style={{ color: '#2ecc71' }}> -U</b>
          <b style={{ color: '#e74c3c' }}> safoneAPI</b>
        </pre>
      </code>

      <p
        style={{
          margin: '1rem',
          fontSize: '1.2rem',
        }}
      >
        For documentation, head to {' '}
        <Link
          href="/docs"
          style={{
            fontWeight: '600',
            textDecoration: 'underline',
          }}
        >
          /docs
        </Link>{''}.
      </p>
      <Link
        href="/docs"
        style={{
          alignSelf: 'center',
        }}>
        <div className="tooltip-container"
        >
          <span className="tooltip">Yay! ❤️‍🔥</span>
          <span className="text">Docs</span>
        </div>
      </Link>

    </main>
  );
}
