import './style.css'

const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')

if (inputDay && inputMonth && inputYear) {
  inputDay.addEventListener('input', (event) => {
    if (event.target) {
      const inputTargetValue = (event.target as HTMLInputElement).value
      const errorMessage = inputDay.nextElementSibling
      const errorLabel = inputDay.parentElement

      if (!errorMessage || !errorLabel) return

      if (
        !inputTargetValue.match(/^[0-9]*$/) ||
        Number(inputTargetValue) > 31
      ) {
        errorMessage.innerHTML = 'Must be a valid day'
        if (!inputDay.classList.contains('errorBorder')) {
          inputDay.classList.add('errorBorder')
        }

        if (!errorLabel.classList.contains('errorText')) {
          errorLabel.classList.add('errorText')
        }

        return
      }

      errorMessage.innerHTML = ''
      inputDay.classList.remove('errorBorder')
      errorLabel.classList.remove('errorText')
    }
  })

  inputMonth.addEventListener('input', (event) => {
    if (event.target) {
      const inputTargetValue = (event.target as HTMLInputElement).value
      const errorMessage = inputMonth.nextElementSibling
      const errorLabel = inputMonth.parentElement

      if (!errorMessage || !errorLabel) return

      if (
        !inputTargetValue.match(/^[0-9]*$/) ||
        Number(inputTargetValue) > 12
      ) {
        errorMessage.innerHTML = 'Must be a valid month'
        if (!inputMonth.classList.contains('errorBorder')) {
          inputMonth.classList.add('errorBorder')
        }

        if (!errorLabel.classList.contains('errorText')) {
          errorLabel.classList.add('errorText')
        }

        return
      }

      errorMessage.innerHTML = ''
      inputMonth.classList.remove('errorBorder')
      errorLabel.classList.remove('errorText')
    }
  })

  inputYear.addEventListener('input', (event) => {
    if (event.target) {
      const inputTargetValue = (event.target as HTMLInputElement).value
      const errorMessage = inputYear.nextElementSibling
      const errorLabel = inputYear.parentElement

      if (!errorMessage || !errorLabel) return
      const currentYear = new Date().getFullYear()

      if (
        !inputTargetValue.match(/^[0-9]*$/) ||
        inputTargetValue.length > 4 ||
        Number(inputTargetValue) > currentYear
      ) {
        errorMessage.innerHTML = 'Must be a valid year'
        if (!inputYear.classList.contains('errorBorder')) {
          inputYear.classList.add('errorBorder')
        }

        if (!errorLabel.classList.contains('errorText')) {
          errorLabel.classList.add('errorText')
        }

        return
      }

      errorMessage.innerHTML = ''
      inputYear.classList.remove('errorBorder')
      errorLabel.classList.remove('errorText')
    }
  })
}
