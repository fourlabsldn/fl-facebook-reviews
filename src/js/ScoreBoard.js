import compile from './utils/compile';

const CLASS_PREFIX = 'ScoreBoard';
export default class ScoreBoard {
  constructor(summary, MODULE_PREFIX) {
    const pageUrl = summary.url;
    const pageAverage = summary.average;
    const pageReviewCount = summary.count;
    const reviewValues = Object.keys(summary.values).map(v => summary.values[v]);

    const maxVal = reviewValues.reduce((max, v) => { return v > max ? v : max; }, 0);
    const maxWidth = 135;
    const barSize = (val) => maxWidth * val / maxVal;

    const cssPrefix = `${MODULE_PREFIX}_${CLASS_PREFIX}`;
    const scoreBoard = `<div class="${cssPrefix}">
      <div class="${cssPrefix}-header">
        <a class="${cssPrefix}-header-mainScore" href=${pageUrl}>
          ${pageAverage}
        </a>
        <div class="${cssPrefix}-header-scoreDetails">
          <span class="${cssPrefix}-header-scoreDetails-starCount">${pageAverage} of 5 stars</span>
          <span class="${cssPrefix}-header-scoreDetails-reviewCount">${pageReviewCount} reviews</span>
        </div>
      </div>
      <div class="${cssPrefix}-body">
        <span class="${cssPrefix}-body-reviewCountStarScore">
          <span class="${cssPrefix}-body-reviewCountStarScore-stars">5</span>
          <span class="${cssPrefix}-body-reviewCountStarScore-bar" style="width:${barSize(reviewValues[4])}px;"></span>
          <span class="${cssPrefix}-body-reviewCountStarScore-reviews">${reviewValues[4]}</span>
        </span>
        <span class="${cssPrefix}-body-reviewCountStarScore">
          <span class="${cssPrefix}-body-reviewCountStarScore-stars">4</span>
          <span class="${cssPrefix}-body-reviewCountStarScore-bar" style="width:${barSize(reviewValues[3])}px;"></span>
          <span class="${cssPrefix}-body-reviewCountStarScore-reviews">${reviewValues[3]}</span>
        </span>
        <span class="${cssPrefix}-body-reviewCountStarScore">
          <span class="${cssPrefix}-body-reviewCountStarScore-stars">3</span>
          <span class="${cssPrefix}-body-reviewCountStarScore-bar" style="width:${barSize(reviewValues[2])}px;"></span>
          <span class="${cssPrefix}-body-reviewCountStarScore-reviews">${reviewValues[2]}</span>
        </span>
        <span class="${cssPrefix}-body-reviewCountStarScore">
          <span class="${cssPrefix}-body-reviewCountStarScore-stars">2</span>
          <span class="${cssPrefix}-body-reviewCountStarScore-bar" style="width:${barSize(reviewValues[1])}px;"></span>
          <span class="${cssPrefix}-body-reviewCountStarScore-reviews">${reviewValues[1]}</span>
        </span>
        <span class="${cssPrefix}-body-reviewCountStarScore">
          <span class="${cssPrefix}-body-reviewCountStarScore-stars">1</span>
          <span class="${cssPrefix}-body-reviewCountStarScore-bar" style="width:${barSize(reviewValues[0])}px;"></span>
          <span class="${cssPrefix}-body-reviewCountStarScore-reviews">${reviewValues[0]}</span>
        </span>
      </div>
    </div>`;
    this.container = compile(scoreBoard);
  }

  getContainer() {
    return this.container;
  }
}
