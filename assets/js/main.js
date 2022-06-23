function boxAnimation() {
  const boxIdSelector = document.getElementById("box-animate");
  const animationStatus = boxIdSelector.style.animationPlayState;
  if( animationStatus === 'running'){
    boxIdSelector.style.animationPlayState = 'paused';
  }else{
    boxIdSelector.style.animationPlayState = 'running';
  }
}
 