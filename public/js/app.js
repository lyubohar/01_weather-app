const jsonUrl = 'http://localhost:3000/data.json'

const formElement = document.querySelector('form')
const selectElement = document.getElementById('js-region-selector')
const inputElement = document.querySelector('input')
const messageElement = document.getElementById('js-message')

const defaultOptionElement = document.createElement('option')

defaultOptionElement.text = 'Choose region';
selectElement.add(defaultOptionElement);

fetch(jsonUrl)
    .then((response) => {

            // Handle error accessing json file
            if (response.status !== 200) {
                messageElement.textContent = 'Sorry, there was a problem accessing the database.'
                inputElement.disabled = true;
                return;
            }

            // Show JSON items as options
            response.json().then((data) => {
                for (let i = 0; i < data.length; i++) {
                    option = document.createElement('option');
                    option.text = data[i].region;
                    option.value = data[i].temperature;
                    selectElement.add(option);
                }
            });
        }
    ).then(() => {
        // Read JSON value on submit and show as message
        formElement.addEventListener('submit', (e) => {
            e.preventDefault()
            const selectedOptionValue = selectElement.value
            messageElement.textContent = selectedOptionValue
        })
    }).catch((error) => {
    console.log('Error:', error)
})
