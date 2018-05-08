const en = {
  translation: {
    language: { label: 'العربية' },
    appName: { label: 'Addabba' },
    welcomeTo: { label: 'Welcome To' },
    // Header Translations
    home: { label: 'Home' },
    login: { label: 'Login' },
    logout: { label: 'Logout' },
    register: { label: 'Register' },
    addTrip: { label: 'Add Trip' },
    myAccount: { label: 'My Account' },
    // Content Translations
    findTrip: { label: 'Find Trip' },
    whereWouldYouLikeToShip: { label: 'Where would you like to ship?' },
    chooseTripType: { label: 'Choose Trip Type' },
    tripFrom: { label: 'Trip From' },
    to: { label: 'To' },
    search: { label: 'Search' },
    inboundTrips: { label: 'Inbound Trips' },
    outboundTrips: { label: 'Outbound Trips' },
    localTrips: { label: 'Local Trips' },
    internationalTrips: { label: 'International Trips' },
    tripsByAir: { label: 'Trips by Air' },
    tripsByLand: { label: 'Trips by Land' },
    latestTrips: { label: 'Latest Trips' },
    profilePicture: { label: 'Profile Picture' },
    rating: { label: 'Rating' },
    sendRequest: { label: 'Send Request' },
    enterYourEmail: { label: 'Enter your email' },
    resend: { label: 'Resend' },
    resending: { label: 'Resending' },
    cancel: { label: 'Cancel' },
    ok: { label: 'OK' },
    click: { label: 'Click' },
    here: { label: 'here' },
    WeHaveSentActivationLinkTo: { label: "We've sent an activation link to" },
    WeHaveSentPasswordResetLinkTo: {
      label: "We've sent a password reset link to"
    },
    YouHaveSuccessfullyChangedYourPassword: {
      label: "You've successfully changed your password"
    },
    yourAccountHasnotBeenActivatedYetYouWillNeedToConfirmYourEmail: {
      label:
        'Your account hasn’t been activated yet, you’ll need to confirm your email.'
    },
    ifYouDidnotGetTheConfirmationEmail: {
      label: "if you didn't get the confirmation email"
    },
    // Login/Register Translations
    orBeClassical: { label: 'Or Be Classical' },
    email: {
      label: 'Email...',
      require: 'Please enter your email',
      valid: 'Please enter a valid email'
    },
    password: {
      label: 'Password...',
      require: 'Please enter your password',
      length: 'Your password is too short',
      weak: 'Your password is very weak',
      long: 'Your password is very long'
    },
    newPassword: {
      label: 'New Password...',
      require: 'Please enter your new password',
      length: 'Your new password is too short',
      weak: 'Your new password is very weak',
      long: 'Your new password is very long'
    },
    confirmNewPassword: {
      label: 'Confirm New Password...',
      require: 'Please enter your confirm new password',
      equal: 'Passwords do not match'
    },
    passwordReset: { label: 'Password Reset' },
    reset: { label: 'Reset' },
    letsGo: { label: "Let's Go" },
    firstName: {
      label: 'First Name...',
      require: 'Please enter the first name',
      length: 'First name must be at least 3 characters'
    },
    lastName: {
      label: 'Last Name...',
      require: 'Please enter the last name',
      length: 'Last name must be at least 3 characters'
    },
    getStarted: { label: 'Get Started' },
    iAgreeToThe: { label: 'I agree to the' },
    termsAndConditions: { label: 'terms and conditions' },
    forgotPassword: { label: 'Forgot password?' },
    recover: { label: 'Recover' },
    recovering: { label: 'Recovering' },
    // Add New Trip Page
    air: { label: 'Air' },
    land: { label: 'Land' },
    packageDelivery: { label: 'Package Delivery' },
    carPool: { label: 'Car Pool' },
    both: { label: 'Both' },
    next: { label: 'Next' },
    previous: { label: 'Previous' },
    finish: { label: 'Finish' },
    travellingVia: {
      label: 'Travelling via',
      require: 'In order to continue please choose your travelling method!'
    },
    providedServices: {
      label: 'Provided Services',
      require: 'In order to continue please choose your provided services!'
    },
    backToProvidedServices: { label: 'Back To Provided Services' },
    tripInformation: { label: 'Trip information' },
    tripDetails: { label: 'Trip Details' },
    startPoint: { label: 'Start Point' },
    endPoint: { label: 'End Point' },
    addNewTrip: { label: 'Add New Trip' },
    thisInformationWillLetUsKnowMoreAboutYourNewTrip: {
      label: 'This information will let us know more about your new trip'
    },
    passengerPrice: {
      label: 'Passenger Price',
      require: 'Please enter the passenger price',
      number: 'Passenger price must be numbers only'
    },
    firstHalfPrice: {
      label: 'First half kg price',
      require: 'Please enter the first half kg price',
      number: 'Price must be numbers only'
    },
    additionalHalfPrice: {
      label: 'Additional half kg price',
      require: 'Please enter the additional half price',
      number: 'Price must be numbers only'
    },
    vehicleDescription: {
      label: 'Vehicle Description',
      require: 'Please enter the vehicle description',
      length: 'Vehicle description must be at least 5 characters'
    },
    notes: {
      label: 'Notes',
      require: 'Please enter the notes',
      length: 'Notes must be at least 5 characters'
    },
    placeId: {
      label: 'City',
      require: 'Please select city from drop down menu'
    },
    meetingPoint: {
      label: 'Meeting Point',
      require: 'Please enter the meeting point'
    },
    meetingTime: {
      label: 'Meeting Time',
      require: 'Please enter the meeting time',
      date: 'Meeting time must be a valid date'
    },
    time: {
      label: 'Time',
      require: 'Please enter the time',
      date: 'Time must be a valid date'
    },
    phone: {
      label: 'Phone',
      require: 'Please enter your phone number',
      phone: 'Phone number must be in international format'
    },
    // Code errors from Backend
    missingEmail: { label: 'You must provide an email' },
    missingFullName: { label: 'You must provide your full name' },
    missingPassword: { label: 'You must provide a password' },
    shortPassword: { label: 'Password must be 8 characters or longer' },
    longPassword: { label: 'Password must be 128 characters or less' },
    wrongEmailOrPassword: { label: "The email or password doesn't match" },
    blocked: { label: 'The account is blocked by admins' },
    unknownError: { label: 'Uknown Error, please try again later' },
    missingEmailOrPassword: {
      label: 'You must send the email and the password'
    },
    missingHash: { label: 'Hash not provided' },
    hashNotFound: { label: 'Hash could not be located, or expired' },
    userNotFound: { label: 'User could not be located' },
    alreadyVerified: { label: 'Account already verified' },
    emailNotFound: { label: 'Could not find user with provided email' },
    missingInformation: { label: 'Information missing' },
    passwordNotUpdaated: {
      label: 'Password could not be updated. Incorrect information.'
    },
    missingStartPoint: {
      label: 'You must provide a start point'
    },
    missingEndPoint: {
      label: 'You must provide an end point'
    },
    missingServiceOrTravelBy: {
      label: 'You must provide a travel by or a service'
    },
    startEqualsEnd: {
      label: 'Starting point should not equal Ending point'
    },
    airAndPool: {
      label: 'You can not provide Car pool service when traveling by air'
    },
    requestNotAvailable: {
      label: 'Requesting a service is not available for this trip'
    },
    tripNotFound: {
      label: 'Trip was not found'
    },
    serviceDoesNotMatch: {
      label: 'The service requested does not match the service provided'
    },
    requestFromOwner: {
      label: 'Owners are not allowed to request services for their trips'
    },
    updateNotAvailable: {
      label: 'Updating a service is not available for this trip'
    },
    onlyOwnersUpdate: {
      label: 'Only the owner of this trip is allowed to update'
    },
    invalidAction: {
      label: 'Invalid action'
    },
    invalidId: {
      label: 'Invalid ID'
    }
  }
};

export { en };
