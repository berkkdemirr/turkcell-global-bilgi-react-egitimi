import { useRef } from "react";

const FormUseRef = () => {
  // const [name, setName] = useState("");
  const inputRef = useRef();
  
  function handleSubmit(e) {
    e.preventDefault();
    console.log(inputRef.current.placeholder);
    // const name = inputRef.current.value;
    // alert("Girilen isim: " + name);
  }

  return (
    <form className="inline-flex flex-col gap-y-2" onSubmit={handleSubmit}>
      <input
        type="text"
        ref={inputRef}
        placeholder="İsim Yazınız..."
        // onChange={(e) => setName(e.target.value)}
        className="text-black"
      />
      <button className="bg-blue-500">Göster</button>
    </form>
  );
};

export default FormUseRef;
