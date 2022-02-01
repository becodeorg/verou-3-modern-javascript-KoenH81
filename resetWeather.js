const container = document.querySelector(".container");
// reset function
const resetWeather = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    };
}
export default resetWeather;