import React from "react";

export default function Error() {
  return (
    <>
      {" "}
      <div className="w-100 d-flex justify-content-center mt-4">
        <img src="/imgs/error.svg" width={500} height={500} alt="error" />
      </div>
      <div className="w-100 d-flex justify-content-center mt-4">
        <h4 className="font">NO result found!</h4>
      </div>
    </>
  );
}
