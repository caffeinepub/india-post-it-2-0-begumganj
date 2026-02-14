export interface Testimonial {
  id: string;
  name: string;
  location: string;
  message: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Rajesh Kumar',
    location: 'Begumganj',
    message: 'India Post IT 2.0 has made banking so convenient. The staff is helpful and the services are excellent!'
  },
  {
    id: '2',
    name: 'Priya Sharma',
    location: 'Mundla Chawal',
    message: 'Opened a Sukanya Samriddhi Account for my daughter. The process was smooth and the returns are great!'
  },
  {
    id: '3',
    name: 'Amit Patel',
    location: 'Begumganj',
    message: 'The Monthly Income Scheme has been a blessing for my retired parents. Regular income every month!'
  },
  {
    id: '4',
    name: 'Sunita Verma',
    location: 'Mundla Chawal',
    message: 'Best place for safe investments. The Time Deposit rates are competitive and the service is trustworthy.'
  },
  {
    id: '5',
    name: 'Vikram Singh',
    location: 'Begumganj',
    message: 'Postal Life Insurance gave me peace of mind for my family\'s future. Highly recommended!'
  },
  {
    id: '6',
    name: 'Meera Joshi',
    location: 'Mundla Chawal',
    message: 'The Recurring Deposit helped me save systematically. Now I have a good corpus for my goals!'
  }
];
