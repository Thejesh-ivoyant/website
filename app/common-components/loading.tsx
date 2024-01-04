const LoadingComponent = () => {
  return (
    <div className="loader ">
      {/* <div className="lds-facebook">  
      <img src="../assets/logoAnimated.gif" alt="Animated Logo" width="100%"  />
  </div> */}
       <div className="lds-facebook">
        <div></div>
        <div></div>
        <div></div>
      </div>
            
    </div>
  );
};

export default LoadingComponent;
