function pageLoad() {
  // 👇 YOUR CODE BEGINS HERE. DON'T CHANGE ANY OTHER CODE. 👇

  // 🔥🔥🔥 YOUR CODE GOES HERE 🔥🔥🔥
  // the 'ride' variable contains data about a random ride (i.e. when the page)
  // is refreshed or reloaded, the 'ride' variable will contain something different
  // to get started, try to write other parts of 'ride' to the JavaScript console in Chrome
  // e.g. ask 'ride' for its length or only grab the first member of the Array
  
  levelOfService = 'Noober X'

  let p1 = ride[0]
  let p2
  let p3

  passenger1Name = `${p1.passengerDetails.first} ${p1.passengerDetails.last}`
  passenger1Phone = p1.passengerDetails.phoneNumber
  passenger1NumberOfPassengers = p1.numberOfPassengers
  passenger1PickupAddressLine1 = p1.pickupLocation.address
  passenger1PickupAddressLine2 = `${p1.pickupLocation.city}, ${p1.pickupLocation.state} ${p1.pickupLocation.zip}`
  passenger1DropoffAddressLine1 = p1.dropoffLocation.address
  passenger1DropoffAddressLine2 = `${p1.dropoffLocation.city}, ${p1.dropoffLocation.state} ${p1.dropoffLocation.zip}`
  
  if (ride.length > 1) {
    levelOfService = 'Noober Pool'
        p2 = ride[1]
    passenger2Name = `${p2.passengerDetails.first} ${p2.passengerDetails.last}`
    passenger2Phone = p2.passengerDetails.phoneNumber
    passenger2NumberOfPassengers = p2.numberOfPassengers
    passenger2PickupAddressLine1 = p2.pickupLocation.address
    passenger2PickupAddressLine2 = `${p2.pickupLocation.city}, ${p2.pickupLocation.state} ${p2.pickupLocation.zip}`
    passenger2DropoffAddressLine1 = p2.dropoffLocation.address
    passenger2DropoffAddressLine2 = `${p2.dropoffLocation.city}, ${p2.dropoffLocation.state} ${p2.dropoffLocation.zip}`
    if (ride.length > 2) {
      p3 = ride[2]
      passenger3Name = `${p3.passengerDetails.first} ${p3.passengerDetails.last}`
      passenger3Phone = p3.passengerDetails.phoneNumber
      passenger3NumberOfPassengers = p3.numberOfPassengers
      passenger3PickupAddressLine1 = p3.pickupLocation.address
      passenger3PickupAddressLine2 = `${p3.pickupLocation.city}, ${p3.pickupLocation.state} ${p3.pickupLocation.zip}`
      passenger3DropoffAddressLine1 = p3.dropoffLocation.address
      passenger3DropoffAddressLine2 = `${p3.dropoffLocation.city}, ${p3.dropoffLocation.state} ${p3.dropoffLocation.zip}`
    }
  } else if (p1.purpleRequested) {
    levelOfService = 'Noober Purple'
  } else if (p1.numberOfPassengers > 3) {
    levelOfService = 'Noober XL'
  } 

  console.log(ride)  
  // these variables map to the elements on the finished page;
  // assign the proper value to each variable

  // levelOfService
  // passenger1Name, passenger1Phone, passenger1NumberOfPassengers
  // passenger1PickupAddressLine1, passenger1PickupAddressLine2
  // passenger1DropoffAddressLine1, passenger1DropoffAddressLine2
  // passenger2Name, passenger2Phone, passenger2NumberOfPassengers
  // passenger2PickupAddressLine1, passenger2PickupAddressLine2
  // passenger2DropoffAddressLine1, passenger2DropoffAddressLine2
  // passenger3Name, passenger3Phone, passenger3NumberOfPassengers
  // passenger3PickupAddressLine1, passenger3PickupAddressLine2
  // passenger3DropoffAddressLine1, passenger3DropoffAddressLine2
  
  //  👆 YOUR CODE ENDS HERE. DON'T CHANGE ANY OTHER CODE 👆
}