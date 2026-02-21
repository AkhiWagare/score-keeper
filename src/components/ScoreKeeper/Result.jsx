import React from "react";

export const Result = ({overResult}) => (
    <div>
      {overResult.map((thisRun, ind) => (
        <React.Fragment key={ind}>
          {ind % 6 === 0 ? <br /> : null}
          <p>{thisRun.run}: {thisRun.cmnt}</p>
          &nbsp; &nbsp; &nbsp;
        </React.Fragment>
      ))}
    </div>
)