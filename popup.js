document.getElementById('enter-button').addEventListener('click', function(e) {
    e.preventDefault();
    const textInput = document.getElementById('text-input').value;
    console.log(textInput);
});