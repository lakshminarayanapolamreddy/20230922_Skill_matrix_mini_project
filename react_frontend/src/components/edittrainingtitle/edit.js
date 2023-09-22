import React from 'react'

function Edit(props) {
    const { state } = props.location;
    const data = state ? state.data : null;
  return (
   <>
     <div>
      <h1>Second Page</h1>
      {data && (
        <div>
          <p>Training ID: {data.TrainingId}</p>
          <p>Training Title: {data.TrainingTitle}</p>
          {/* Display other data */}
        </div>
      )}
    </div>
   </>
  )
}

export default Edit;