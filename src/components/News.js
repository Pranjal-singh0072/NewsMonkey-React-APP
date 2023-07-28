import React, { Component } from 'react';
import NewsItem from './NewsItem';


export default class News extends Component{
  articles = [
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Josh Pennington, Alex Stambaugh, Brad Lendon",
    "title": "Ukraine claims responsibility for new attack on key Crimea bridge - CNN",
    "description": "Two people have been killed and their daughter wounded in an attack on the vital bridge linking the annexed Crimean peninsula to the Russian mainland, according to a local official, in an incident that has been claimed by Ukrainian forces.",
    "url": "https://www.cnn.com/2023/07/16/europe/russia-crimea-bridge-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230717123035-crimean-bridge-0717.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-17T10:09:00Z",
    "content": "Two people have been killed and their daughter wounded in an attack on the vital bridge linking the annexed Crimean peninsula to the Russian mainland, according to a local official, in an incident th… [+3852 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Homero De la Fuente",
    "title": "Inter Miami officially unveils Lionel Messi in weather-impacted ceremony in South Florida - CNN",
    "description": "Not even South Florida’s rain on Lionel Messi’s parade could stop the Argentine superstar’s introductory celebration to Inter Miami as fans weathered the elements to welcome one of the greatest soccer players ever to their home at DRV PNK Stadium on Sunday.",
    "url": "https://www.cnn.com/2023/07/17/sport/lionel-messi-inter-miami-unveil-spt-intl/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230717093240-01-messi-unveiling-071623.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-17T09:46:00Z",
    "content": "Not even South Floridas rain on Lionel Messis parade could stop the Argentine superstars introductory celebration to Inter Miami as fans weathered the elements to welcome one of the greatest soccer p… [+2411 chars]"
    },
    {
    "source": {
    "id": "the-washington-post",
    "name": "The Washington Post"
    },
    "author": "Frances Vinall",
    "title": "Death toll from South Korean floods rises to 40; more rain expected - The Washington Post",
    "description": "Water swept into an underpass near Cheongju and flooded vehicles including a bus, authorities said, as the country grapples with continuing heavy rain.",
    "url": "https://www.washingtonpost.com/world/2023/07/17/south-korea-floods-tunnel-deaths/",
    "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://d1i4t8bqe7zgj6.cloudfront.net/thumbnails/64b3f1676f452a6feb0c6285/2023-07-16T132511Z_1_OV743716072023RP1_RTRMADC_0_ASIA-WEATHER-SOUTHKOREA.jpg&w=1440",
    "publishedAt": "2023-07-17T09:28:00Z",
    "content": "Comment on this story\r\nComment\r\nThirteen bodies were recovered from a tunnel in South Korea as the flooding death toll across the country rose to at least 40.\r\nCars were trapped in a tunnel underpass… [+2179 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Ruxandra Iordache",
    "title": "Russia axes landmark Ukraine grain deal just hours before deadline - CNBC",
    "description": "A pact facilitating the export of key Ukrainian grains to the global markets was set to expire on Monday.",
    "url": "https://www.cnbc.com/2023/07/17/russia-says-it-will-not-extend-the-landmark-ukraine-grain-deal.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107272224-1689585640573-gettyimages-1251552534-AFP_33CZ3LF.jpeg?v=1689585778&w=1920&h=1080",
    "publishedAt": "2023-07-17T09:22:58Z",
    "content": "Russia on Monday said it had suspended a humanitarian corridor to deliver key Ukrainian grains to global markets, hours before the agreement's expiry.\r\nFirst inked in July 2022, the U.N.-brokered Bla… [+3388 chars]"
    },
    {
    "source": {
    "id": "reuters",
    "name": "Reuters"
    },
    "author": "Amanda Cooper",
    "title": "Global shares, dollar sag after China data; traders bet on Fed sea change - Reuters",
    "description": "Global shares and commodities slipped on Monday after data showed the Chinese economy is growing more slowly than expected, while the dollar eased as traders ramped up their bets for an imminent end to U.S. rate rises.",
    "url": "https://www.reuters.com/markets/global-markets-wrapup-1-pix-2023-07-17/",
    "urlToImage": "https://www.reuters.com/resizer/ZwMKbFmKsEWCdzQHmW05sDvo1OA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/LNQ4QWQMGRO4LFUBFJ4SMT6RAA.jpg",
    "publishedAt": "2023-07-17T08:56:00Z",
    "content": "LONDON, July 17 (Reuters) - Global shares and commodities slipped on Monday after data showed the Chinese economy is growing more slowly than expected, while the dollar eased as traders ramped up the… [+3987 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "CNBC"
    },
    "author": "Sophie Kiderlin",
    "title": "Treasury yields fall as investors assess state of U.S. economy - CNBC",
    "description": "U.S Treasury yields declined on Monday as investors considered the outlook for the economy and monetary policy.",
    "url": "https://www.cnbc.com/2023/07/17/us-treasury-yields-as-investors-assess-state-of-economy.html",
    "urlToImage": "https://image.cnbcfm.com/api/v1/image/107262237-1687736518053-gettyimages-1495130419-dscf3790_kb1selu9.jpeg?v=1689582938&w=1920&h=1080",
    "publishedAt": "2023-07-17T08:35:38Z",
    "content": "U.S. Treasury yields declined on Monday as investors considered the outlook for the economy and monetary policy ahead of a week with few key economic data reports.\r\nAt 5:40 a.m. ET, the yield on the … [+1376 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Laura He",
    "title": "More stimulus ‘desperately’ needed as China’s economic recovery slows further - CNN",
    "description": "China’s economy expanded by 6.3% in the second quarter from a year ago because of a low base, the National Bureau of Statistics said on Monday, with momentum slowing following a strong reopening in the first quarter.",
    "url": "https://www.cnn.com/2023/07/16/economy/china-economy-q2-gdp-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230717085201-china-cargo-0716.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-17T08:27:00Z",
    "content": "Chinas economic recovery continued to lose steam in the second quarter of 2023, prompting urgent calls for more stimulus from Beijing.\r\nThe worlds second largest economy expanded by 6.3% in the April… [+6358 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "SciTechDaily"
    },
    "author": null,
    "title": "CRISPR Gene Editing Used To Build a Better Forest Tree for Sustainable Fiber Production - SciTechDaily",
    "description": "Researchers at North Carolina State University (NC State) have successfully applied CRISPR gene-editing technology to breed poplar trees with reduced levels of lignin, a significant barrier to the sustainable production of wood fibers. The research, which off…",
    "url": "https://scitechdaily.com/?p=292421",
    "urlToImage": "https://scitechdaily.com/images/Tall-Forest-Tree-Art-Concept.jpg",
    "publishedAt": "2023-07-17T08:24:36Z",
    "content": "ByNorth Carolina State UniversityJuly 17, 2023\r\nUsing CRISPR technology, researchers at North Carolina State University have bred poplar trees with reduced lignin content, leading to a more efficient… [+9212 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "YouTube"
    },
    "author": null,
    "title": "Jane Birkin, actress and singer, dies aged 76 – BBC News - BBC News",
    "description": "The singer, actress and fashion icon Jane Birkin has died at the age of 76. The English-French star rose to fame alongside songwriter Serge Gainsbourg, with ...",
    "url": "https://www.youtube.com/watch?v=K0amGSiAz24",
    "urlToImage": "https://i.ytimg.com/vi/K0amGSiAz24/maxresdefault.jpg",
    "publishedAt": "2023-07-17T08:12:47Z",
    "content": null
    },
    {
    "source": {
    "id": null,
    "name": "Tipranks.com"
    },
    "author": "Sirisha Bhogaraju",
    "title": "Tesla's (NASDAQ:TSLA) Cybertruck Production Finally Takes Off - TipRanks.com - TipRanks",
    "description": "After much delay, Tesla (NASDAQ:TSLA) has finally commenced the production of its Cybertruck electric pickup at its Gigafactory in Austin, Texas, the company tweete...",
    "url": "https://www.tipranks.com/news/teslas-nasdaqtsla-cybertruck-production-finally-takes-off",
    "urlToImage": "https://blog.tipranks.com/wp-content/uploads/2023/07/shutterstock_1634989399-750x406.jpg",
    "publishedAt": "2023-07-17T07:25:49Z",
    "content": "After much delay, Tesla (NASDAQ:TSLA) has finally commenced the production of its Cybertruck electric pickup at its Gigafactory in Austin, Texas, the company tweeted on Saturday. The news comes ahead… [+2423 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Athletic"
    },
    "author": "Charlie Scott",
    "title": "How Carlos Alcaraz tamed ‘lion’ Novak Djokovic to be crowned Wimbledon champion - The Athletic",
    "description": "From a rapid adjustment to grass to fearlessness in key moments - and the way he broke Djokovic's serve. This is how Alcaraz won Wimbledon",
    "url": "https://theathletic.com/4694982/2023/07/16/carlos-alcaraz-wimbledon-champion-novak-djokovic/",
    "urlToImage": "https://cdn.theathletic.com/app/uploads/2023/07/16171738/GettyImages-1548885668-scaled-e1689542359988.jpg",
    "publishedAt": "2023-07-17T07:07:30Z",
    "content": "In more than a decade, 45 players had failed to beat Novak Djokovic on Centre Court. The most recent one to manage it was Andy Murray, in the Wimbledon final on July 7, 2013. \r\nFor 34 consecutive mat… [+10275 chars]"
    },
    {
    "source": {
    "id": "independent",
    "name": "Independent"
    },
    "author": "Ellie Harrison",
    "title": "Mark Ruffalo condemns 'billionaires' in Hollywood – strike news live - The Independent",
    "description": "Why is there an actors strike and what’s the latest news?",
    "url": "https://www.independent.co.uk/arts-entertainment/films/news/sag-aftra-actors-strike-2023-latest-b2376390.html",
    "urlToImage": "https://static.independent.co.uk/2023/07/16/11/newFile-1.jpg?quality=75&width=1200&auto=webp",
    "publishedAt": "2023-07-17T05:30:16Z",
    "content": "Christopher Nolan gives warning about AI\r\nAt a special screening of his film Oppenheimer, Christopher Nolan compared the rapid development of AI technology (a key issue in the labour dispute) with th… [+1183 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Caitlin Kaiser",
    "title": "Canadian wildfires put nearly 60 million US residents under air quality alerts - CNN",
    "description": "Canadian wildfire smoke continues to plague the United States, triggering air quality alerts for 11 states across the northern Plains, Midwest, and Great Lakes region Sunday.",
    "url": "https://www.cnn.com/2023/07/16/weather/canada-wildfires-us-air-quality-alerts-sunday/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230716163109-02-illinois-air-quality-071623-smoke.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-17T05:30:00Z",
    "content": "Canadian wildfire smoke continues to plague the United States, triggering air quality alerts for 11 states across the northern Plains, Midwest, and Great Lakes region Sunday. \r\nFrom Montana to New Yo… [+3388 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "Android Authority"
    },
    "author": null,
    "title": "Nothing Phone 2 camera gets lots of love in its first software update - Android Authority",
    "description": "The Nothing Phone 2 is now getting its first update with a packed changelog and multiple camera improvements. Here are all the details.",
    "url": "https://www.androidauthority.com/nothing-phone-2-updates-3345690/",
    "urlToImage": "https://www.androidauthority.com/wp-content/uploads/2023/07/Nothing-Phone-2-Essential-Glyph-Light-On.jpg",
    "publishedAt": "2023-07-17T05:20:48Z",
    "content": "Welcome to the Nothing Phone 2 update hub. Here youll find the latest information about the software of the phone and all the updates it gets over time. If youre still considering buying the phone, h… [+1418 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "New York Post"
    },
    "author": "Fox News",
    "title": "Jason Aldean suffers from heat stroke in Hartford, runs off stage mid-performance - New York Post ",
    "description": "Jason Aldean’s concert came to an abrupt end after the singer showed obvious distress on stage Saturday night in Connecticut.",
    "url": "https://nypost.com/2023/07/17/jason-aldean-suffers-from-heat-stroke-in-hartford-runs-off-stage-mid-performance/",
    "urlToImage": "https://nypost.com/wp-content/uploads/sites/2/2023/07/newspress-collage-xojmyocf1-1689568939396.jpg?quality=75&strip=all&1689554572&w=1024",
    "publishedAt": "2023-07-17T05:05:00Z",
    "content": "Jason Aldean’s concert came to an abrupt end after the singer showed obvious distress on stage Saturday night in Connecticut.\r\nWhile performing at the Xfinity Theatre in Hartford, Aldean struggled to… [+1626 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Polo Sandoval, Samantha Beech",
    "title": "Top investigator describes suspect in Gilgo Beach serial killings case as ‘a demon’ - CNN",
    "description": "A top investigator on the Gilgo Beach serial killings task force described the suspect, Rex Heuermann, as a “demon” and said authorities are still working full-time on the case that has terrorized the Long Island community for more than a decade.",
    "url": "https://www.cnn.com/2023/07/16/us/murder-victims-gilgo-beach-rex-heuermann/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230716174759-05-gilgo-beach-investigation-0715.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-17T04:49:00Z",
    "content": "A top investigator on the Gilgo Beach serial killings task force described the suspect, Rex Heuermann, as a demon and said authorities are still working full-time on the case that has terrorized the … [+4176 chars]"
    },
    {
    "source": {
    "id": "cnn",
    "name": "CNN"
    },
    "author": "Artemis Moshtaghian, Hande Atay Alam, Kathleen Magramo",
    "title": "Iran’s morality police resume headscarf patrols, state media says - CNN",
    "description": "Iran’s morality police will resume patrols to make women comply with strict Islamic dress codes, state media reported Sunday, 10 months after the death of a young woman in their custody triggered nationwide protests.",
    "url": "https://www.cnn.com/2023/07/16/middleeast/iran-morality-police-hijab-patrols-intl-hnk/index.html",
    "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230716211229-01-iran-morality-police-hijab-law-file-2007.jpg?c=16x9&q=w_800,c_fill",
    "publishedAt": "2023-07-17T03:05:00Z",
    "content": "Irans morality police will resume patrols to make women comply with strict Islamic dress codes, state media reported Sunday, 10 months after the death of a young woman in their custody triggered nati… [+1697 chars]"
    },
    {
    "source": {
    "id": null,
    "name": "The Guardian"
    },
    "author": "https://www.theguardian.com/profile/rebecca-ratcliffe,https://www.theguardian.com/profile/emily-wind,https://www.theguardian.com/profile/peter-hannam,https://www.theguardian.com/profile/justinmccurry,https://www.theguardian.com/profile/emma-graham-harrison",
    "title": "Extreme heatwave live updates: hundreds of millions from US to Europe and Asia hit by severe heat - The Guardian",
    "description": "Italy told to prepare for most intense heatwave ‘of all time’ and 100 million Americans remain under extreme heat advisories as climate crisis bites",
    "url": "https://www.theguardian.com/environment/live/2023/jul/17/europe-heatwave-2023-us-asia-heat-extreme-severe-weather-fires-flash-floods-flooding-record-breaking-heat-wave-stress-temperature-red-alert-climate-crisis",
    "urlToImage": "https://i.guim.co.uk/img/media/e12d8642542f425c4f1dadeede2e196b44726205/0_159_4000_2400/master/4000.jpg?width=1200&height=630&quality=85&auto=format&fit=crop&overlay-align=bottom%2Cleft&overlay-width=100p&overlay-base64=L2ltZy9zdGF0aWMvb3ZlcmxheXMvdGctbGl2ZS5wbmc&enable=upscale&s=9ebbfbdb2e6838b782d41f02990617f7",
    "publishedAt": "2023-07-17T02:56:20Z",
    "content": "Here is a summary of the latest developments as extreme heat grips large parts of the planet:&lt;/p&gt;\",\"elementId\":\"d76598bc-8a22-4404-8e28-8c527ed3ba33\"},{\"_type\":\"model.dotcomrendering.pageElemen… [+163911 chars]"
    },
    {
    "source": {
    "id": "the-hill",
    "name": "The Hill"
    },
    "author": "Julia Shapero",
    "title": "Microsoft, Sony make deal to keep Activision Blizzard game franchise on PlayStation following acquisition - The Hill",
    "description": "Microsoft and Sony have reached a deal to keep Call of Duty, a popular video game franchise made by Activision Blizzard, available on PlayStation following Microsoft’s planned acquisition of the video game company. “We are pleased to announce that Microsoft a…",
    "url": "https://thehill.com/business/4100768-microsoft-sony-make-deal-to-keep-activision-blizzard-game-franchise-on-playstation-following-acquisition/",
    "urlToImage": "https://thehill.com/wp-content/uploads/sites/2/2023/07/Microsoft-Activision.webp?w=1280",
    "publishedAt": "2023-07-17T02:56:00Z",
    "content": "Skip to content\r\nMicrosoft and Sony have reached a deal to keep Call of Duty, a popular video game franchise made by Activision Blizzard, available on PlayStation following Microsoft’s planned acquis… [+1748 chars]"
    },
    {
    "source": {
    "id": "abc-news",
    "name": "ABC News"
    },
    "author": "Nicholas Kerr",
    "title": "RFK Jr. accused of making antisemitic, racist claims about COVID-19 but insists he was misunderstood - ABC News",
    "description": "The 2024 candidate was denounced for what he claimed was a \"misinterpretation.\"",
    "url": "https://abcnews.go.com/Politics/rfk-jr-accused-making-antisemitic-racist-claims-covid/story?id=101323851",
    "urlToImage": "https://s.abcnews.com/images/US/rfk-1-rt-er-230716_1689541001112_hpMain_16x9_992.jpg",
    "publishedAt": "2023-07-17T01:54:53Z",
    "content": "Democratic presidential candidate Robert F. Kennedy Jr. faced accusations of making antisemitic and racist remarks over the weekend after he was recorded citing a false conspiracy theory that COVID-1… [+6306 chars]"
    }
    ]
  constructor(){
    super();
   
    console.log("Hello I am a constructor from news component");
    this.state = {
      articles:this.articles,
      loading: false,
      page:1
    }
  }

  async componentDidMount(){
   
    
    let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=f31a8f6fbf6f4d19a379b2e2bad30610&page=1pagesSize=20";
    let data = await fetch(url);
    let parsedData =  await data.json()
    console.log(parsedData);
    this.setState({articles: parsedData.articles, totalResults: parsedData.totalResults})
  }

