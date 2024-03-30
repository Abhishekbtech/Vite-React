import { useState } from 'react';

function App() {
  const [color, setColor] = useState("olive")

  return (

    // with help of Tailwin

    // <div className="w-full h-screen duration-200"
    //   style={{ backgroundColor: color }}
    // >
    //   <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
    //     <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
    //       <button
    //         onClick={() => setColor("red")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "red" }}
    //       >Red</button>
    //       <button
    //         onClick={() => setColor("green")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "green" }}
    //       >Green</button>
    //       <button
    //         onClick={() => setColor("blue")}
    //         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
    //         style={{ backgroundColor: "blue" }}
    //       >Blue</button>
    //     </div>
    //   </div>
    // </div>


    // with help of CSS
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: color,
        transition: "background-color 0.2s"
      }}
    >
      <div
        style={{
          position: "fixed",
          display: "flex",
          justifyContent: "space-evenly",
          marginLeft: "550px",
          marginRight:"550px",
          backgroundColor:"white",
          bottom: "3rem",
          left: 0,
          right: 0,
          padding: "0.5rem 1rem",
          gap:"1rem",
          borderRadius: "50px",
        }}
      >
        <button
          onClick={() => setColor("red")}
          style={{
            outline: "none",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            color: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            backgroundColor: "red"
          }}
        >
          Red
        </button>
        <button
          onClick={() => setColor("green")}
          style={{
            outline: "none",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            color: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            backgroundColor: "green"
          }}
        >
          Green
        </button>
        <button
          onClick={() => setColor("blue")}
          style={{
            outline: "none",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            color: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            backgroundColor: "blue"
          }}
        >
          Blue
        </button>
        <button
          onClick={() => setColor("black")}
          style={{
            outline: "none",
            padding: "0.5rem 1rem",
            borderRadius: "9999px",
            color: "white",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
            cursor: "pointer",
            backgroundColor: "black"
          }}
        >
          Blue
        </button>
      </div>
    </div>
  )
}

export default App
