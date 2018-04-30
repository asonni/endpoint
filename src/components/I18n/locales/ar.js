const ar = {
  translation: {
    language: { label: 'English' },
    appName: { label: 'الدابة' },
    welcomeTo: { label: 'مرجبا بك في' },
    // Header Translations
    home: { label: 'الصفحة الرئيسية' },
    login: { label: 'تسجيل الدخول' },
    logout: { label: 'خروج' },
    register: { label: 'تسجيل' },
    addTrip: { label: 'أضف رحلة' },
    myAccount: { label: 'حسابي' },
    // Content Translations
    findTrip: { label: 'البحث عن رحلة' },
    whereWouldYouLikeToShip: { label: 'أين تريد أن تشحن؟' },
    chooseTripType: { label: 'اختر نوع الرحلة' },
    tripFrom: { label: 'رحلة من' },
    to: { label: 'إلى' },
    search: { label: 'بحث' },
    inboundTrips: { label: 'الرحلات الداخلية' },
    outboundTrips: { label: 'رحلات المغادرة' },
    localTrips: { label: 'الرحلات المحلية' },
    internationalTrips: { label: 'الرحلات الدولية' },
    tripsByAir: { label: 'الرحلات الجوية' },
    tripsByLand: { label: 'رحلات عن طريق البر' },
    latestTrips: { label: 'أحدث الرحلات' },
    profilePicture: { label: 'الصوره الشخصيه' },
    rating: { label: 'تصنيف' },
    sendRequest: { label: 'إرسال طلب' },
    enterYourEmail: { label: 'أدخل بريدك الإلكتروني' },
    resend: { label: 'إعادة إرسال' },
    resending: { label: 'إرسال' },
    cancel: { label: 'إلغاء' },
    ok: { label: 'موافق' },
    click: { label: 'انقر' },
    here: { label: 'هنا' },
    WeHaveSentActivationLinkTo: { label: 'لقد ارسلنا رابط التفعيل الي' },
    WeHaveSentPasswordResetLinkTo: {
      label: 'لقد أرسلنا رابط إعادة تعيين كلمة المرور إلى'
    },
    YouHaveSuccessfullyChangedYourPassword: {
      label: 'لقد قمت بتغيير كلمة المرور الخاصة بك بنجاح'
    },
    yourAccountHasnotBeenActivatedYetYouWillNeedToConfirmYourEmail: {
      label: 'لم يتم تفعيل حسابك بعد ، ستحتاج إلى تأكيد بريدك الإلكتروني.'
    },
    ifYouDidnotGetTheConfirmationEmail: {
      label: 'إذا لم تستقبل على رسالة تأكيد البريد الإلكتروني'
    },
    // Login/Register Translations
    orBeClassical: { label: 'أو كن كلاسيكي' },
    email: {
      label: 'البريد الإلكتروني...',
      require: 'الرجاء ادخال البريد الإلكتروني',
      valid: 'الرجاء ادخال بريد إلكتروني صالح'
    },
    password: {
      label: 'كلمه المرور...',
      require: 'الرجاء ادخال كلمة المرور',
      length: 'كلمة المرور الخاصة بك قصيرة جدا',
      weak: 'كلمة المرور الخاصة بك ضعيفة جدا',
      long: 'كلمة المرور الخاصة بيك طويلة جدا'
    },
    newPassword: {
      label: 'كلمة المرور الجديدة...',
      require: 'الرجاء ادخال كلمة المرور الجديدة',
      length: 'كلمة المرور الجديدة قصيرة جدا',
      weak: 'كلمة المرور الجديدة ضعيفة جدا',
      long: 'كلمة المرور الجديدة طويلة جدا'
    },
    confirmNewPassword: {
      label: 'تأكيد كلمة المرور الجديدة...',
      require: 'الرجاء اعادة ادخال كلمة المرور الجديدة',
      equal: 'كلمات المرور غير متطابقة'
    },
    passwordReset: { label: 'اعادة تعيين كلمة المرور' },
    reset: { label: 'إعادة تعيين' },
    letsGo: { label: 'دخول' },
    firstName: {
      label: 'الأسم...',
      require: 'الرجاء ادخال الاسم',
      length: 'يجب ان يتكون الاسم علي الاقل من 3 احرف'
    },
    lastName: {
      label: 'اللقب...',
      require: 'الرجاء ادخال اللقب',
      length: 'يجب ان يتكون اللقب علي الاقل من 3 احرف'
    },
    getStarted: { label: 'البدء' },
    iAgreeToThe: { label: 'أنا أوافق على' },
    termsAndConditions: { label: 'الشروط والأحكام' },
    forgotPassword: { label: 'هل نسيت كلمة المرور؟' },
    recover: { label: 'استعادة' },
    recovering: { label: 'استعادة' },
    // Add New Trip Page
    air: { label: 'الجو' },
    land: { label: 'البر' },
    packageDelivery: { label: 'تسليم طرود' },
    carPool: { label: 'مشاركة مسافرين' },
    both: { label: 'الاثنان معاً' },
    next: { label: 'التالي' },
    previous: { label: 'السابق' },
    finish: { label: 'إنهاء' },
    travellingVia: {
      label: 'السفر عبر',
      require: 'للإستمرار ، يرجى إختيار طريقة السفر الخاصة بك!'
    },
    providedServices: {
      label: 'الخدمات المقدمة',
      require: 'للإستمرار ، يرجى إختيار الخدمات المقدمة!'
    },
    backToProvidedServices: { label: 'الرجوع الي الخدمات المقدمة' },
    tripInformation: { label: 'معلومات الرحلة' },
    tripDetails: { label: 'تفاصيل الرحلة' },
    startPoint: { label: 'نقطة البداية' },
    endPoint: { label: 'نقطة النهاية' },
    addNewTrip: { label: 'اضافة رحلة جديدة' },
    thisInformationWillLetUsKnowMoreAboutYourNewTrip: {
      label: 'سوف تسمح لنا هذه المعلومات بمعرفة المزيد عن رحلتك الجديدة'
    },
    passengerPrice: {
      label: 'السعر لكل مسافر',
      require: 'Please enter the passenger price',
      number: 'Passenger price must be numbers only'
    },
    firstHalfPrice: {
      label: 'Package First Half Price',
      require: 'Please enter the first half price',
      number: 'First half price must be numbers only'
    },
    additionalHalfPrice: {
      label: 'Package Additional Half Price',
      require: 'Please enter the additional half price',
      number: 'Additional half price must be numbers only'
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
    // Code errors from Backend
    missingEmail: { label: 'يجب عليك إدراج بريد إلكتروني' },
    missingFullName: { label: 'يجب عليك إدراج اسمك واللقب' },
    missingPassword: { label: 'يجب عليك إدراج كلمة مرور' },
    shortPassword: { label: 'يجب أن تتكون كلمة المرور من 8 خانات أو أكثر' },
    longPassword: { label: 'يجب أن تكون كلمة المرور 128 خانة أو أقل' },
    wrongEmailOrPassword: {
      label: 'البريد الإلكتروني أو كلمة المرور غير متطابقتين'
    },
    blocked: { label: 'تم حظر الحساب من قبل المشرفين' },
    unknownError: {
      label: 'خطأ غير معروف ، يرجى المحاولة مرة أخرى في وقت لاحق'
    },
    missingEmailOrPassword: {
      label: 'يجب عليك إرسال البريد الإلكتروني وكلمة المرور'
    },
    missingHash: { label: 'الرمز المشفر غير مدرج' },
    hashNotFound: {
      label: 'لم يتم العثور على الرمز المشفر, او أن صلاحيته منتهية'
    },
    userNotFound: { label: 'لم يتم العثور على المستخدم' },
    alreadyVerified: { label: 'حسابك مفعل من قبل' },
    emailNotFound: {
      label: 'تعذر العثور على المستخدم من البريد الإلكتروني المدرج'
    },
    missingInformation: { label: 'معلومات مفقودة' },
    passwordNotUpdaated: {
      label: 'تعذر تحديث كلمة المرور. معلومات غير صحيحة'
    },
    missingStartPoint: {
      label: 'يجب عليك إدراج نقطة البداية'
    },
    missingEndPoint: {
      label: 'يجب عليك إدراج نقطة النهاية'
    },
    missingServiceOrTravelBy: {
      label: 'السفر عبر أو الخدمة المقدمة غير مدرجين.'
    },
    startEqualsEnd: {
      label: 'نقطة البداية يجب أن لا تساوي نقطة النهاية'
    },
    airAndPool: {
      label: 'لا يمكن توفير خدمة "السفر مع" في حالة السفر عبر "الجو"'
    },
    requestNotAvailable: {
      label: 'طلب خدمة غير متوفر لهذه الرحلة'
    },
    tripNotFound: {
      label: 'الرحلة غير موجودة'
    },
    serviceDoesNotMatch: {
      label: 'الخدمة المتوفرة لا تتطابق مع الخدمة المطلوبة'
    },
    requestFromOwner: {
      label: 'صاحب الرحلة لا يحق له طلب خدمة من رحلته'
    },
    updateNotAvailable: {
      label: 'لايمكن تعديل هذه الرحلة'
    },
    onlyOwnersUpdate: {
      label: 'فقط صاحب الرحلة يمكنه قبول الطلبات'
    },
    invalidAction: {
      label: 'هذا الفعل غير مسموح به'
    },
    invalidId: {
      label: 'رقم التعريف غير صحيح'
    }
  }
};

export { ar };
