function animation() {
  const animations = document.querySelectorAll('[data-animation');
  animations.forEach(animation => {
    const animationStatus = animation.style.animationPlayState;
    console.log(animationStatus);
    if( animationStatus === 'running'){
      animation.style.animationPlayState = 'paused';
    }else{
      animation.style.animationPlayState = 'running';
    }
  });
}
 