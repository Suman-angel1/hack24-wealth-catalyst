import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-add-new-goal-dialog',
  templateUrl: './add-new-goal-dialog.component.html',
  styleUrls: ['./add-new-goal-dialog.component.css']
})
export class AddNewGoalDialogComponent implements OnInit {
  goalForm!: FormGroup;
  
  categories = [
    {
      icon: 'home',
      text: 'Home'
    },
    {
      icon: 'directions_car',
      text: 'Car'
    },
    {
      icon: 'school',
      text: 'Higher Education'
    },
    {
      icon: 'flight_takeoff',
      text: 'Vacation'
    },
    {
      icon: 'fitness_center',
      text: 'Fitness'
    },
    {
      icon: 'business',
      text: 'Business'
    },
    {
      icon: 'celebration',
      text: 'Wedding'
    },
    {
      icon: 'other',
      text: 'Others'
    }
  ];

  textToIconMap = this.categories.reduce((map, category) => {
    map[category.text] = category.icon;
    return map;
  }, {} as { [key: string]: string });

  interests = [
    "Delivery", "Intra Day", "F&O", "Commodity", "Mutual Fund", "All"
  ]

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<AddNewGoalDialogComponent>) { }

  ngOnInit(): void {
    this.goalForm = this.fb.group({
      category: ['', Validators.required],
      investmentAmount: ['', [Validators.required, Validators.min(0)]],
      tenure: ['', [Validators.required, Validators.min(0)]],
      expectedReturn: ['', [Validators.required, Validators.min(0)]],
      interestedIn: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.goalForm.valid) {
      console.log(this.goalForm.value);
      // form value should be returned to the parent component
      this.dialogRef.close({...this.goalForm.value, "icon": this.textToIconMap[this.goalForm.value.category]});
    }
  }

}
