import { useDispatch } from "react-redux";
import { Dispatch, UnknownAction } from "redux";
import { factActions } from "../features/randomFact";

function GetFact() {
  const dispatch = useDispatch();
  async function fetchFact() {
    dispatch(factActions.isFetching());

    const URL = "https://uselessfacts.jsph.pl/api/v2/facts/random?language=en";

    try {
      const response = await fetch(URL);
      const json = await response.json();
      const randomFact = json.text as string;
      console.log(randomFact);
      dispatch(factActions.isSuccess(randomFact));
    } catch {
      console.log("error");
      dispatch(factActions.isFailure());
    }
  }

  return <button onClick={() => fetchFact()}> Get fact!</button>;
}

export default GetFact;
