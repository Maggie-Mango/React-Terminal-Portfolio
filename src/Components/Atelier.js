import React, { useState } from 'react';

const styles = {
  img: {
    width: "60%",
    height: "50%",
    padding: "0 20px",
    marginLeft: "auto",
    marginRight: "auto",
    paddingBottom: "20px",
    display: "block"
  }
}


const Atelier = () => {
  return (
    <div>
        <img src="https://res.cloudinary.com/dousz4spf/image/upload/v1647481725/Atelier.gif" style={styles.img}  alt="atelier gif" />
    </div>
  );
}

export default Atelier;