import React from "react";

const Button = ({ onClick, children }) => {

    return (
      <button
      style={{
        ouline:'0',
        border:'none',
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        cursor:'pointer',

        backgroundColor:'#395B64',
        padding:'0.8rem',
        color:"white",
        borderRadius: '22px',
        fontSize: '14px',
        fontFamily: 'poppins',
        fontWeight: 'bold'
      }}
      onClick={onClick}
      >
        {children}
      </button>
    );
  }

export default Button;
