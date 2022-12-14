let bananaIdNumCount = 0;

function CreateBanana(prop) {

    bananaIdNumCount ++;

    const bananaId = bananaIdNumCount;

    // This defines a new creation of the banana element
    const newBananaImage = document.createElement("img");

    // Adds attributes to the banana element
    newBananaImage.setAttributeNS(null, 'id', `bananaId${bananaId}`);
    newBananaImage.setAttributeNS(null, 'class', 'banana');
    newBananaImage.setAttributeNS(null, 'alt', 'bananaPic');
    newBananaImage.setAttributeNS(null, 'src', '../images/banana.png');

    // Adds a click event to the banana element
    newBananaImage.addEventListener('click', bananaClickHandle);

    // Appends banana element to the the selected div
    document.getElementById('imageBox').appendChild(newBananaImage);
    
    // Delete old bananas
    setTimeout(() => {
        if(document.getElementById(`bananaId${bananaId}`)) {
            document.getElementById(`bananaId${bananaId}`).remove();
            prop({
                type: 'MISSED_BANANA'
            })
        }
    }, 4000)

    // Delete clicked bananas
    function bananaClickHandle() {
        document.getElementById(`bananaId${bananaId}`).remove();
        prop({
            type: 'CAUGHT_BANANA'
        })
    }
}

export default CreateBanana;