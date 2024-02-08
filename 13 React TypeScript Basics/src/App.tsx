import Box from "./components/Box";

function App() {
  return (
    <>
      <div>
        {/* <Box
          // heading={23} //Type 'number' is not assignable to type 'string'
          heading="This is box heading"
          count={1}
          func={() => {
            alert("Function as a props");
          }}
          children={<div>This is children as a props</div>}
        /> */}

        {/* // children can also be pass as  */}
        {/* <Box
          // heading={23} //Type 'number' is not assignable to type 'string'
          heading="This is box heading"
          count={1}
          func={() => {
            alert("Function as a props");
          }}
        >
          {"This is also an example of passing children"}
        </Box> */}

        {/* // Generic  */}

        <Box label="Search" value={""} onChange={() => {}} />
      </div>
    </>
  );
}

export default App;
