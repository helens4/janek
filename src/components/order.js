import React from "react";
import "./Order.css";

const Order = () => {
  const fileInputRef = React.createRef();
  let file;

  const openFileDialog = () => {
    fileInputRef.current.click();
  };

  const onFilesAdded = evt => {
    file = evt.target.files;
    const name = file.item(0).name;
    document.querySelector(".fileName").textContent = name;
    console.log(name);
  };

  const checkAndSend = () => {
    console.log("send file");
    fetch("https://path/to/api", {
      method: "POST",
      body: file
    })
      .then(response => response.json())
      .then(success => {
        //sukces
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="order">
      <main>
        <section className="left">
          <h1> New printing order </h1>
          <input type="text" placeholder="Title" />
          <div>
            <p>Print type </p>
            <button> Select </button>
          </div>
          <div>
            <p className="fileName">file.doc</p>
            <button onClick={openFileDialog}>
              <input
                type="file"
                name="file_upload"
                ref={fileInputRef}
                onChange={onFilesAdded}
              />
              Select
            </button>
          </div>
          <div>
            <p>Payment type</p>
            <button> Select </button>
          </div>
          <div>
            <p>Delivery type</p>
            <button> Select </button>
          </div>
          <div>
            <p>Delivery date</p>
            <button> Select </button>
          </div>
        </section>
        <section className="right">
          <div className="order-data">
            <div>
              <span> Pages: </span>
              <span>78</span>
            </div>
            <div>
              <span> Type: </span>
              <span>Color(25) Black(53)</span>
            </div>
            <div>
              <span> Delivery: </span>
              <span>Pickup (Bażyńskiego)</span>
            </div>
            <div>
              <span> Date: </span>
              <span>20.07.2019</span>
            </div>
            <div className="order-price">
              Price: <span> 77 PLN </span>
            </div>

            <button className="order-button" onClick={checkAndSend}>
              Pay and Order
            </button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Order;
