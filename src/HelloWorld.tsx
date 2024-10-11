import React from "react";

export default function HelloWorld({ name }: { name: string }) {
  const [joke, setJoke] = React.useState("");
  React.useEffect(() => {
    fetch("https://api.chucknorris.io/jokes/random")
      .then((response) => response.json())
      .then((data) => setJoke(data.value));
  }, []);

  return (
    <div>
      <h1>Hello {name}!</h1>
      <q>{joke}</q>
    </div>
  );
}
