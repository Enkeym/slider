import { useEffect, useState } from "react";
import { useGetSlidesQuery } from "../app/services/slides.api";
import Slider from "./Slider";
import WelcomeSlides from "./components/welcomeComponent/WelcomeComponent";

function App() {
  const [slides, setSlides] = useState([]);
  const { data, isLoading, isError, error } = useGetSlidesQuery();

  useEffect(() => {
    if (data) {
      setSlides(data || []);
    }
  }, [data]);

  return (
    <>
      {isLoading && <span>Loading...</span>}
      {isError && (
        <div>
          <span>The album could not be uploaded!</span>
          <p>{error?.message || "Unknown error occurred."}</p>
        </div>
      )}
      {slides?.length > 0 ? (
        <Slider slides={slides} interval={3000} />
      ) : (
        <WelcomeSlides />
      )}
    </>
  );
}

export default App;
