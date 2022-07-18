import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  form: FormGroup = new FormGroup({
    name: new FormControl('', Validators.required),
    companyName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', [Validators.required, this.phoneValidator]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', Validators.required),
  })


  phoneValidator(control: FormControl) {
    const regex = /(?=.*[a-zA-z])|(?=.*[#$@!%&*?])/.test(control.value)
    if (control.value.length !== 13 || !control.value.includes('+380') || regex) {
      return { lengthError: true }
    } else {
      return null
    }
  }

  submitForm() {
    console.log(this.form.value)
  }

  scrollUp() {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
