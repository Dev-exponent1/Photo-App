

var url = "https://api.pexels.com/v1/search?query=searchText";
var bearer = '563492ad6f91700001000001b3fe4d688f73457683854a5b2d60327b'
fetch(url, {
        method: 'GET',
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
        }
    }).then(responseJson => {
        var items = JSON.parse(responseJson._bodyInit);
    })
    .catch(error => this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
    }));


    // From https://foo.com/
const response = await fetch('https://api.pexels.com/v1/search?query=searchText', {
    mode: 'no-cors' // 'cors' by default
  })
  console.log(response)
  // Do something with response