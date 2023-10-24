import CardCounter from "./CardCounter";
import useCounter from "../../hooks/use-counter";

const ForwardCounter = () => {
  const counter = useCounter();

  return <CardCounter color="bg-green-700">{counter}</CardCounter>;
};

export default ForwardCounter;
