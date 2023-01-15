const DisplayCard = () => {
  return (
    <div className="display-card">
      <div className="crypto-info">
        <p> Bitcoin {"\u2192"} USD </p>
        <div className="rounded-green-circle"></div>
      </div>
      <div  style={{ marginTop:"20px"}}> <span className="amount">Amount</span>  
      <span className="crypt-val"> BTC 2.56565656</span> 
      </div>
    </div>
  );
};

export default DisplayCard;
