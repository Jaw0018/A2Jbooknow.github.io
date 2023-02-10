const $contactForm = document.querySelector('#js-contact-form')

$contactForm.addEventListener('submit', handleSubmit)

async function handleSubmit(e) {
	// to prevent from refreshing the page on submit
	e.preventDefault()
	
	const $form = e.target,
		$fullName = $form.querySelector('#fullName'),
		$email = $form.querySelector('#email'),
		$package = $form.querySelector('#package'),
        $date = $form.querySelector('#date'),
        $time = $form.querySelector('#time'),
        $phone = $form.querySelector('#phone'),
		response = await fetch('https://api.apispreadsheets.com/data/6ssHgpNvjZ9kIt6j',
                   {
                       method: 'POST',
                       body: JSON.stringify({
                          data: {
                              FULLNAME: $fullName.value,
                              EMAIL: $email.value,
                              PACKAGE: $package.value,
                              DATE: $date.value,
                              TIME: $time.value,
                              PHONE_NO: $phone.value

                          }
                        })
                     }
                 )
                 
              if (response.status === 201) alert('Form Submitted Successfully !')
              else alert('Please Try Again !')
              
              $form.reset()
}