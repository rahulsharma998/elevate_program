function debounce(fun,delay){
    let time;{
        return function(){
            clearTimeout(time);
            time=setTimeout(fun,delay);
        };
};
}