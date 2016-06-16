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
      'review_text': 'I did a 4 week mental health placement in March, which was my first experience of volunteering abroad and I am so glad I volunteered with SLV. SLV is an extremely organised, caring and energetic company and I always felt safe. All of the volunteers, supervisors, coordinators and nationals are extremely nice and supportive and make being out of your comfort zone so much easier. SLV gives you the experience of local Sri Lankan culture, which I thoroughly enjoyed. This included travelling to projects on the local bus, living with a Sri Lankan family, and eating the local food. The SLV team members would always be keen to share tips to help us get settled such as which activities work well in particular projects to where the best milkshake place is. The nationals were eager to teach us words in Sinhala and always happy to answer questions we had about Sri Lankan culture. The family I stayed with and all of the families I met were so welcoming and caring and cooked amazing food! The projects timetable gives you the opportunity to gain experience in a range of different places from colleges to orphanages to temples. So there is a lot of opportunity to learn and gain experience. Also, being on the mental health placement I got to shadow an extremely inspirational psychiatrist and attend workshops on meditation and creative therapy. I really enjoyed these events and learnt a lot from them. At the end of the 4 weeks I was not ready to leave as I had so much fun with the SLV team and was going to miss the people and the beautiful country. Thank you so much to my Sri Lankan family, the nationals, coordinators and volunteers I met for making my experience volunteering in Sri Lanka so amazing!',
      'reviewer': {
        'name': 'Jonny Schmid',
        'id': '10203747248060595',
        'picture': 'https://scontent.xx.fbcdn.net/v/t1.0-1/p50x50/12963617_10209069075862964_6734895078487402276_n.jpg?oh=f69f77402807d7839d904e2ccf13de3e&oe=57CB075D',
      },
    }, {
      'rating': 4,
      'created_time': '2016-09-05T23:00:00.000Z',
      'review_text': 'I found out about SLV through advertisements on Facebook and Twitter in 2014. Since I am a passionate traveller and studied Psychology in university, I was immediately drawn to SLV. I did a 6 week placement in the Mental Health and Special Needs placement. I had an amazing experience from day 1. I was housed with a lovely group of other SLV volunteers and an absolutely lovely family, who looked after us with so much warmth and love. Our induction week was very structured and organised, and gave us a very informative outlook on what SLV do. In my placement, I encountered some challenges with patients and students that have made me a stronger working professional and has allowed me to feel confident in overcoming most challenges that I am faced with back in the work world. I have cherished some great memories of SLV that I intend to hold on to forever.',
      'reviewer': {
        'name': 'Emma Cumming',
        'id': '887590330',
        'picture': 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/p50x50/13124663_10156886681725331_4159308296755368677_n.jpg?oh=691086fbc8061ff64dcc8b93a9559eb8&oe=57D490A5',
      },
    }, {
      'rating': 5,
      'created_time': '2016-04-01T23:00:00.000Z',
      'review_text': 'I was lucky enough to complete a 4 week mental health placement with SLV from November-December 2015 and it was an amazing experience. Whilst i was apprehensive about the Teaching projects at first, i did find that i enjoyed these projects once i started them. The mental health projects were extremely valuable and reignited my passion for working in Mental Health. The Coordinators, nationals and all the staff were really helpful and friendly, and i found all the other volunteers to be really friendly as well which made me feel less nervous. It was definitely challenging and eye-opening but i would recommend it to anyone. Sri Lanka is a beautiful country and i enjoyed exploring it and trying new things. I gave up my job at King\'s College Hospital to go to Sri Lanka, and i didn\'t regret it for a second.. Since i have been back i have had other job offers within the NHS and i believe this is due to the incredible cross-cultural experience i gained with SLV. Hopefully i can take what i learned and apply it to my new job within Mental Health. Thank you so much for the experience!',
      'reviewer': {
        'name': 'Danielle Proctor',
        'id': 'danielle.proctor.7',
        'picture': 'https://scontent-lhr3-1.xx.fbcdn.net/v/t1.0-1/c0.2.50.50/p50x50/10981607_10204994926144339_5571974026086666108_n.jpg?oh=ae63430bc3b97a2863226f0fbb56919e&oe=57D7F7D0',
      },
    }],
  };

  loadedData.reviews.forEach((review) => {
    xdiv.appendChild(fillTemplate(review, MODULE_PREFIX));
  });
});
