function StoryList({ stories, onSelect }) {
  return (
    <div>
      <h1 style={{ marginBottom: "24px", fontSize: "32px" }}>
        📖 Cerpen Pilihan
      </h1>

      {stories.map(story => (
        <div
          key={story.id}
          onClick={() => onSelect(story)}
          style={{
            padding: "20px",
            marginBottom: "16px",
            background: "rgba(255,255,255,0.08)",
            backdropFilter: "blur(12px)",
            borderRadius: "16px",
            cursor: "pointer",
            transition: "transform 0.3s, box-shadow 0.3s"
          }}
          onMouseEnter={e => {
            e.currentTarget.style.transform = "translateY(-4px)";
            e.currentTarget.style.boxShadow =
              "0 20px 40px rgba(0,0,0,0.4)";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.transform = "translateY(0)";
            e.currentTarget.style.boxShadow = "none";
          }}
        >
          <h3 style={{ marginBottom: "6px" }}>{story.title}</h3>
          <div style={{ fontSize: "13px", opacity: 0.7 }}>
            {story.author}
          </div>
        </div>
      ))}
    </div>
  );
}

export default StoryList;
