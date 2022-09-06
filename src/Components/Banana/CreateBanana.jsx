function bananaClickHandle() {
    document.getElementById(`bananaId`).remove();
}

function CreateBanana() {
    // This defines a new creation of the banana element
    const newBananaImage = document.createElement("img");

    // Adds attributes to the banana element
    newBananaImage.setAttributeNS(null, 'id', `bananaId`);
    newBananaImage.setAttributeNS(null, 'class', 'banana');
    newBananaImage.setAttributeNS(null, 'alt', 'bananaPic');
    newBananaImage.setAttributeNS(null, 'src', '../images/banana.png');

    // Adds a click event to the banana element
    newBananaImage.addEventListener('click', bananaClickHandle);

    // Appends banana element to the the selected div
    document.getElementById('imageBox').appendChild(newBananaImage);
    
    // Delete old bananas
    setTimeout(() => {
        document.getElementById(`bananaId`).remove();
    }, 4000)
}

export default CreateBanana;