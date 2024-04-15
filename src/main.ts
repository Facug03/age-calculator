import './style.css'

const inputDay = document.getElementById('day')
const inputMonth = document.getElementById('month')
const inputYear = document.getElementById('year')

if (inputDay && inputMonth && inputYear) {
  inputDay.addEventListener('input', (event) => {
    if (event.target) {
      const inputTargetValue = (event.target as HTMLInputElement).value
      const { errorMessage, errorLabel } = getSiblingAndParentElement(inputDay)

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

        hasFinish()

        return
      }

      errorMessage.innerHTML = ''
      inputDay.classList.remove('errorBorder')
      errorLabel.classList.remove('errorText')

      hasFinish()
    }
  })

  inputMonth.addEventListener('input', (event) => {
    if (event.target) {
      let inputTargetValue = (event.target as HTMLInputElement).value
      const { errorMessage, errorLabel } =
        getSiblingAndParentElement(inputMonth)

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

        hasFinish()

        return
      }

      errorMessage.innerHTML = ''
      inputMonth.classList.remove('errorBorder')
      errorLabel.classList.remove('errorText')

      hasFinish()
    }
  })

  const currentYear = new Date().getFullYear()

  inputYear.addEventListener('input', (event) => {
    if (event.target) {
      const inputTargetValue = (event.target as HTMLInputElement).value
      const { errorMessage, errorLabel } = getSiblingAndParentElement(inputYear)

      if (!errorMessage || !errorLabel) return

      if (
        (!inputTargetValue.match(/^[0-9]*$/) ||
          inputTargetValue.length > 4 ||
          Number(inputTargetValue) > currentYear ||
          Number(inputTargetValue) < 1900) &&
        inputTargetValue.length > 0
      ) {
        errorMessage.innerHTML = 'Must be a valid year'
        if (!inputYear.classList.contains('errorBorder')) {
          inputYear.classList.add('errorBorder')
        }

        if (!errorLabel.classList.contains('errorText')) {
          errorLabel.classList.add('errorText')
        }

        hasFinish()

        return
      }

      errorMessage.innerHTML = ''
      inputYear.classList.remove('errorBorder')
      errorLabel.classList.remove('errorText')

      hasFinish()
    }
  })

  const hasFinish = () => {
    const inputDayValue = Number((inputDay as HTMLInputElement).value)
    const inputMonthValue = Number((inputMonth as HTMLInputElement).value)
    const inputYearValue = Number((inputYear as HTMLInputElement).value)

    const userYears = document.getElementById('userYears')
    const userMonths = document.getElementById('userMonths')
    const userDays = document.getElementById('userDays')

    if (!userYears || !userMonths || !userDays) return

    if (
      inputDayValue <= 0 ||
      inputMonthValue <= 0 ||
      inputYearValue <= 0 ||
      isNaN(inputDayValue) ||
      isNaN(inputMonthValue) ||
      isNaN(inputYearValue)
    ) {
      userYears.innerText = '- -'
      userMonths.innerText = '- -'
      userDays.innerText = '- -'

      return
    }

    if (
      inputDayValue > 32 ||
      inputMonthValue > 12 ||
      inputYearValue > currentYear ||
      inputYearValue < 1900
    ) {
      userYears.innerText = '- -'
      userMonths.innerText = '- -'
      userDays.innerText = '- -'

      return
    }

    console.log('xd')

    const birth = new Date(inputYearValue, inputMonthValue - 1, inputDayValue)
    const currentDate = new Date()

    const ageInMilliseconds = currentDate.getTime() - birth.getTime()
    const ageInYears = Math.floor(
      ageInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)
    )
    let remainingMilliseconds =
      ageInMilliseconds - ageInYears * 1000 * 60 * 60 * 24 * 365.25
    const ageInMonths = Math.floor(
      remainingMilliseconds / (1000 * 60 * 60 * 24 * (365.25 / 12))
    )
    remainingMilliseconds =
      remainingMilliseconds - ageInMonths * 1000 * 60 * 60 * 24 * (365.25 / 12)
    const ageInDays = Math.floor(remainingMilliseconds / (1000 * 60 * 60 * 24))

    userYears.innerText = ageInYears.toString()
    userMonths.innerText = ageInMonths.toString()
    userDays.innerText = ageInDays.toString()
  }
}

const getSiblingAndParentElement = (
  element: HTMLElement
): {
  errorMessage: Element | null
  errorLabel: HTMLElement | null
} => {
  const errorMessage = element.nextElementSibling
  const errorLabel = element.parentElement

  return {
    errorMessage,
    errorLabel,
  }
}
