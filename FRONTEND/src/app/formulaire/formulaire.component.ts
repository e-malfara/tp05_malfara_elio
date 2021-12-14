import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Utilisateur } from 'src/shared/modeles/Utilisateur';
import { AuthentificationService } from '../service/authentification.service';

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  formLogin!: FormGroup;
  utilisateur$!: Observable<Utilisateur>;
  constructor(private formBuilder: FormBuilder, private authentificationService: AuthentificationService) { }

  ngOnInit(): void {
    this.formLogin = this.formBuilder.group({
      login: ["", [Validators.required]],
      mdp: ["", [Validators.required]]
    });
  }

  soumettre(): void{
    console.log(this.formLogin.get("login")?.value);
    console.log(this.formLogin.get("mdp")?.value);

    this.authentificationService.postLogin(this.formLogin.get("login")?.value, this.formLogin.get("mdp")?.value).subscribe(
      ()=>{
        this.utilisateur$ = this.authentificationService.getLogin(this.formLogin.get("login")?.value);
      }
    );
  }

}
