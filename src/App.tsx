interface AppProps {
  header: string;
  extra?: string;
}

const App = ( { header, extra= "default" }: AppProps ) => {
  return (
    <>
      <h1>{header}</h1>
      {extra && <p>{extra}</p>}
    </>
  );
}

export default App;
