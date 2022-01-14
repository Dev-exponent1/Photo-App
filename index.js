

var url = "https://api.pexels.com/v1/search?query=searchText";
var bearerKY = '563492ad6f91700001000001b3fe4d688f73457683854a5b2d60327b'
fetch(url, {
        method: 'GET',
        withCredentials: true,
        credentials: 'include',
        headers: {
            'Authorization': `Bearer ${bearerKY}`,
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '',
            'Access-Control-Allow-Credentials': 'true'
        }
    }).then(responseJson => {
        var items = JSON.parse(responseJson._bodyInit);
    })
    .catch(error => this.setState({
        isLoading: false,
        message: 'Something bad happened ' + error
    }));