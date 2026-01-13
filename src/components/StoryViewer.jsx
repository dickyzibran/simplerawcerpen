function StoryViewer({ story, onBack }) {
  return (
    <div>
      <button onClick={onBack} style={{ marginBottom: "24px" }}>
        ← Kembali
      </button>

      <div style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(14px)",
        borderRadius: "20px",
        padding: "32px",
        boxShadow: "0 30px 60px rgba(0,0,0,0.4)"
      }}>
        <h1 style={{ marginBottom: "8px" }}>{story.title}</h1>
        <p style={{
          opacity: 0.6,
          marginBottom: "24px",
          fontSize: "14px"
        }}>
          {story.author}
        </p>

        <pre style={{
          whiteSpace: "pre-wrap",
          lineHeight: "1.9",
          fontSize: "16px",
          opacity: 0.9
        }}>
          {story.content}
        </pre>
      </div>
    </div>
  );
}

export default StoryViewer;
