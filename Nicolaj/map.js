function componentDidMount() {
    fetch('https://api.coingecko.com/api/v3/coins/moonriver')
    .then(respond=>{
        if (!respond.ok) {
            throw Error('Failed to fetch');
        }
        return respond.json();
    })
    .then(data=>{
        console.log(data.id);
        
    })
    
  }
componentDidMount();