arr = 'BQB987fIiQn7rFrSJRGRMqEeeXgS9t7wR7F92is7m-QJYbNx4THL3ur4Fy12qdr2RWHro84aG7zVTAFNq1ZspBPNd0MGHMv06j7qO1398MD53wBGdzDJsw9iH32_J9xXkFzvaBhJaFAYmpAHRzGTW7vE0QIg0xDxuKEiTw'

function componentDidMount(accessToken) {
    fetch('https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=20', {
        method: 'GET', headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + accessToken
        }
    })
        .then((respond) => {
            if (!respond.ok) {
                throw Error('Failed to fetch');
            }
            data = respond.json()
            return data

                .then(data => {

                    var items = data.items;
                    console.log(items);
                    const reformatted = items.map(items => ({artist: items.artists[0].name, 
                                                             songname: items.album.name, 
                                                             songid: items.album.id, 
                                                             image: items.album.images[0], 
                                                             releasedate: items.album.release_date, 
                                                             count: 0 }))

                    console.log(reformatted)
                    return reformatted;

                }
                )
        });
}

/*
function musicobject(reformatted){
    const musicobjects = [];

    for (let i = 0; i < reformatted; i++) {
        for (let j = 0; j < cache.length; j++) {
            if (reformatted.items.album.id == cache[j].items.album.id) {
                cache[j].count = cache[j].count + 1;
                musicobjects = musicobjects[cache[j]]
            } else {
                musicobjects = musicobjects[reformatted, cache[j]]
            }
            
        }
        
    }

}

musicobject(reformatted)*/
componentDidMount(arr);