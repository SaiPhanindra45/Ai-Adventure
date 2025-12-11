function LoadingStatus({ theme}) {
  return  <div className="loading-container">
<h2>Generating Your Story Based on {theme}</h2>

<div className="loading-animation">
    <div className="spinner"></div>
</div>
  <p className="loadinng-info">
    Please wait while we craft a unique story for you...
  </p>
</div>
}

export default LoadingStatus