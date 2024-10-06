import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetSlidesQuery } from "../app/services/slides.api";
import { setSlides } from "../features/create.slice";
import Slider from "./Slider";
import WelcomeSlides from "./components/welcomeComponent/WelcomeComponent";

function App() {
  const dispatch = useDispatch();
  const slides = useSelector((state) => state.slides.slides);
  const { data, isLoading, isError, error } = useGetSlidesQuery();

  useEffect(() => {
    if (data) {
      dispatch(setSlides(data || []));
    }
  }, [data, dispatch]);

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
