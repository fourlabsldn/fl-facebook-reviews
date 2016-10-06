/* globals xController */
/* eslint-disable quote-props, max-len*/
import Post from './Post';
import ScoreBoard from './ScoreBoard';
import constants from './utils/constants';

const MODULE_PREFIX = 'fl-fr';
window.flFacebookReviews = (xdiv) => {
  let loadedData;
  try {
    loadedData = JSON.parse(xdiv.dataset.info);
  } catch (e) {
    throw new Error('Invalid data given in data-info property.');
  }

  xdiv.classList.add(MODULE_PREFIX);

  const leftColumn = document.createElement('div');
  leftColumn.classList.add(`${MODULE_PREFIX}_leftColumn`);
  xdiv.appendChild(leftColumn);

  const facebookLogoBar = document.createElement('a');
  facebookLogoBar.setAttribute('href', loadedData.summary.url);
  facebookLogoBar.setAttribute('target', '_blank');
  facebookLogoBar.classList.add(`${MODULE_PREFIX}_facebookLogoBar`);
  facebookLogoBar.innerHTML = constants.facebookIcon;
  leftColumn.appendChild(facebookLogoBar);

  const reviewsBar = document.createElement('a');
  reviewsBar.setAttribute('href', loadedData.summary.url);
  reviewsBar.setAttribute('target', '_blank');
  reviewsBar.classList.add(`${MODULE_PREFIX}_reviewsBar`);
  reviewsBar.innerHTML = `Reviews <span>${constants.arrowDownIcon}</span>`;
  leftColumn.appendChild(reviewsBar);

  const scoreBoard = new ScoreBoard(loadedData.summary, MODULE_PREFIX);
  leftColumn.appendChild(scoreBoard.getContainer());

  const postsContainer = document.createElement('div');
  postsContainer.classList.add(`${MODULE_PREFIX}_postsContainer`);
  xdiv.appendChild(postsContainer);

  loadedData.reviews.forEach((review) => {
    const post = new Post(review, loadedData.summary.url, MODULE_PREFIX);
    postsContainer.appendChild(post.getContainer());
  });
};
