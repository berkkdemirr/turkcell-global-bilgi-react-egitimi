import CardCounter from "./CardCounter";
import useCounter from "../../hooks/use-counter";

const BackwardCounter = () => {
  const counter = useCounter(false);

  return <CardCounter color="bg-red-700">{counter}</CardCounter>;
};

export default BackwardCounter;
