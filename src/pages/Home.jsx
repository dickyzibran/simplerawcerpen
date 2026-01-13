import { useState } from "react";
import { stories } from "../data/stories";
import StoryList from "../components/StoryList";
import StoryViewer from "../components/StoryViewer";

function Home() {
  const [selectedStory, setSelectedStory] = useState(null);

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "48px 24px",
        maxWidth: "720px",
        margin: "auto",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center"
      }}
    >
      <div style={{ width: "100%" }}>
        {selectedStory ? (
          <StoryViewer
            story={selectedStory}
            onBack={() => setSelectedStory(null)}
          />
        ) : (
          <StoryList
            stories={stories}
            onSelect={setSelectedStory}
          />
        )}
      </div>
    </div>
  );
}

export default Home;
