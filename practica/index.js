const lista = ["element1", "element2", "element3", "element4", "element5"];

function elementos() {

  const listMap = lista.map((item) =>
    React.createElement("li", { key: item }, item)
  );

  return React.createElement("ul", null, listMap);
}

ReactDOM.render( 
    React.createElement(elementos, null, null ), 
    document.getElementById("root")
)

