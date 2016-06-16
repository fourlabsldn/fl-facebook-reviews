/* globals xController */
/* eslint-disable quote-props, max-len*/
import fillTemplate from './fillTemplate';

const MODULE_PREFIX = 'fl-fr';
xController((xdiv) => {
  const loadedData = {
    'summary': {
      'url': 'https://www.facebook.com/fourlabsldn/',
      'average': 4.8,
      'count': 377,
      'values': {
        1: 5,
        2: 2,
        3: 3,
        4: 43,
        5: 324,
      },
    },
    'reviews': [{
      'rating': 5,
      'created_time': '2016-06-15T16:53:32+0000',
      'review_text': 'I was lucky enough to complete a 4 week mental health placement with SLV from November-December 2015 and it was an amazing experience. Whilst i was apprehensive about the Teaching projects at first, i did find that i enjoyed these projects once i started them. The mental health projects were extremely valuable and reignited my passion for working in Mental Health. The Coordinators, nationals and all the staff were really helpful and friendly, and i found all the other volunteers to be really friendly as well which made me feel less nervous. It was definitely challenging and eye-opening but i would recommend it to anyone. Sri Lanka is a beautiful country and i enjoyed exploring it and trying new things. I gave up my job at King\'s College Hospital to go to Sri Lanka, and i didn\'t regret it for a second.. Since i have been back i have had other job offers within the NHS and i believe this is due to the incredible cross-cultural experience i gained with SLV. Hopefully i can take what i learned and apply it to my new job within Mental Health. Thank you so much for the experience!',
      'reviewer': {
        'name': 'Jonny Schmid',
        'id': '10203747248060595',
        'picture': 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12963617_10209069075862964_6734895078487402276_n.jpg?oh=f69f77402807d7839d904e2ccf13de3e&oe=57CB075D',
      },
    }],
  };
  xdiv.appendChild(fillTemplate(loadedData.reviews[0], MODULE_PREFIX));
  xdiv.appendChild(fillTemplate(loadedData.reviews[0], MODULE_PREFIX));
});
