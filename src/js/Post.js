/* eslint-disable max-len */
import constants from './utils/constants';
import compile from './utils/compile';
import ExpansibleTextBox from './ExpansibleTextBox';
const maxCharacters = 142;
const CSS_PREFIX = 'Post';


export default class Post {
  /**
   * @param  {Object} review
   * @return {HTMLElement}
   */
  constructor(review, facebookPageUrl, modulePrefix) {
    const reviewUserName = review.reviewer.name;
    const reviewUserUrl = `//facebook.com/${review.reviewer.id}`;
    const reviewUserPic = `//graph.facebook.com/v2.8/${review.reviewer.id}/picture`;
    const reviewText = review.review_text;
    const reviewStars = review.rating;
    const reviewDate = review.created_time;
    const reviewsUrl = `${facebookPageUrl}/reviews`;

    const cssPrefix = `${modulePrefix}_${CSS_PREFIX}`;
    const postStr = `
    <div class="${cssPrefix}">
      <div class="${cssPrefix}-header">
        <img class="${cssPrefix}-header-image"src="${reviewUserPic}" alt="">
        <div class="${cssPrefix}-header-text">
          <span class="${cssPrefix}-header-text-top">
            <a class="${cssPrefix}-header-text-top-name" href=${reviewUserUrl} target="_blank">
              ${reviewUserName}
            </a>
            reviewed
            <a class="${cssPrefix}-header-text-top-actionTarget" href="${facebookPageUrl}" target="_blank">
              SLV
            </a>
              –
            <a class="${cssPrefix}-header-text-stars" href="${reviewsUrl}" target="_blank">
              ${reviewStars}
            </a>
          </span>
          <span class="${cssPrefix}-header-text-bottom">
            ${constants.monthNames[new Date(reviewDate).getMonth()]}
            ${new Date(reviewDate).getDate()}
            <span class="${cssPrefix}-header-text-globe">${constants.globeIcon}</span>
          </span>
        </div>
        <span class="${cssPrefix}-header-arrowDown">${constants.arrowDownIcon}</span>
      </div>
    </div>`;

    const post = compile(postStr);
    const reviewTextBox = new ExpansibleTextBox(reviewText, maxCharacters, cssPrefix);
    post.appendChild(reviewTextBox.getBox());
    this.post = post;
  }

  getContainer() {
    return this.post;
  }
}
