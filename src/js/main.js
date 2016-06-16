/* globals xController */
/* eslint-disable quote-props, max-len*/
import Post from './Post';
import ScoreBoard from './ScoreBoard';

const MODULE_PREFIX = 'fl-fr';
xController((xdiv) => {
  let loadedData;
  try {
    loadedData = JSON.parse(xdiv.dataset.info);
  } catch (e) {
    throw new Error('Invalid data given in data-info property.');
  }

  xdiv.classList.add(MODULE_PREFIX);

  const scoreBoard = new ScoreBoard(loadedData.summary, MODULE_PREFIX);
  xdiv.appendChild(scoreBoard.getContainer());

  const divider = document.createElement('div');
  divider.classList.add(`${MODULE_PREFIX}_divider`);
  xdiv.appendChild(divider);

  const postsContainer = document.createElement('div');
  postsContainer.classList.add(`${MODULE_PREFIX}_postsContainer`);
  xdiv.appendChild(postsContainer);

  loadedData.reviews.forEach((review) => {
    const post = new Post(review, MODULE_PREFIX);
    postsContainer.appendChild(post.getContainer());
  });
});
