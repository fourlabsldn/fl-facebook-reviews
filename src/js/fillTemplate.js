/* eslint-disable max-len */
import constants from './constants';
import ExpansibleTextBox from './ExpansibleTextBox';
const maxCharacters = 142;

/**
 * @method fillTemplate
 * @param  {Object} review
 * @return {HTMLElement}
 */
export default function fillTemplate(review, modulePrefix) {
  const reviewUserName = review.reviewer.name;
  const reviewUserUrl = `https://www.facebook.com/${review.reviewer.id}`;
  const reviewUserPic = review.reviewer.picture;
  const reviewText = review.review_text;
  const reviewStars = review.rating;
  const reviewDate = review.created_time;
  const slvUrl = 'https://www.facebook.com/slvglobal';
  const slvReviewsUrl = `${slvUrl}/reviews`;

  const postStr = `
  <div class="${modulePrefix}_post">
    <div class="${modulePrefix}_header">
      <img class="${modulePrefix}_header-image"src="${reviewUserPic}" alt="">
      <div class="${modulePrefix}_header-text">
        <span class="${modulePrefix}_header-text-top">
          <a class="${modulePrefix}_header-text-top-name" href=${reviewUserUrl}>
            ${reviewUserName}
          </a>
          reviewed
          <a class="${modulePrefix}_header-text-top-actionTarget" href="${slvUrl}">
            SLV
          </a>
            –
          <a class="${modulePrefix}_header-text-stars" href="${slvReviewsUrl}">
            ${reviewStars}
          </a>
        </span>
        <span class="${modulePrefix}_header-text-bottom">
          ${constants.monthNames[new Date(reviewDate).getMonth()]}
          ${new Date(reviewDate).getDate()}
          ${constants.globeIcon}
        </span>
      </div>
      ${constants.arrowDownIcon}
    </div>
  </div>`;

  const post = compile(postStr);
  const reviewTextBox = new ExpansibleTextBox(reviewText, maxCharacters, modulePrefix);
  post.appendChild(reviewTextBox.getBox());
  return post;
}

function compile(str) {
  const container = document.createElement('div');
  container.innerHTML = str;
  return container.children[0];
}
