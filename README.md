# fl-facebook-reviews

Show reviews for a page in facebook style

- **[See demo](https://fourlabsldn.github.io/fl-facebook-reviews)**
To use it you will need:
- The CSS for the project (which is in the build folder)
- A configuration object

``` HTML
<!-- Include the project's JS and CSS-->
<script src="../dist/fl-facebook-reviews.js"> </script>
<link rel="stylesheet" href="../dist/fl-facebook-reviews.css">

<div id="target"></div>

<script>
  const data = {
    'summary': {
        'url': '//www.facebook.com/slvglobal',
        'average': 4.8,
        'count': 103,
        'values': {
            1: 5,
            2: 2,
            3: 3,
            4: 43,
            5: 50,
        },
    },
    'reviews': [{
        'rating': 5,
        'created_time': '2016-06-15T16:00:00.000Z',
        'review_text': 'Amazing!',
        'reviewer': {
            'name': 'John Smith',
            'id': '1234556'
        },
    }]
  };

  const div = document.createElement('div');
  div.dataset.info = JSON.stringify(data);
  document.querySelector('#target').appendChild(div);
  flFacebookReviews(div);
</script>
```

# Install
## NPM
```
npm install fl-facebook-reviews --save
```

## Tasks

### Build
```
npm run build
```
