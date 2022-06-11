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
        <div class="container">
        <div class="row row-eq-height">
          <div class="col" style={styles.column}>
            <Eat/>
          </div>
          <div class="col">
            Column
          </div>         
          <div class="col">
            Column
          </div>
          <div class="col">
            Column
          </div>
        </div>
      </div>
    )

    
}

export default Trip