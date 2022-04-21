

obj={
    "id": "moonriver",
    "symbol": "movr",
    "name": "Moonriver",
    "asset_platform_id": "moonriver",
    "platforms": {
        "moonriver": "0x98878b06940ae243284ca214f92bb71a2b032b8a",
        "meter": "0xb158870beb809ad955bf56065c5c10d7fd957cc0"
    }
}
    
    List = {id: 0, Count: 0}
    Songarray = [400];

function Songcount(List, Songarray, obj) {
            console.log(obj)
                Song = obj.id
                List.id = Song
                Songarray[0] = List
    
                for (let j = 0; j < Songarray.length; j++) {
                
                    if (List.id==Songarray[j].id) {
                        Songarray[j].Count = Songarray[j].Count + 1
                     }
                }
                
                console.log(Songarray[0])
}

for (let i = 0; i < 3; i++) {
    Songcount(List, Songarray, obj);
}

console.log(obj)
