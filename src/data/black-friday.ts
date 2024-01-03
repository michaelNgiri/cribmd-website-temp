export const blackFridayDealsData: {
  heading: string;
  p1: string;
  list?: string[];
  p2?: string;
  buttonText: string;
  buttonURL: string;
  imageName: string;
  showModal?: boolean;
}[] = [
  {
    heading: 'Basic Plan',
    p1: "Don't stress over transportation or traffic. Get access to verified doctors anywhere in Nigeria.",
    list: ['50% Off for the first month', '80% Off for 6 month'],
    buttonText: 'Get discount on plan',
    buttonURL: 'http://app.cribmd.com/signup?rURL=patient/subscribe',
    imageName: 'chat-with-male'
  },
  {
    heading: 'Premium Plan',
    p1: 'Get access to various healthcare coverage options at affordable rates.',
    list: ['25% Off for the first month', '90% Off for 6 months'],
    buttonText: 'Get discount on plan',
    buttonURL: 'http://app.cribmd.com/signup?rURL=patient/subscribe',
    imageName: 'chat-with-female'
  },
  {
    heading: 'Family Plan',
    p1: 'We ensure you and your loved ones are properly cared for by designing our home visits to suit your needs.',
    list: [
      '15% Off for the first month on Black Friday',
      '20% Off for the first month on Cyber Monday',
      '90% Off for 6 months'
    ],
    p2: 'If you choose the family plan, you will be able to add up to 6 family members to your plan.',
    buttonText: 'Get discount on plan',
    buttonURL: 'http://app.cribmd.com/signup?rURL=patient/subscribe',
    imageName: 'chat-with-group'
  },
  {
    heading: 'Exclusive Plan',
    p1: "Do you have pre-existing conditions such as asthma, diabetes, hypertension, etc.? Let's help you manage it.",
    list: ['50% Off for the first month', '15% Off for 6 months'],
    buttonText: 'Contact Support',
    buttonURL: '',
    imageName: 'chat-with-elder',
    showModal: true
  },
  {
    heading: 'Swift Health',
    p1: 'The Swift Health Plan makes it easier for you to enjoy our services without bothering about recurring payments.',
    list: ['90% Off on 26th', '40% Off on Cyber Monday', '30% off Everyday'],
    p2: 'This service is a one-off and there is no monthly payment necessary in this plan.',
    buttonText: 'Contact Support',
    buttonURL: '',
    imageName: 'chat-with-female-user',
    showModal: true
  }
];
