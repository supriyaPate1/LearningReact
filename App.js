// to create simple <h1>Hello world by react</h1>
// const heading=React.createElement("h1",{id:"heading"},"Hello world by react!")
//     const root=ReactDOM.createRoot(document.getElementById("root"))
//     console.log(root)
//     root.render(heading)

// if we have to include multiple tags example
//     <div>
//   <div>
//     <h1>hello world by react</h1>
//   </div>
// </div>

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement("h1", { id: "heading" }, "hi I am heading 1")
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(root);
root.render(parent);
// if we have to include sibling tags example
//     <div>
//   <div>
//     <h1>hello world by react</h1>  here h1 and h2 are siblings
//     <h2>hello world by react</h2>
//   </div>
// </div>
const parent1 = React.createElement(
  "div",
  { id: "parent" }, 
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "hi I am heading 1"),
    React.createElement("h2", { id: "heading" }, "hi I am heading 2"),
  ])
);
const root11 = ReactDOM.createRoot(document.getElementById("root"));
console.log(root11);
root.render(parent1);
