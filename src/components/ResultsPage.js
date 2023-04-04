import useResults from "../utils/useResults";
// import { Link } from "react-router-dom";
import Error from "./Error";

const ResultsPage = () => {
  const videoResults = useResults();
  console.log(videoResults);

  return videoResults >= "200" ? (
    <Error
      statusCode={videoResults}
      errorMessage={
        "The results API is exceeded the limit, please try again later!"
      }
    />
  ) : (
    <div className=" w-full h-screen font-roboto"></div>
  );
};

export default ResultsPage;
