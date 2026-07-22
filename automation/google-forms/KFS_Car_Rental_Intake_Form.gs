/**
 * Kingdom Financial Services (KFS)
 * NJ Passenger-Car Rental LLC Client Intake Form
 *
 * Creates a Google Form with blank response fields and short hints.
 * Do not collect SSNs, driver's-license numbers, bank credentials,
 * signatures, or identity-document uploads in this form.
 */

function createKFSCarRentalIntakeForm() {
  const form = FormApp.create(
    'Kingdom Financial Services | NJ Passenger-Car Rental LLC Intake'
  );

  form.setDescription(
    'Please complete this form so Kingdom Financial Services can prepare your New Jersey passenger-car rental LLC setup. ' +
    'Leave any item blank if it does not apply. Do not enter Social Security numbers, bank passwords, or identity-document information.'
  );
  form.setConfirmationMessage(
    'Thank you. Kingdom Financial Services received your intake details and will follow up with next steps.'
  );
  form.setCollectEmail(true);
  form.setProgressBar(true);
  form.setShowLinkToRespondAgain(false);

  form.addSectionHeaderItem()
    .setTitle('1. Contact information')
    .setHelpText('Basic contact details for communicating about this setup.');

  form.addTextItem()
    .setTitle('Full legal name')
    .setHelpText('Example: the name shown on your government-issued identification.')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Preferred phone number')
    .setHelpText('Best number for questions about the setup.')
    .setRequired(true);

  form.addTextItem()
    .setTitle('Preferred email address')
    .setHelpText('Email address for your business setup correspondence.')
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Current residential or mailing address')
    .setHelpText('Street, city, state, and ZIP code. Do not enter a Social Security number or other identity-document details.');

  form.addSectionHeaderItem()
    .setTitle('2. LLC name and business activity')
    .setHelpText('Please provide possible names and describe the intended business plainly.');

  form.addTextItem()
    .setTitle('First choice for LLC name')
    .setHelpText('Example: Garden State Passenger Rentals LLC.');

  form.addTextItem()
    .setTitle('Second choice for LLC name')
    .setHelpText('A backup business name for availability checking.');

  form.addTextItem()
    .setTitle('Third choice for LLC name')
    .setHelpText('Another backup business name for availability checking.');

  form.addParagraphTextItem()
    .setTitle('Describe the planned business')
    .setHelpText('Example: short-term rental of company-owned passenger cars. Mention any activities beyond regular passenger-car rentals.');

  form.addMultipleChoiceItem()
    .setTitle('Will the business only rent regular passenger cars?')
    .setChoiceValues([
      'Yes — passenger-car rentals only',
      'No — I plan to offer additional services'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Describe any additional services')
    .setHelpText('Examples: SUVs, luxury vehicles, peer-to-peer rentals, vehicle sales, vehicle financing, delivery, or chauffeur services.');

  form.addSectionHeaderItem()
    .setTitle('3. Address and operating location')
    .setHelpText('This helps us coordinate the business address and vehicle location.');

  form.addMultipleChoiceItem()
    .setTitle('What business address support are you interested in?')
    .setChoiceValues([
      'I need information about a virtual business address',
      'I will provide a business address',
      'I am not sure yet'
    ]);

  form.addParagraphTextItem()
    .setTitle('Where will the vehicles be kept or garaged?')
    .setHelpText('Provide the city and state, and the street address if already known.');

  form.addParagraphTextItem()
    .setTitle('Where will the business operate?')
    .setHelpText('Example: cities, counties, or service area in New Jersey.');

  form.addSectionHeaderItem()
    .setTitle('4. Ownership and management')
    .setHelpText('List the people who will own or manage the LLC.');

  form.addParagraphTextItem()
    .setTitle('Owner or member name(s)')
    .setHelpText('List each owner’s full legal name. Do not include Social Security numbers or ID numbers.');

  form.addParagraphTextItem()
    .setTitle('Ownership percentages')
    .setHelpText('Example: Owner 1 — 100%; or Owner 1 — 60%, Owner 2 — 40%.');

  form.addTextItem()
    .setTitle('Who will be the primary business contact?')
    .setHelpText('Name of the person who will make day-to-day decisions.');

  form.addSectionHeaderItem()
    .setTitle('5. Vehicle and launch plan')
    .setHelpText('Approximate information is fine at this stage.');

  form.addTextItem()
    .setTitle('Number of vehicles planned at launch')
    .setHelpText('Example: 1, 3, or 5 passenger cars.');

  form.addMultipleChoiceItem()
    .setTitle('How do you expect to obtain the vehicles?')
    .setChoiceValues([
      'Purchase with available funds',
      'Finance',
      'Lease',
      'Already own vehicles',
      'Not sure yet'
    ]);

  form.addTextItem()
    .setTitle('Estimated startup vehicle budget')
    .setHelpText('Approximate dollar amount or “not sure yet.”');

  form.addParagraphTextItem()
    .setTitle('Vehicle details, if known')
    .setHelpText('Examples: vehicle types, makes/models, model years, or special requirements.');

  form.addMultipleChoiceItem()
    .setTitle('Will you use a peer-to-peer rental platform such as Turo?')
    .setChoiceValues([
      'Yes',
      'No',
      'Not sure yet'
    ]);

  form.addSectionHeaderItem()
    .setTitle('6. Insurance and funding goals')
    .setHelpText('These answers help identify follow-up items; approval or funding is never guaranteed.');

  form.addMultipleChoiceItem()
    .setTitle('Do you currently have commercial rental insurance?')
    .setChoiceValues([
      'Yes',
      'No',
      'I need help identifying insurance requirements',
      'Not sure yet'
    ]);

  form.addParagraphTextItem()
    .setTitle('What are your startup or funding goals?')
    .setHelpText('Example: vehicle purchases, operating cash, or establishing business banking.');

  form.addTextItem()
    .setTitle('Target launch date')
    .setHelpText('Approximate month and year is enough.');

  form.addSectionHeaderItem()
    .setTitle('7. Authorization and follow-up')
    .setHelpText('We will confirm scope, pricing, and any required secure information separately.');

  form.addMultipleChoiceItem()
    .setTitle('May Kingdom Financial Services contact you about this intake?')
    .setChoiceValues([
      'Yes',
      'No'
    ])
    .setRequired(true);

  form.addParagraphTextItem()
    .setTitle('Questions or notes')
    .setHelpText('Add anything else you want us to know about the planned passenger-car rental business.');

  Logger.log('CLIENT FORM LINK: ' + form.getPublishedUrl());
  Logger.log('FORM EDIT LINK: ' + form.getEditUrl());
}
