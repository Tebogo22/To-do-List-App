const inputElem = document.querySelector('#input-field')
const dislpayElem = document.querySelector('#display')
const submitBtn = document.querySelector('#submit-btn')

submitBtn.addEventListener('click', function(e){
		
			const inputValue = inputElem.value

			const newDiv = document.createElement('div')//Creating a div
			newDiv.setAttribute('class', "todo-elem")//Setting the styles defined in our CSS files
			newDiv.innerHTML = `<p id="myInputs">${inputValue}</p>`//Setting the innerHTML of the div to be a paragraph with a text
			
			const btn = document.createElement('button')//Creating a button
			btn.innerHTML = 'DELETE'//Setting the innerHTML/text of the button
			btn.setAttribute('id', "delete-btn")
			dislpayElem.append(newDiv)//Appending the whole new div to the display div defined in our HTML file
			newDiv.append(btn)//Appending the button to the end of the div so that the div now includes it.
			
			//Adding an event listener to the delete button of THIS div
			btn.addEventListener('click', function(e){
				e.preventDefault()
				newDiv.remove()
			})

			inputElem.value = ''

			console.log(newDiv)	
		
})






