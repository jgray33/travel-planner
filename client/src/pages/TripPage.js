import React from 'react'
import Eat from '../components/Eat'

const Trip = () => {

    const styles = {
        column: {
            border: "solid 3px black",
            height: "100px"
        }
    }


    return (
        <div className="container">
        <div className="row row-eq-height">
          <div className="col" style={styles.column}>
            <Eat/>
          </div>
          <div className="col">
            Column
          </div>         
          <div className="col">
            Column
          </div>
          <div className="col">
            Column
          </div>
        </div>
      </div>
    )

    
}

export default Trip