const express=require('express');
const cors=require("cors")
const SpotifyWebApi=require('spotify-web-api-node');
const app=express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.get("/",(req,res)=>{
  return res.send("Server Running")
})
app.post("/refresh",(req,res)=>{
    const refreshToken=req.body.refreshToken
    console.log(refreshToken)
    const spotifyApi=new SpotifyWebApi({
        redirectUri:"https://spotify-clone-frontend-puce.vercel.app/dashboard",
        clientId:"7322e3c6dc2e49749868c347b09f83cf",
        clientSecret:"7cfa66411fe0420f8781f0309f5f97a1",
        refreshToken,
    })

    spotifyApi
    .refreshAccessToken()
    .then(data => {
      res.json({
        accessToken: data.body.accessToken,
        expiresIn: data.body.expiresIn,
      })
    })
    .catch(err => {
      console.log(err)
     return res.sendStatus(400)
    })

})

app.post('/login',(req,res)=>{
  
    const code=req.body.code
    console.log(code)
    const spotifyApi=new SpotifyWebApi({
        redirectUri:"https://spotify-clone-frontend-puce.vercel.app/dashboard",
        clientId:"7322e3c6dc2e49749868c347b09f83cf",
        clientSecret:"7cfa66411fe0420f8781f0309f5f97a1"
    })
    spotifyApi.authorizationCodeGrant(code).then(data=>{
       return res.json({
        accessToken:data.body.access_token,
        refreshToken:data.body.refresh_token,
        expiresIn:data.body.expires_in
       })
    }).catch((error)=>{
        console.log(error)
    
        return res.sendStatus(400)
    })
})

app.listen(3000,()=>{
    console.log("Running")
})