handlePrevClick =  async ()=>{
    console.log("Previous");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f31a8f6fbf6f4d19a379b2e2bad30610&page=${this.state.page - 1}&pagesSize=20`;
    let data = await fetch(url);
    let parsedData =  await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles
    })
  }


handleNextClick = async ()=>{
    console.log("Next");
    if(  this.state.page + 1 > Math.ceil(this.state.totalResults/20)){

    }
    else{
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=f31a8f6fbf6f4d19a379b2e2bad30610&page=${this.state.page + 1}&pagesSize=20`;
    let data = await fetch(url);
    let parsedData =  await data.json()
    console.log(parsedData);
    this.setState({
      page: this.state.page + 1,
      articles: parsedData.articles
    })
  }

  
  
  }



  render() {
  
    return (
      <div className='container my-3'>
        <h2>NewsMonkey - Top Headlines </h2>
        <div className="row">
          {this.state.articles.map((element)=>{
            return <div className="col-md-4" key ={element.url}>
            <NewsItem title={element.title?element.title:""} description={element.description?element.description:""} ImageUrl={element.urlToImage} newsUrl={element.url}/>
             </div>
          })}
        </div>
        <div className='container d-flex justify-content-between'>
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
        <button  type="button" className="btn btn-dark" onClick={this.handleNextClick}> Next &rarr;</button>
        </div>
        </div>
    );
  }
}
