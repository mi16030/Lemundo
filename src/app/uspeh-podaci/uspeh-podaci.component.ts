import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  AbstractControl,
  ValidatorFn,
  Validators,
  ValidationErrors,
} from "@angular/forms";
import { Aukcija } from "../models/aukcija.model";

@Component({
  selector: "app-uspeh-podaci",
  templateUrl: "./uspeh-podaci.component.html",
  styleUrls: ["./uspeh-podaci.component.css"],
})
export class UspehPodaciComponent implements OnInit {
  public items: Aukcija[] = [];
  public checkoutForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      name: ["", [Validators.required, this.nameValidator()]],
      address: [
        "",
        [Validators.required, Validators.pattern("[0-9]+ [ a-zA-Z0-9]+")],
      ],
      email: ["", [Validators.required, Validators.email]],
      telefon: ["", [Validators.required, Validators.pattern("[0-9]+")]],
    });
  }

  ngOnInit() {}

  // This is a factory method - returns a function which serves as a custom validator
  public nameValidator(): ValidatorFn {
    // The validation function itself must return:
    // (1) in case of a successful validation:
    //     null
    // (2) in case of a failed validation:
    //     a validation error object
    return (control: AbstractControl): ValidationErrors | null => {
      const nameIsCorrect =
        control.value.split(" ").filter((el: string) => el !== "").length > 1;
      return nameIsCorrect ? null : { incorrectName: true };
    };
  }

  public submitForm(data): void {
    console.log(data);
    if (!this.checkoutForm.valid) {
      window.alert("Not valid!");
      return;
    }

    // Contact server here...
    this.checkoutForm.reset();
  }

  public get name() {
    return this.checkoutForm.get("name");
  }
  public get address() {
    return this.checkoutForm.get("address");
  }
  public get email() {
    return this.checkoutForm.get("email");
  }
  public get telefon() {
    return this.checkoutForm.get("telefon");
  }
}
