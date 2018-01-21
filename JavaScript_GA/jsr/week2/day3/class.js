var age = 24

if (age >= 16){
  console.log('you can only drive')
  if (age >=18){
    console.log('you can vote')
    if (age >=21){
      console.log('you can drink alcohol')
      if (age >=25){
        console.log('you can rent a car')
        if (age >=35){
          console.log('you can run for president')
          if (age >=62){
            console.log('you collect social security beneits')
          }
        }
      }
    }
  }
} else { console.log('you only go to school')}
